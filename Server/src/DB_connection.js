require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const favoriteModel = require ('./models/Favorite');
const userModel = require ('./models/User');

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

sequelize.authenticate()
.then(()=> {console.log("Todo Salio Bien, Server funcionando")})
.catch((error) => {console.log("fallo: ", error.message)});


// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

//
favoriteModel(sequelize);
userModel(sequelize);
//

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite } = sequelize.models;

User.belongsToMany(Favorite, {through: 'user_favorites'});
Favorite.belongsToMany(User, {through: 'user_favorites'});

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};
