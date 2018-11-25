
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");
var Razorpay = require("razorpay");

var transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: 'senders email',
    pass: 'senders password'
  }
});

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://kapoor-rakshit:kapoorrakshit1@ds255403.mlab.com:55403/menagerie", {useMongoClient: true});

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
	usermail: String,
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

router.post("/buses/:userid/:busid/:razorpayid/:amount", function(request, response){

	var userdata = {};
	var usermail = "";

	var instance = new Razorpay({
  		key_id: 'rzp_test_tYUZjJGgwdXpyK',
  		key_secret: 'DUfAofQYaqZ6cY9GO1V5nq5Y'
	});

	instance.payments.capture(request.params.razorpayid, request.params.amount)
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.log(err);
		});

	var query = usercollection.findOne({_id: request.params.userid});
	query.exec()
		.then((data) =>{
			this.userdata = data;
			this.usermail = this.userdata.email;

			var newdocument = new historycollection({
			userid: request.params.userid,
			usermail: this.usermail,
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

			// SENDING EMAILS
			var mailOptions = {
  				from: 'senders email',
  				to: this.usermail,
  				subject: 'Booking Itinerary',
  				//text: 'Ticket Booked for ' + request.body.date + " with " + request.body.seats + " seat(s)" 
  				html: '<h1>Travel details</h1>\
  				<table>\
  				<th>Route No</th>\
  				<th>Description</th>\
  				<th>From</th>\
  				<th>To</th>\
  				<th>Seats</th>\
  				<th>Date of travel</th>\
  				<tr>\
  				<td>request.body.routeno</td>\
  				<td>request.body.desc</td>\
  				<td>request.body.fromcity</td>\
  				<td>request.body.tocity</td>\
  				<td>request.body.seats</td>\
  				<td>request.body.date</td>\
  				</tr>\
  				</table>'
			};
			/*transporter.sendMail(mailOptions, function(error, info){
  				if (error) {
    				console.log(error);
  				} else {
    				console.log('Email sent: ' + info.response);
  				}
			});*/

		})
		.catch((err) => {
			console.log(err);
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

