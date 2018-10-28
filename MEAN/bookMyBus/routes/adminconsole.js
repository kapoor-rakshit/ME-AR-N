var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/menagerie", {useMongoClient: true});

var db = mongoose.connection;

db.on("error", function(err){
	console.log("Connection Error", err);
});

db.once("open", function(){
	console.log("Connected to DB");
});


var schema = mongoose.Schema;
var busesschema = new mongoose.Schema({
	routeno: String,
	desc: String,
	fromcity: String,
	tocity: String,
	capacity: Number
});

var citiesschema = new mongoose.Schema({
	name: String,
	desc: String
});

var busescollection = mongoose.model("buscoll", busesschema, "buses");

var citiescollection = mongoose.model("citycoll", citiesschema, "cities");


router.get("/buses", function(request, response){
	var query = busescollection.find({});
	query.exec()
		.then((data) => {
			response.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/buses/:id", function(request, response){
	var query = busescollection.findOne({_id: request.params.id});
	query.exec()
		.then((data) => {
			response.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/buses", function(request, response){
	var newdocument = new busescollection({
		routeno: request.body.routeno,
		desc: request.body.desc,
		fromcity: request.body.fromcity,
		tocity: request.body.tocity,
		capacity: request.body.capacity
	});

	newdocument.save(function(err, data){
		if(err) console.log(err);
		else console.log("DATA ADDED");
	});

	response.json({});

});

router.put("/buses/:id", function(request, response){

	var query = busescollection.update({_id: request.params.id},
			{
				$set: {routeno: request.body.routeno, desc: request.body.desc, fromcity: request.body.fromcity, tocity: request.body.tocity, capacity: request.body.capacity}
			});
	query.exec()
		.then((data) => {
			console.log("DATA UPDATED");
		})
		.catch((err) => {
			console.log(err);
		});

	response.json({});
});

router.delete("/buses/:id", function(request, response){

	var query = busescollection.remove({_id: request.params.id});
	query.exec()
		.then((data) => {
			console.log("DATA DELETED");
		})
		.catch((err) => {
			console.log(err);
		});

	response.json({});
});


module.exports = router;
