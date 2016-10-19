var express = require('express');
var http=require('http');
var app = express();
var bodyParser=require('body-parser');
app.use(bodyParser());
http = require('http').Server(app),
 port = process.env.PORT || 3020;
app.use(require('./controller/index'));
app.listen(port,function(){
console.log("port:"+port);
})
