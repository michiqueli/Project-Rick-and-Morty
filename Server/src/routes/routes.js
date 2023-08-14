const getCharById = require ("../controllers/getCharById")
const {postFav , deleteFav} = require ("../controllers/handleFavourites")
const login = require ("../controllers/login")

const express = require ("express");
const mainRouter = express.Router();

mainRouter.get("/character/:id", getCharById)

mainRouter.get("/login", login)

mainRouter.post("/Favourites", postFav)

mainRouter.delete("/Favourites/:id", deleteFav)

module.exports = mainRouter