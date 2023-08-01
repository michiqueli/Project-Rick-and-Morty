var http = require("http");
const getCharacterById = require ('./controllers/getCharacterById')
const getId = require ('./controllers/getCharacterId')
const PORT = 3001;


const server = http.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  getCharacterById(res, getId(req))
  }).listen(PORT, "localhost");
  
module.exports = server;