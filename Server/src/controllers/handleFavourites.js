const db = require ("../utils/favs")

const postFav = (req, res) => {
    myFavourites.push(req.body)
    res.status(200).json(myFavourites)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    myFavourites.filter(fav => fav.id == id)
    res.status(200).json(myFavourites)
}

module.exports = {
    postFav, deleteFav
}