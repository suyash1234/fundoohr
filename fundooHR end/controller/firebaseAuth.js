/**
 * define require module
 */
var express = require('express');
var router = express.Router();
var firebase = require('../config/firebase.js');
router.post('/', function(req, res) {
  console.log(req.body);
  authCredential(req.body,function(data){
    if(data.success!==undefined)
    {
      res.send(data);
    console.log(data);
    }else {
      //res.send(data)
      console.log("error"+JSON.stringify(data));
    }
  });
});
/********Verification Email and password********/
var authCredential  = function (data,callback){

  firebase.auth().signInWithEmailAndPassword(data.email, data.password).catch(function(err) {
    console.log("Catch::"+err.message);
          //callback({"error":err.message});
      })
      .then(function(data) {
        console.log("Then::",data);
          //callback({"success":data});
      });
}


module.exports = router;
