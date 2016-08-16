var Sequelize = require('sequelize');
var db = require('./index');

var schema = {
  address: {
    type:Sequelize.STRING,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
    allowNull: false
  }
}

var options = {};

// console.log(db);

var Place = db.define('place', schema, options);

module.exports = Place;
