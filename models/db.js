var db = require('./index.js');

var Place = require('./place')
var Activity = require('./activity')
var Restaurant = require('./restaurant')
var Hotel = require('./hotel')

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);

module.exports = {
  db : db,
  Place : Place,
  Activity : Activity,
  Restaurant : Restaurant,
  Hotel : Hotel
}
