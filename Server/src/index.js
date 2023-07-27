const data = require("./utils/data")
var http = require("http");
const PORT = 3001;

const server = http.createServer((req, res) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.url.includes("/rickandmorty/character")){
        const id = url.split("/").slice(3)
    }

}).listen(PORT, "localhost");