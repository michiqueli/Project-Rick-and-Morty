let db = require('../utils/favs');

const postFav = (req, res) => {
    db.push(req.body)
    res.status(200).json(db)
}

const deleteFav = (req, res) => {
    const {id} = req.params
    db.filter(fav => fav.id == id)
    res.status(200).json(db)
}

module.exports = {
    postFav, deleteFav
}