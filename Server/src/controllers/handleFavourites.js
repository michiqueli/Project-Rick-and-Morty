let favsDB = require('../utils/favs');

const postFav = (req, res) => {
    favsDB.push(req.body)
    res.status(200).json(favsDB)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    favsDB.filter(fav => fav.id == id)
    res.status(200).json(favsDB)
}

module.exports = {
    postFav, deleteFav
}