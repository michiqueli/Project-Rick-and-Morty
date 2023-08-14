// const axios = require  ('axios')

// /*const getCharacterById = (res, id) => {
//      axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({ data }) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin.name,
//             image: data.image,
//             status: data.status
//         }
//         res.writeHead (200, {"Content-Type": "application/json"});
//         res.end(JSON.stringify(character));
//     })
//     .catch((error) => {
//         res.writeHead (500, {"Content-Type": "text/plain"});
//         res.end(error.message);
//     })
// }*/

// const URL = "https://rickandmortyapi.com/api/character/";

// const getCharById = (req, res) => {
//     const  {id}  = req.params
    
//     try{
//         const response = axios(`${URL}${id}`)
//         const { id, name, gender, species, origin, image, status } =
//         response.data;
//         const character = {
//         id,
//         name,
//         gender,
//         species,
//         origin: origin.name,
//         image,
//         status,
//       };

//         if(!character) res.status(404).json( {message: "Not found"})

//         res.status(200).json(character)
//     }catch{
//         res.status(500).json({message: error.message})
//     }
// }
// module.exports = getCharById;
const axios = require("axios");
//const URL = "https://rickandmortyapi.com/api/character/";
const getCharById = (req, res) => {
  const id = req.params.id;
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = {
        id,
        name,
        gender,
        species,
        origin: origin.name,
        image,
        status,
      };
      res.status(200).json(character);
    })
    .catch((err) => {
      if (err.response && err.response.status === 404) {
        res.status(404).json({ message: "Not found" });
      } else {
        res.status(500).send(err.message);
      }
    });
};

module.exports = getCharById;