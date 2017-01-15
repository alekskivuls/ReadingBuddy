
var app = require('express')();
var http = require('http').Server(app);
var path = require('path');

const PORT = 8080;


app.get('/', function(req, res){

	var express = require('express');

	app.use(express.static(path.join(__dirname)));
	res.sendFile(path.join(__dirname, 'view/index.html'));
});


// Listen application request on port 8080
http.listen(PORT, function(){
	console.log('listening on *:' + PORT);
})