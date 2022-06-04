const router = require("express").Router();
const { Bidder, Car } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  //temp test
  try {
    const carData = await Car.findAll({
      // include: [
      //   {
      //     model: Bid,
      //     attributes: ["id", "seller_id"],
      //   },
      // ],
    });

    const cars = carData.map((car) => car.get({ plain: true }));

    res.render("auctionPage", {
      cars,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/bid/:id", withAuth, async (req, res) => {
  try {
    const carData = await Car.findByPk(req.params.id, {
      // include: [
      //   {
      //     model: Bid,
      //     attributes: ["bidder_id", "seller_id"],
      //   },
      // ],
    });

    const car = carData.get({ plain: true });

    res.render("bidPage", {
      ...car,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/profile", withAuth, async (req, res) => {
  //temp test
  try {
    const bidderData = await Bidder.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    const bidder = bidderData.get({ plain: true });

    res.render("profile", {
      ...bidder,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

module.exports = router;
