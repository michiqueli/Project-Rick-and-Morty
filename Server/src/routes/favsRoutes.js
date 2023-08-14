const express = require ("express")
const router = express.Router()
const { save, deleteFav } = require ("../controllers/handleFavourites")

router.post("/", (req, res) => {
    let newFav = req.body
    res.status(200).json(save(newFav))
})

router.delete("/:id", (req, res) => {
    let id = req.params.id
    
    res.status(200).json(deleteFav(id))
})

module.exports = router