const sequelize = require('../config/connection');
const { Car, Bidder, Bid } = require('../models');

const carData = require('./carData.json');
const bidderData = require('./bidderData.json');
const bidData = require('./bidData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const bidders = await Bidder.bulkCreate(bidderData, {
    individualHooks: true,
    returning: true,
  });

  const cars = [];

  for (const car of carData) {
    cars.push(
      await Car.create({
        ...car,
        seller_id: bidders[Math.floor(Math.random() * bidders.length)].id,
      })
    );
  }

  // for (const comment of commentData) {
  //   await Comment.create({
  //     ...comment,
  //     user_id: users[Math.floor(Math.random() * users.length)].id,
  //     post_id: posts[Math.floor(Math.random() * posts.length)].id,
  //   });
  // }

  for (const bid of bidData) {
    await Bid.create({
      ...bid,
    });
  }

  process.exit(0);
};

seedDatabase();
