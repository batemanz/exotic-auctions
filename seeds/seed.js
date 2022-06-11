const sequelize = require('../config/connection');
const { Car, Bidder, Bid, Image } = require('../models');

const carData = require('./carData.json');
const bidderData = require('./bidderData.json');
const bidData = require('./bidData.json');
const imageData = require('./imageData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });


  for (const bidder of bidderData) {
      await Bidder.create({
        ...bidder,
      });
  }

  const cars = [];

  for (const car of carData) {
    cars.push(
      await Car.create({
        ...car,

      })
    );
  }

  for (const image of imageData) {
    await Image.create({
      ...image,
    });
  }

  for (const bid of bidData) {
    await Bid.create({
      ...bid,
    });
  }

  process.exit(0);
};

seedDatabase();
