const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
  try {
    const newBid = await Bid.create({
      ...req.body,
      bidder_id: req.session.bidder_id,
    });
    res.status(200).json(newBid);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
