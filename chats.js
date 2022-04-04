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
room = localStorage.getItem("roomName");

function getData() {
    firebase.database().ref("/" + room).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code
                      Name = message_data["name"];
                      likess = message_data["like"];
                      msg = message_data["message"];
                      name_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                      msg_tag = "<h4 class='message_h4'>" + msg + "</h4>";
                      btn_tag = "<button class='btn btn-primary' id=" + firebase_message_id + " value=" + likess + " onclick='updateLikes(this.id)'>";
                      span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + likess + "</span></button><hr>";
                      row = name_tag + msg_tag + btn_tag + span_tag;
                      document.getElementById("output").innerHTML+=row;
                      //End code
                }
          });
    });
}
getData();

function logOut() {
    localStorage.removeItem("UserName");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}

function send() {
    var sendMessage = document.getElementById("chatSend_box").value;
    firebase.database().ref(room).push({
          name: user,
          message: sendMessage,
          like: 0
    });
    document.getElementById("chatSend_box").value = "";
}

function updateLikes(id) {
    buttonId = id;
    likes = document.getElementById(buttonId).value;
    newLikes = Number(likes) + 1
    firebase.database().ref(room).child(id).update({
          like: newLikes
    });
}