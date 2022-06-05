var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.use(express.static('public'));

io.on('connection',socket => {
   socket.on('clientevent', data => {
    io.sockets.emit('chat',data);
   })
   socket.on('newuser', data => {
       socket.broadcast.emit('user',data);
   })
  
})

http.listen(3000,()=>{
    console.log("The application is running at 3000...");
})