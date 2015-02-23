var express = require('express');
var app = express();
var appPort = 4000;
var mongojs = require('mongojs');
var db = mongojs('superheros',['superheros']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/bower_components"));
app.use(bodyParser.json());

app.get('/superherocontacts', function (req, res) {
	console.log("Received a GET request")

	db.superheros.find(function (err, superhero_docs) {
		console.log(superhero_docs);
		res.json(superhero_docs);
	});

	//dummy data, this data will be fed by mongodb now
	// superhero1 = {
	// 	"name" : "Ironman",
 //    	"email" : "ironman@avengers.org",
 //    	"number" : "(A1) 111-1111"
	// };

	// superhero2 = {
	// 	"name" : "Hulk",
	//     "email" : "hulk@avengers.org",
	//     "number" : "(A2) 222-2222"
	// };
	
	// superhero3 = {
	// 	"name" : "Thor",
	//     "email" : "thor@avengers.org",
	//     "number" : "(A3) 333-3333"
	// };
	
	// var superheros = [superhero1, superhero2, superhero3]
	// res.json(superheros)
})

// app.get('/', function (req, res) {
// 	res.send("hello world from node-server.js")
// })

app.post('/superherocontacts', function (req,res) {
	console.log(req.body); // to parse the body we need body parser 
	
	//lets insert the new item when non of the fields is empty
	if(req.body.name && req.body.email && req.body.number)
	{
		db.superheros.insert(req.body, function (err, newsuperhero){
			res.json(newsuperhero); // inserts the new data ana send the data to controller
		});
	}
});

app.delete('/superherocontacts/:id', function (req, res) {
	var id = req.params.id; //get value od id from url
	console.log(id);
	db.superheros.remove({_id : mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc); //send back items
	})
});

app.get('/superherocontacts/:id', function (req,res) {
	var id = req.params.id;
	console.log(id);

	///this will select data using id and update all the fileds in mongo and send a response json to controller
	db.superheros.findOne({_id : mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
})

app.put('/superherocontacts/:id', function (req,res) { 
	var id = req.params.id;
	console.log(req.body.name);

	///this will select data using id and update all the fileds in mongo and send a response json to controller
	db.superheros.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update : {$set : {name: req.body.name, email: req.body.email, number: req.body.number}},
		new : true}, function (err, updatedoc) {
			res.json(updatedoc); //sends updated response json to controller
		});
})

app.listen(appPort);
console.log("server running on port "+appPort);