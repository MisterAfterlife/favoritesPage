var express = require('express');

var app = express();

var port = 3000;

app.use(express.static('public'));
app.use(express.static('src/views'));

/* app.get("/", function(req, res){
	res.send("Hello");
}); */

/* app.get("/games", function(req, res){
	res.send("Would you like to play a game");
}); */


//Listen on port
app.listen(port, function(err){
	console.log("Server is running on port " + port);
});
