var firebaseConfig = {
      apiKey: "AIzaSyBe3z4sbamXnMZQOTmZ4nEzTjobC4vPGJk",
      authDomain: "kwitter-39ac5.firebaseapp.com",
      databaseURL: "https://kwitter-39ac5-default-rtdb.firebaseio.com",
      projectId: "kwitter-39ac5",
      storageBucket: "kwitter-39ac5.appspot.com",
      messagingSenderId: "313477930737",
      appId: "1:313477930737:web:724747fdafc600a96e5350"
    };
    firebase.initializeApp(firebaseConfig);

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.databas().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name". room_name);

      window.location = "kwitter_page.html";
}    
      

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;   
      //End code
      });});}
getData();


