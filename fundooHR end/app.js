var express = require('express');
var bodyParser = require('body-parser');
//var http = require('http');
var cors = require('cors');
var app = express();
var port = process.env.PORT || 3020;

app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
//http = require('http').Server(app),

app.use(require('./controller/index'));
app.listen(port, function() {
    console.log("port:" + port);
})
