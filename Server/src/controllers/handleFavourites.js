var myFavourites = [];

const postFav = (req, res) => {
    myFavourites.push(req.body)
    res(200, json(myFavourites))
}

const deleteFav = (req, res) => {
    const {id} = req.params
    myFavourites.filter(fav => fav.id == id)
    res(200, json(myFavourites))
}