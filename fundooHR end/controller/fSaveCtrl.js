/**
 * define require module
 */
var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
  console.log("Data save...");
});
router.get('/', function(req, res) {
  var firebase=require('../config/firebase.js');
  console.log("Firebase called....");
  var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
       console.log(snapshot.val());
   }, function(error) {
       console.log("Error: " + error.code);
   });
  //console.log(firebase+"Data save...");
});

module.exports=router;
