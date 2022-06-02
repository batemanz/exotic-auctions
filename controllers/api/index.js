const router = require("express").Router();
const userRoutes = require("./userRoutes");
//const bidRoutes = require("./bidRoutes");

router.use("/users", userRoutes);
//router.use("/bid", bidRoutes);

module.exports = router;
