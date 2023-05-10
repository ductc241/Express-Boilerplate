const express = require("express");
const verify = require("../../../middlewares/verify");

const router = express.Router();

router.get("/profile", verify.userAuth, (req, res) => {
  console.log(req.session.passport);
  res.send("user profile");
});

module.exports = router;
