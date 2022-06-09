const router = require('express').Router();
const res = require('express/lib/response');
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      bidder_id: req.session.user_id,
    });
    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/bidder_id', async (req, res) => {
  try {
    const bidderHistory = await Bid.findAll({
      where: {
        bidder_id: req.session.user_id,
      },
    });
    res.status(200).json(bidderHistory);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/car_id', async (req, res) => {
    try {
      const bidderHistory = await Bid.findAll({
        // where: {
        //   car_id:,
        // },
      });
      res.status(200).json(bidderHistory);
    } catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
