const router = require("express").Router();
const bidderRoutes = require("./bidderRoutes");
const carRoutes = require("./carRoutes");
//const bidRoutes = require("./bidRoutes");

router.use("/bidders", bidderRoutes);
router.use("/cars")
//router.use("/bid", bidRoutes);

module.exports = router;
