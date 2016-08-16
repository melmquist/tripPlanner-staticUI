var express = require('express');
var router = express.Router();
var models = require('../models/db.js');
// var indexModel = models....
module.exports = router;

var Activity = models.Activity;
var Hotel=models.Hotel;
var Restaurant=models.Restaurant;



// GET, Post PUt etc...

router.get('/', function(req, res, next){

  var outerScopeContainer = {};

  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    // res.send(outerScopeContainer)
    res.render('homePage', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);
  //res.send(outerScopeContainer);

})
