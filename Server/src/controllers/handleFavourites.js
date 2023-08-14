const db = require ("../utils/favs")

const save = (newFav) => {
    db.push(newFav)
    return db
}

const deleteFav = (id) => {
   db = db.filter(fav => fav.id !== parseInt(id))
   return db;
}

module.exports = {
    save, deleteFav
}