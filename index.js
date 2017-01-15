//Dictionary API 
var Client = require('node-rest-client').Client;
var client = new Client();

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

//Dictionary API
client.get("http://www.dictionaryapi.com/api/v1/references/collegiate/xml/test?key=81d2524c-3e55-429a-9d73-da9fdf9d0951", function(data, response) {
	console.log(data.toString('utf8'));
	//console.log(response);
});