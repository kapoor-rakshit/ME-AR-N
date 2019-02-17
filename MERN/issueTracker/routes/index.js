var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/menagerie", {useNewUrlParser: true});

var db = mongoose.connection;

db.on("error", function(err){
	console.log("Connection Error", err);
});

db.once("open", function(){
	console.log("Connected to DB");
});


var schema = mongoose.Schema;
var collectionschema = new mongoose.Schema({
	desc: String,
	seve: String,
	stat: String,
	datecr: String,
	daters: String
});

var collection = mongoose.model("coll", collectionschema, "issues");


router.post("/issues/", function(request, response){

	var newdocument = new collection({
		desc: request.body.desc,
		seve: request.body.seve,
		stat: request.body.stat,
		datecr: request.body.datecr,
		daters: request.body.daters
	});

	newdocument.save(function(err, data){
		if(err) {
			console.log(err);
		}
		else {
			console.log("ADDED");
		}
	});

	response.json({});

});

router.get("/issues/", function(request, response){

	var query = collection.find({});
	query.exec()
	.then((data) => {
		response.json(data);
	})
	.catch((err) => {
		console.log(err);
	});

});

router.get("/issues/:id/", function(request, response){

	var query = collection.findOne({_id: request.params.id});
	query.exec()
	.then((data) => {
		response.json(data);
	})
	.catch((err) => {
		console.log(err);
	});

});

router.put("/issues/:id/", function(request, response){

	var query = collection.update({_id: request.params.id},
		{
			$set: {desc: request.body.desc, seve: request.body.seve, stat: request.body.stat, datecr: request.body.datecr, daters: request.body.daters}
		});

	query.exec()
	.then((data) => {
		console.log("UPDATED : ", request.params.id);
	})
	.catch((err) => {
		console.log(err);
	});

	response.json({});

});

router.delete("/issues/:id/", function(request, response){

	var query = collection.remove({_id: request.params.id});

	query.exec()
	.then((data) => {
		console.log("DELETED : ", request.params.id);
	})
	.catch((err) => {
		console.log(err);
	});

	response.json({});

});


module.exports = router;

