const express = require ("express")
const router = express.Router()
const { postFav, deleteFav } = require ("../controllers/handleFavourites")

router.post("/", (req, res) => {
    let newFav = req.body
    res.status(200).json(postFav(newFav))
})

router.delete("/:id", (req, res) => {
    let id = req.params.id
    
    res.status(200).json(deleteFav(id))
})

module.exports = router