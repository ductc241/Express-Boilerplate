const express = require("express");
const passport = require("passport");

const router = express.Router();

// routes
const authv1Routes = require("../routes/v1/auth.route");
const homeRoutes = require("../routes/v1/home.route");

const authv2Routes = require("../routes/v2/auth.route");
const userv2Routes = require("../routes/v2/user.route");

const authv3Routes = require("../routes/v3/auth.route");
const userv3Routes = require("../routes/v3/user.route");

// routes config
// router.use("/v2/auth", authv2Routes);
// router.use("/v2/user", passport.authenticate("session"), userv2Routes);

router.use("/v3/auth", authv3Routes);
router.use("/v3/user", userv3Routes);

module.exports = router;
