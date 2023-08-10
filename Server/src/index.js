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
const mainRouter = require("./routes/routes")
const server = express();
const PORT = 3001;


server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(express.json())

server.use ((req, res, next) => {
   req.url = '/rickandmorty' + req.url;
   next();
 });

server.use(mainRouter)

server.listen(PORT, () => {
   console.log('Server raised in port: ' + PORT);
});
