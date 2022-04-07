
var firebaseConfig = {
      apiKey: "AIzaSyCbubRdx5V_pkiVip8bXIVD2WuHmXZnp38",
      authDomain: "water-mellon-4th-april-of-2022.firebaseapp.com",
      databaseURL: "https://water-mellon-4th-april-of-2022-default-rtdb.firebaseio.com",
      projectId: "water-mellon-4th-april-of-2022",
      storageBucket: "water-mellon-4th-april-of-2022.appspot.com",
      messagingSenderId: "317717809254",
      appId: "1:317717809254:web:6dda5f89199a2a571dc5a7"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name",user_name);
 document.getElementById("user_name").innerHTML="welcome " +user_name;
 function addroom()
 {room_name=document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
      purpose:"addingroomname"
});
localStorage.setItem("roomname",room_name);
window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'> #"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name)
{
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}