var express = require('express');
var app = express();
var appPort = 4000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));

// app.get('/', function (req, res) {
// 	res.send("hello world from node-server.js")
// })

app.listen(appPort);
console.log("server running on port "+appPort);