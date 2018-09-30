
var express = require("express");

var router = express.Router();

var fs = require("fs");


router.get("/", function(request, response){

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){           // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                            // JSON object

			response.render("issuehome", {issue : obj.issues , len : obj.issues.length});
		}
	});
});


router.get("/addissue/", function(request, response){
	response.render("issueadd");
});


router.get("/editissue/:index", function(request, response){
	response.render("issueedit", {                                                         // get param val from url
		formactionval : "http://127.0.0.1:5000/issues/issueedited/" + request.params.index
	});
});



router.get("/deleteissue/:index", function(request, response){

	var index = request.params.index;

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){              // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                                // JSON object

			obj.issues.splice(index, 1);                           // Delete 1 data starting from index

			var jsondata = JSON.stringify(obj);                     // JSON string

			fs.writeFile("issues.json", jsondata, function(error){  // write to file
				if(error) console.log(error.message);
				else console.log("DELETED ISSUE");
			});
			}
	});

	response.redirect("/issues/");
});




router.post("/issueadded/", function(request, response){

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){              // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                                // JSON object

			obj.issues.push(                                       // Append data
				{
				desc: request.body.desc,
				seve: request.body.severity,
				stat: request.body.status,
				datecr: request.body.datecr,
				daters: request.body.daters
				});

			var jsondata = JSON.stringify(obj);                     // JSON string

			fs.writeFile("issues.json", jsondata, function(error){  // write to file
				if(error) console.log(error.message);
				else console.log("CREATED ISSUE");
			});
			}
	});

	response.redirect("/issues/");
});



router.post("/issueedited/:index", function(request, response){

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){              // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                                // JSON object

			var index = request.params.index;                      // get param val from url


			obj.issues[index].desc = request.body.desc;            // modify data
			obj.issues[index].seve = request.body.severity;
			obj.issues[index].stat = request.body.status;
			obj.issues[index].datecr = request.body.datecr;
			obj.issues[index].daters = request.body.daters;


			var jsondata = JSON.stringify(obj);                     // JSON string

			fs.writeFile("issues.json", jsondata, function(error){  // write to file
				if(error) console.log(error.message);
				else console.log("EDITED ISSUE");
			});
			}
	});

	response.redirect("/issues/");
});


module.exports = router;