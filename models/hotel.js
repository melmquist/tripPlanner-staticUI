var Sequelize = require('sequelize');
var db = require('./index.js');

var Hotel = db.define('hotel',{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars:{
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      one_to_five: function(num) {
        if (num < 1 || num > 5) {
          throw new Error("Please do better!");
        }
      }
    }
  },
  amenites:{
    type: Sequelize.STRING,
    // allowNull: false//must be string of comma separated objects
  }
});


module.exports = Hotel;
