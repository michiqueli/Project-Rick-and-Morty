const db = require ("../utils/favs")

<<<<<<< HEAD
const save = (newFav) => {
    db.push(newFav)
    return db
}

const deleteFav = (id) => {
   db = db.filter(fav => fav.id !== parseInt(id))
   return db;
=======
const postFav = (req, res) => {
    myFavourites.push(req.body)
    res.status(200).json(myFavourites)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    myFavourites.filter(fav => fav.id == id)
    res.status(200).json(myFavourites)
>>>>>>> 0afac1c3fa150778aa93409f4af402410ad22d12
}

module.exports = {
    save, deleteFav
}