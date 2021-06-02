var firebase = {
      apiKey: "AIzaSyAxJUzTxlro-hYWfW8yTnSuv_XZXXT4fZc",
      authDomain: "einstien-9ccn.firebaseapp.com",
      databaseURL: "https://einstien-9ccn-default-rtdb.firebaseio.com",
      projectId: "einstien-9ccn",
      storageBucket: "einstien-9ccn.appspot.com",
      messagingSenderId: "569595572387",
      appId: "1:569595572387:web:eeabf3525c5c90bb924f16"
    };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
