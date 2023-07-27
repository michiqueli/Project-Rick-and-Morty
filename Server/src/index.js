const data = require("./utils/data")
var http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/").slice(3)[0]);
        character = data.find(char => char.id === id)
              res.writeHead (200, {"Content-Type": "application/json"});
              res.end(JSON.stringify(character));
            }
          }).listen(PORT, "localhost");
module.exports = server;