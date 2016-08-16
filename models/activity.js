var Sequelize = require('sequelize');
var db = require('./index.js');

var Activity = db.define('activity',{
  name:{
    type: Sequelize.STRING,
    allowNull: false
  },
  age_range:{
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Activity;
