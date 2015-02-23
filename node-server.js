var express = require('express');
var app = express();
var appPort = 4000;

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));

app.get('/contactlist', function (req, res) {
	console.log("Received a GET request")

	superhero1 = {
		"name" : "Ironman",
    	"email" : "ironman@avengers.org",
    	"number" : "(A1) 111-1111"
	};

	superhero2 = {
		"name" : "Hulk",
	    "email" : "hulk@avengers.org",
	    "number" : "(A2) 222-2222"
	};
	
	superhero3 = {
		"name" : "Thor",
	    "email" : "thor@avengers.org",
	    "number" : "(A3) 333-3333"
	};
	
	var superheros = [superhero1, superhero2, superhero3]
	res.json(superheros)
})

// app.get('/', function (req, res) {
// 	res.send("hello world from node-server.js")
// })

app.listen(appPort);
console.log("server running on port "+appPort);