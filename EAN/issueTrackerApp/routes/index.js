var express = require('express');
var router = express.Router();

var fs = require("fs");

router.get('/issues/', function(request, response) {

  var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){           // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                            // JSON object

			response.json(obj.issues);
		}
	});

  console.log("RESULTS fetched");

});


router.get("/issues/:id/", function(request, response){

	var id = request.params.id;

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){           // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                            // JSON object

			var l = obj.issues.length;

			for(var i = 0;i<l; i++){
				if(obj.issues[i].id == id){
					response.json(obj.issues[i]);
					break;
				}
			}
		}
	});

  console.log("RESULTS fetched for id : " + id);

});


router.delete("/issues/:id/", function(request, response){

	var id = request.params.id;

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){           // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                            // JSON object

			var l = obj.issues.length;

			for(var i = 0;i<l; i++){
				if(obj.issues[i].id == id){
					obj.issues.splice(i,1);
					break;
				}
			}

			var jsondata = JSON.stringify(obj);                     // JSON string

			fs.writeFile("issues.json", jsondata, function(error){  // write to file
				if(error) console.log(error.message);
				else console.log("DELETED ISSUE : " + id);
			});

		}
	});

  response.json({});

});


router.put("/issues/:id/", function(request, response){

	var id = request.params.id;

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){           // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                            // JSON object

			var l = obj.issues.length;

			for(var i = 0;i<l; i++){
				if(obj.issues[i].id == id){
					
			obj.issues[i].desc = request.body.desc;            // modify data
			obj.issues[i].severity = request.body.severity;
			obj.issues[i].status = request.body.status;
			obj.issues[i].datecr = request.body.datecr;
			obj.issues[i].daters = request.body.daters;

					break;
				}
			}

			var jsondata = JSON.stringify(obj);                     // JSON string

			fs.writeFile("issues.json", jsondata, function(error){  // write to file
				if(error) console.log(error.message);
				else console.log("EDITED ISSUE : " + id);
			});

		}
	});

  response.json({});

});


router.post("/issues/", function(request, response){

	var obj={
		iss:[]
	};

	fs.readFile("issues.json", function(error, data){              // read file
		if(error) console.log(error.message);
		else{
			obj = JSON.parse(data);                                // JSON object

			var l = obj.issues.length;

			var idval;                                            // get id of last issue and increment for new id
			if(l==0) idval = 1;
			else idval = obj.issues[l-1].id + 1;

			obj.issues.push(                                       // Append data
				{
				id : idval,
				desc: request.body.desc,
				severity: request.body.severity,
				status: request.body.status,
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

	response.json({});

});


module.exports = router;
