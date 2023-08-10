const axios = require  ('axios')

const getCharacterById = (res, id) => {
     axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin.name,
            image: data.image,
            status: data.status
        }
        res.writeHead (200, {"Content-Type": "application/json"});
        res.end(JSON.stringify(character));
    })
    .catch((error) => {
        res.writeHead (500, {"Content-Type": "text/plain"});
        res.end(error.message);
    })
}*/

const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id } = Number(req.params)
    axios(`${URL}${id}`)
    if(data){
    ({ data }) => {
            const character = {
                id: data.id,
                name: data.name,
                gender: data.gender,
                species: data.species,
                origin: data.origin,
                image: data.image,
                status: data.status
            }
        }
        res.json(character)
    }else if (data && !error){
        res.send(404, "Not found")
    }else{
        res.send(500, error.message)
    }
    
}
module.exports = getCharacterById;