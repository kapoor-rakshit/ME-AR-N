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
var admincollectionschema = new mongoose.Schema({
	email :String,
	password: String
});

var usercollectionschema = new mongoose.Schema({
	email :String,
	password: String,
	firstname: String,
	lastname: String,
	location: String,
	mobile: Number
});

var admincollection = mongoose.model("admincoll", admincollectionschema, "admins");

var usercollection = mongoose.model("usercoll", usercollectionschema, "users");

router.post('/admin', function(request, response) {

	var mail = request.body.adminmail;
	var pass = request.body.adminpass;

	var query = admincollection.findOne({email: mail});
	query.exec()
	.then((data) => {
		if(data == null){
			console.log("NOT found");
			response.json({"valid":"false"});
		}
		else{
			console.log("found");
			if(data.password == pass){
				console.log("VALID PASSWORD");
				response.json({"valid":"true"});
			}
			else{
				console.log("INVALID PASSWORD");
				response.json({"valid":"false"});	
			}
		}
	})
	.catch((err) => {
		console.log(err);
	})

});

router.post("/user", function(request, response){

	var mail = request.body.usermail;
	var pass = request.body.userpass;

	var query = usercollection.findOne({email: mail});
	query.exec()
	.then((data) => {
		if(data == null){
			console.log("NOT found");
			response.json({"valid":"false"});
		}
		else{
			console.log("found");
			if(data.password == pass){
				console.log("VALID PASSWORD");
				response.json({"valid":"true", "_id": data._id});
			}
			else{
				console.log("INVALID PASSWORD");
				response.json({"valid":"false"});	
			}
		}
	})
	.catch((err) => {
		console.log(err);
	})

});


router.post("/newuser", function(request, response){
	var mail = request.body.mail;
	var pass = request.body.pass;
	var firstname = request.body.firstname;
	var lastname = request.body.lastname;
	var location = request.body.location;
	var mobile = request.body.mobile;

	var query = usercollection.findOne({email: mail});
	query.exec()
	.then((data) => {
		if(data == null){
			console.log("NOT found");

			var newdocument = new usercollection({
				email: mail,
				password: pass,
				firstname: firstname,
				lastname: lastname,
				location: location,
				mobile: mobile
			});

			newdocument.save(function(err, data){
				if(err) console.log(err);
				else {
					console.log("DATA ADDED");
					response.json({"_id": data._id});
				}
			});
		}
		else{
			console.log("USER already exists");
			response.json({"valid":"false"});
		}
	})
	.catch((err) => {
		console.log(err);
	})
});

module.exports = router;
