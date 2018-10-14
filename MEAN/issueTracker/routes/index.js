var express = require('express');
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
var collectionschema = new mongoose.Schema({
	_id: Number,
	desc: String,
	severity: String,
	status: String,
	datecr: String,
	daters: String
});

var collection = mongoose.model("coll", collectionschema, "issues");

var cnt;
collection.count({}, function(err, res){
	if(err) console.log(err);
	else cnt = res + 1;
});


router.post("/issues/", function(request, response){

	var newdocument = new collection({
		_id: cnt,
		desc: request.body.desc,
		severity: request.body.severity,
		status: request.body.status,
		datecr: request.body.datecr,
		daters: request.body.daters
	});

	newdocument.save(function(err, data){
		if(err) console.log(err);
		else console.log("DATA ADDED");
	});

	cnt+=1;
	response.json({});

});

router.get("/issues/", function(request, response){
	collection.find({}, function(err, data){
		if(err) console.log(err);
		else{
			response.json(data);
		}
	});
});

router.get("/issues/:id/", function(request, response){
	collection.findOne({_id: request.params.id}, function(err, data){   // NOTE: use findOne and NOT find to get resp as {} and not [{}]
		if(err) console.log(err);
		else{
			response.json(data);
		}
	});
});

router.put("/issues/:id/", function(request, response){
	collection.update({_id: request.params.id},
		{
			$set: {desc: request.body.desc, severity: request.body.severity, status: request.body.status, datecr: request.body.datecr, daters: request.body.daters}
		},
		function(err){
			if(err) console.log(err);
			else console.log("DATA UPDATED for id", request.params.id);
	}
	)

	response.json({});
});

router.delete("/issues/:id/", function(request, response){
	var query = collection.remove({_id: request.params.id});
	query.exec()
		.then((data) => {
			console.log("DELETED id", request.params.id);
		})
		.catch((err) => {
			console.log(err);
		})

		response.json({});
});


module.exports = router;
