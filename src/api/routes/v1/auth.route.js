const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  req.session.user = {
    id: "12354679",
    username: "Ta Cong Duc",
  };

  res.send("login successfully");
});

router.get("/logout", (req, res) => {
  res.clearCookie("user");
  res.send("logout successfully");
});

module.exports = router;
