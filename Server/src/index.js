var http = require("http");
const getCharacterById = require ('./controllers/getCharacterBy Id')
const PORT = 3001;

const server = http.createServer((req, res) =>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.url.includes("/rickandmorty/character")){
    const id = Number(req.url.split("/").at(-1));
    let character = getCharacterById(id)
      res.writeHead (200, {"Content-Type": "application/json"});
      res.end(JSON.stringify(character));
    }
  }).listen(PORT, "localhost");
  
module.exports = server;