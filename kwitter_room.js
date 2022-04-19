
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDfnglDOrdoagAk7d-t2WkM991S5Ks8x_Q",
      authDomain: "kwitter-cbc51.firebaseapp.com",
      databaseURL: "https://kwitter-cbc51-default-rtdb.firebaseio.com",
      projectId: "kwitter-cbc51",
      storageBucket: "kwitter-cbc51.appspot.com",
      messagingSenderId: "736751890115",
      appId: "1:736751890115:web:46a2b6936aaa3c98c1fc76"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
   });
 });

}

getData();

function logout(){
      window.location = "index.html";

      localStorage.removeItem("user_name", user_name);

      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html;"
}

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}