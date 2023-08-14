const getCharById = require ("../controllers/getCharById")
const {save , deleteFav} = require ("../controllers/handleFavourites")
const login = require ("../controllers/login")

const express = require ("express");
const mainRouter = express.Router();

mainRouter.get("/character/:id", getCharById)

mainRouter.get("/login", login)

mainRouter.post("/Favourites", save)

mainRouter.delete("/Favourites/:id", deleteFav)

module.exports = mainRouter