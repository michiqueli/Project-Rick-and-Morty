/*var http = require("http");
const getCharacterById = require ('./controllers/getCharacterById')
const getId = require ('./controllers/getCharacterId')
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});

const server = http.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  getCharacterById(res, getId(req))
  }).listen(PORT, "localhost");
  
module.exports = server;*/

const express = require('express');
const server = express();
const PORT = 3001;

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
