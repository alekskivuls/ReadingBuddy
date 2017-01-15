
var app = require('express')();
var http = require('http').Server(app);
// var BinaryServer = require('binaryjs').BinaryServer;
var io = require('socket.io')
var ss = require('socket.io-stream');
var path = require('path');
var fs = require('fs');
// var wav = require('wav');

const PORT = 8080;
const PORT_BINARY_SERVER = 8000;


app.get('/', function(req, res){

	var express = require('express');

	app.use(express.static(path.join(__dirname)));
	res.sendFile(path.join(__dirname, 'view/index.html'));
});


// Listen application request on port 8080
http.listen(PORT, function(){
	console.log('listening on *:' + PORT);
})



var socket = io.listen(PORT_BINARY_SERVER);

socket.of('/user').on('connection', function(socket){
	ss(socket).on
})


/* Binary Server */
// var binaryServer = BinaryServer({port: PORT_BINARY_SERVER}) ;

// binaryServer.on('connection', function(_client){
// 	console.log('new connection');

// 	_client.on('stream', function(stream, meta){
// 		console.log('new stream');
// 		stream.on('end', function(){
// 			console.log("wrote to file");
// 		});
// 	});
// })