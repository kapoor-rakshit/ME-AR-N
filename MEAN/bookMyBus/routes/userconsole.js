
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


var userschema = new mongoose.Schema({
	email :String,
	password: String,
	firstname: String,
	lastname: String,
	location: String,
	mobile: Number
});

var bookinghistoryschema = new mongoose.Schema({
	userid: String,
	routeno: String,
	desc: String,
	fromcity: String,
	tocity: String,
	seats: Number,
	date: String
});

var usercollection = mongoose.model("user", userschema, "users");

var historycollection = mongoose.model("histcoll", bookinghistoryschema, "bookinghistory");

router.get("/allbookings", function(request, response){
	var query = historycollection.aggregate([
			{$sort: {userid: 1}}
		]);
	query.exec()
		.then((data)=>{
			response.json(data);
		})
		.catch((err)=>{
			console.log(err);
		})
});

router.get("/details/:id", function(request, response){
	var query = usercollection.findOne({_id: request.params.id});
	query.exec()
		.then((data) =>{
			response.json(data);
		})
		.catch((err) => {
			console.log(err);
		})
});

router.get("/history/:id", function(request, response){
	var query = historycollection.find({userid: request.params.id});
	query.exec()
		.then((data) => {
			response.json(data);
		})
		.catch((err) => {
			console.log(err);
		})
});

router.post("/buses/:userid/:busid", function(request, response){
	var newdocument = new historycollection({
		userid: request.params.userid,
		routeno: request.body.routeno,
		desc: request.body.desc,
		fromcity: request.body.fromcity,
		tocity: request.body.tocity,
		seats: request.body.seats,
		date: request.body.date
	});

	newdocument.save(function(err, data){
		if(err){
			console.log(err);
		}
		else{
			console.log("TICKET BOOKED");
		}
	});

	response.json({});
});


router.get("/buses/:userid/:busid/:date/:routeno", function(request, response){
	var query = historycollection.find({date: request.params.date, routeno: request.params.routeno});
	query.exec()
		.then((data) =>{
			response.json(data);
		})
		.catch((err) => {
			console.log(err);
		});
});


router.get("/checkcity/:name", function(request, response){
	var query = historycollection.count({$or: [{tocity: request.params.name}, {fromcity: request.params.name}]});
	query.exec()
		.then((data) =>{
			response.json({"counter": data});
			console.log(data);
		})
		.catch((err) =>{
			console.log(err);
		})
});

router.get("/checkbus/:routeno", function(request, response){
	var query = historycollection.count({routeno: request.params.routeno});
	query.exec()
		.then((data) =>{
			response.json({"counter": data});
			console.log(data);
		})
		.catch((err) =>{
			console.log(err);
		})
});

module.exports = router;

