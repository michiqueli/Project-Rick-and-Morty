var http = require("http");
const getCharacterById = require ('./controllers/getCharacterById')
const PORT = 3001;

const server = http.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url.includes("/rickandmorty/character")){
    const id = Number(req.url.split("/").at(-1));
    getCharacterById(res, id)
    }
  }).listen(PORT, "localhost");
  
module.exports = server;