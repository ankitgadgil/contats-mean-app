var express = require('express');
var app = express();
var appPort = 4000;

app.get('/', function (req, res) {
	res.send("hello world from node-server.js")
})

app.listen(appPort);
console.log("server running on port "+appPort);