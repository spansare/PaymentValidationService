var cfenv = require("cfenv");
var Cloudant = require("cloudant");
var appEnv = cfenv.getAppEnv();

var cloudantUser = "";
var cloudantPass = "";

/*var cloudantCreds = appEnv.getService("myMicroservicesCloudant");
cloudantUser = cloudantCreds.credentials.username;
cloudantPass = cloudantCreds.credentials.password;

var cloudant = Cloudant({account:cloudantUser, password:cloudantPass});

// Initiate the database.
cloudant.db.create("items", function(err, body){
	if(!err){
		db = cloudant.db.use("items");
		populateDB();
	}
	else{
		console.log("Database already exists.");
		db = cloudant.db.use("items");
	}
});

// Populate the db with example products.
function populateDB() {
	var products = require("../products/products.json");
	for(p in products){
		db.insert(products[p], function(err, body, header){
			if(err){
				console.log("Error inserting product ID: " + body.id + " to the items database: " + err );
			}
			else{   
				console.log("Successfully added product ID: " + body.id + " to the database.");
			}
		});
	}   
}
*/

// API Routes
module.exports = function (app) {
// Create an item
app.post("/validatePayment", function(req, res) {
	var data = req.body;
	var sender = data.sender;
	var receiver = data.receiver;
	var ammount = data.amount;
	
	if(Object.keys(data).length === 0){
		return res.json({msg: "Body was empty."});
	}
	else {
		return res.json({msg: "Payment of $" + amount + " from " + sender + " to " + receiver + " validated successfully!!!"});
	}

	/*db.insert(data, function (err, body, headers) {
		if (err) {
			return res.json({msg: "Error on insert. " + err});
		}
		else {
			return res.json({msg: "Successfully created item"});
		}
	}); */
});

// Get an item by ID
app.get("/items/:id", function(req, res) {
	var id = req.params.id;
	/*db.get(id, function(err, body) {
		if (err){
			return res.json({msg: "Error: could not find item: " + id + ". " + err});
		}
		else{
			return res.json(body);
		}
	}); */
});

// Get all items
app.get("/items", function(req, res) {
	/*db.list({include_docs: true}, function (err, body, headers) {
		if (err) {
			return res.json({msg: "Error getting all items. " + err});
		}
		else{
			return res.json(body);
		}
	}); */
});

// Update an item by ID
app.put("/items/:id", function(req, res) {
	var id = req.params.id;
	var data = req.body;
	if(Object.keys(data).length === 0){
		return res.json({msg: "Body was empty."});
	}
	/*db.get(id, function (err, body) {
		if(err){
			return res.json({msg: "Error getting item: " + id + " for update. " + err});
		}
		else{
			data._rev = body._rev;
			db.insert(data, id, function(err, body, headers){
				if(err){
					return res.json({msg: "Error inserting for update. " + err});
				}
				else{
					return res.json({msg: "Successfully updated item: " + body.id});
				}
			});
		}
	}); */
});

// Delete an item by ID
app.delete("/items/:id", function(req, res){
	var id = req.params.id;
	/*db.get(id, function(err, body) {
		if (err){
			return res.json({msg: "Error retrieving revision for item id: " + id + ". " + err});
		}
		else{
			db.destroy(id, body._rev, function(err, body){
				if(err){
					return res.json({msg: "Error deleting item: " + id + ". " + err});
				}
				else{
					return res.json({msg: "Successfully deleted item: " + body.id});
				}
			});
		}
	});  */
});

};
