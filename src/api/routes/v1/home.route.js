const express = require("express");
const router = express.Router();

const verify = require("../../../middlewares/verify");

router.get("/", (req, res) => {
  res.render("pages/home");
});

router.get("/user-detail", verify.userAuth, (req, res) => {
  res.send(req.session);
});

module.exports = router;
