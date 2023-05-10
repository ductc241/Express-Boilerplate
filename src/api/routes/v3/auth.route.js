const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", (req, res) => {
  const jwtPayload = {
    username: "Ta Cong Duc",
    address: "VN",
  };

  const token = jwt.sign(jwtPayload, process.env.JWT_SECRET_KEY);

  res.send(token);
});

module.exports = router;
