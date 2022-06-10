const router = require('express').Router();
const { Bid } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log(req.session.user_id);
  try {
    const newBid = await Bid.create({
      ...req.body,
      //use logged in user_id
      bidder_id: req.session.user_id,
    });
    res.status(200).json(newBid);
  } catch (err) {
    console.error(err)
    res.status(400).json(err);
  }
});

module.exports = router;
