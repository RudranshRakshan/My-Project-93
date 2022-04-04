const firebaseConfig = {
      apiKey: "AIzaSyAB1C_gjcOZwjroKce9RDkZe-ixlzOxPSw",
      authDomain: "web-room-30cfd.firebaseapp.com",
      databaseURL: "https://web-room-30cfd-default-rtdb.firebaseio.com",
      projectId: "web-room-30cfd",
      storageBucket: "web-room-30cfd.appspot.com",
      messagingSenderId: "856147673014",
      appId: "1:856147673014:web:494caac9e008b6f54f4b17",
      measurementId: "G-2MRECW3V2W"
};

firebase.initializeApp(firebaseConfig);

user = localStorage.getItem("UserName");
room = "";

document.getElementById("Uname").innerHTML = "Welocome " + user + " !";
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  row = "<div id=" + Room_names + " class='room_name' onclick='redirectToRoom(this.id)'>" + Room_names + "</div> <hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function logOut() {
      localStorage.removeItem("UserName");
      localStorage.removeItem("roomName");
      window.location = "index.html";
}

function addRoom() {
      room = document.getElementById("roomName").value;
      localStorage.setItem(roomName, 'roomName');
      firebase.database().ref("/").child(room).update({
            purpose: "adding a new room"
      });
      window.location = "chats.html";
}

function redirectToRoom(room){
   localStorage.setItem("roomName", room);
   window.location="chats.html";
  
}