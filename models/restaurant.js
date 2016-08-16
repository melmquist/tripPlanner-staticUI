var Sequelize = require('sequelize');
var db = require('./index.js');

var Restaurant = db.define('restaurant',{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  cuisine:{
    type: Sequelize.STRING,
    allowNull: false//must be string of comma separated objects
  },
  price:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate:{
      one_to_five:function(num){
        if (num < 1 || num > 5){
          throw new Error("Please do better!");//number signifies dollar signs
        }
      }
    }
  }
});

module.exports = Restaurant;
