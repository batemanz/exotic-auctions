const Car = require('./car');
const Bid = require('./bid');
const Bidder = require('./bidder');

Car.hasMany(Bids, {
  foreignKey: 'car_id',
  onDelete: 'CASCADE'
});

Bidder.hasMany(Bids, {
    foreignKey: 'bidder_id',
    onDelete: 'CASCADE'
});

Bid.belongsTo(Car, {
    foreignKey: 'car_id',
    onDelete: 'CASCADE'
});

Bid.belongsTo(Bidder, {
    foreignKey: 'bidder_id',
    onDelete: 'CASCADE'
});

module.exports = { Car, Bid, Bidder };
