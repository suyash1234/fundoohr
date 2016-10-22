//<script src="https://www.gstatic.com/firebasejs/3.5.0/firebase.js"></script>
  // Initialize Firebase



// var firebase = require('firebase');
//   var config = {
//     apiKey: "AIzaSyBBji58hVCjn06VM1Fg9Klu0-KPXfFLiaU",
//     authDomain: "fundoohr.firebaseapp.com",
//     databaseURL: "https://fundoohr.firebaseio.com",
//     storageBucket: "fundoohr.appspot.com",
//     messagingSenderId: "248966086188"
//   };



  // Initialize Firebase
  var firebase = require('firebase');
  var config = {
    apiKey: "AIzaSyBYp1zSA1Ef3Nn7xFpWy76x86Ll2T_ZSGc",
    authDomain: "fundoohr-eb5eb.firebaseapp.com",
    databaseURL: "https://fundoohr-eb5eb.firebaseio.com",
    storageBucket: "fundoohr-eb5eb.appspot.com",
    messagingSenderId: "37143502908"
  };
  


// var first =  firebase.initializeApp(config);

// var config = {
//   apiKey: "AIzaSyCt8RoErAEUMRBq_GMnLVrA0n7eQT60B4c",
//   authDomain: "ipl-project-5dbbb.firebaseapp.com",
//   databaseURL: "https://ipl-project-5dbbb.firebaseio.com",
//   storageBucket: "ipl-project-5dbbb.appspot.com",
//   messagingSenderId: "20144755889"
// };
firebase.initializeApp(config);
module.exports=firebase;
