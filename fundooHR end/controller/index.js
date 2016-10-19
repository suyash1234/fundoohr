var express = require('express');
var app = express();
var router=express.Router();

router.get('/',function(req,res){
  console.log("it's working");
})
router.use('/save',require('./fSaveCtrl.js'));
router.use('/update',require('./fUpdateCtrl.js'));
// firebase = require('./config/firebase');
// console.log(firebase);
module.exports=router;
