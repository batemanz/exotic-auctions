const Car = require('./car');
const Bid = require('./bid');
const Bidder = require('./bidder');
const Image = require('./image');

Car.hasMany(Bid, {
  foreignKey: 'car_id',
  onDelete: 'CASCADE',
});

Bidder.hasMany(Bid, {
  foreignKey: 'bidder_id',
  onDelete: 'CASCADE',
});

Bid.belongsTo(Car, {
  foreignKey: 'car_id',
  onDelete: 'CASCADE',
});

Bid.belongsTo(Bidder, {
  foreignKey: 'bidder_id',
  onDelete: 'CASCADE',
});

Car.hasMany(Image, {
  foreignKey: 'car_id',
  onDelete: 'CASCADE',
});

Image.belongsTo(Car, {
  foreignKey: 'car_id',
});

Bid.hasOne(Car, {
  foreignKey: 'current_bid',
});

module.exports = { Car, Bid, Bidder, Image };
