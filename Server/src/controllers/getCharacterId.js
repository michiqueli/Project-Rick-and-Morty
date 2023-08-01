const getCharacterId = (req) => {
    if (req.url.includes("/rickandmorty/character")){
        const id = Number(req.url.split("/").at(-1));
        return id;
    }   
}
module.exports = getCharacterId;