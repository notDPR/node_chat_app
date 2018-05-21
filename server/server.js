const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const port = process.env.PORT || 3000 ;
var app = express();

const publicPath = path.join(__dirname,'../public');

// console.log(__dirname + '\..\public') ;
// console.log(publicPath);

var server = http.createServer(app);
var io = socketIO(server);
// http is itself used by express to create a server

app.use(express.static(publicPath));

// lets you register an event listener
io.on('connection' , (socket)=>{ // socket is similar to io(); in html file
  console.log('New User connected');

  socket.on('disconnect',()=>{
    console.log('User disconnected');
  });
});


// ----------------------------------------------- //

server.listen(port , ()=>{
  console.log('ChatApp is live on port',port);
});
