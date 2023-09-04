const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'),
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Male', 'Female', 'Genderless'),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      }   
   }, 
   { timestamps: false });
};
