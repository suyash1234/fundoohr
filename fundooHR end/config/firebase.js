//<script src="https://www.gstatic.com/firebasejs/3.5.0/firebase.js"></script>
  // Initialize Firebase
var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyBBji58hVCjn06VM1Fg9Klu0-KPXfFLiaU",
    authDomain: "fundoohr.firebaseapp.com",
    databaseURL: "https://fundoohr.firebaseio.com",
    storageBucket: "fundoohr.appspot.com",
    messagingSenderId: "248966086188"
  };
  firebase.initializeApp(config);

  module.exports=firebase;
