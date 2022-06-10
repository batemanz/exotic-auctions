const router = require('express').Router();
const { Bidder, Car, Bid, Image } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  //temp test
  try {
    const carData = await Car.findAll({
      include: [
        {
          model: Bid,
          attributes: ['id', 'bidder_id'],
        },
        {
          model: Image,
          attributes: ['url'],
        },
      ],
    });

    const cars = carData.map((car) => {
      const images = car.images || [];
      return {
        ...car.get({ plain: true }),
        img_url: (images[0] || {}).url,
      };
    });
    console.log(cars);

    res.render('auctionPage', {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/cars/:id', async (req, res) => {
  try {
    const carData = await Car.findByPk(req.params.id, {
      include: [
        {
          model: Image,
          attributes: ['url'],
        },
      ],
    });

    const car = carData.get({ plain: true });

    res.render('bidPage', {
      ...car,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profile', withAuth, async (req, res) => {
  //temp test
  try {
    const bidderData = await Bidder.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const bidder = bidderData.get({ plain: true });

    res.render('profile', {
      ...bidder,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
