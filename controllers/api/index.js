const router = require("express").Router();
const bidderRoutes = require("./bidderRoutes");
//const bidRoutes = require("./bidRoutes");

router.use("/bidders", bidderRoutes);
//router.use("/bid", bidRoutes);

module.exports = router;
