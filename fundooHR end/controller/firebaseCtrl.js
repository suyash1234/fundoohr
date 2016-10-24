/**
 * define require module
 */
var express = require('express');
var router = express.Router();

var firebase=require('../config/firebase.js');


router.get('/fundoohr', function(req, res) {
// var firebase = require('../config/firebase1.js');
    console.log("fundoohr data called....");
     var ref = firebase.database().ref();
    ref.on("value", function(snapshot) {
        // console.log(snapshot.val());
       res.send(snapshot.val());
    }, function(error) {
        console.log("Error: " + error.code);
    });
    //console.log(firebase+"Data save...");
});
router.get('/save', function(req, res) {

  console.log("Firebase called....");
  var ref = firebase.database().ref();
   ref.on("value", function(snapshot) {
     res.send(snapshot.val());
       console.log(snapshot.val());
   }, function(error) {
       console.log("Error: " + error.code);
   });
  //console.log(firebase+"Data save...");
});

router.get('/update', function(req, res) {

    console.log("insert into firebase...");
    var fbref = firebase.database().ref();
    fbref.push({
        "name": {
            "firstName": "John",
            "lastName": "Doe"
        }
    });
    //console.log(firebase+"Data save...");
});

module.exports = router;
