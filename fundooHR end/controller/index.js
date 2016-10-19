var express = require('express');
var app = express();
var router=express.Router();

router.get('/',function(req,res){
  console.log("it's working");
})
router.use('/firebase',require('./firebaseCtrl.js'));
router.use('/auth',require('./firebaseAuth.js'));
// firebase = require('./config/firebase');
// console.log(firebase);
module.exports=router;
