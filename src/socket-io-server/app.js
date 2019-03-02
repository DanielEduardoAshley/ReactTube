const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const axios = require("axios");
const port = process.env.PORT || 3000;
const index = require("./index");
const cors = require('cors');

const app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  next();
});
app.use(cors());
app.use(index);
const server = http.createServer(app);
const io = socketIo(server);
io.on("connection", socket => {
  console.log("New client connected"), setInterval(
    // () => getApiAndEmit(socket),
    ()=>console.log('hello'),
    10000
  );
  socket.on("disconnect", () => console.log("Client disconnected"));
});
const getApiAndEmit =  socket => {
  try {
    const res = 'hello'
    
    socket.emit("FromAPI", res);
  } catch (error) {
    console.error(`Error: ${error.code}`);
  }
};
server.listen(port, {log:false, origins:'*:*'});