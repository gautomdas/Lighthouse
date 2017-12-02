var express = require('express');
var socket = require('socket.io');

//setup
var app = express();
var server = app.listen(8080, function(){
  console.log("Server Running on 8080");
});


//static
app.use(express.static('public'));


//sockets
var io = socket(server);

io.on('connection', function(socket){
  console.log("Connection " + socket.id);
});
