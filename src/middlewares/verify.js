const userAuth = (req, res, next) => {
  try {
    // const { user } = req.session;
    // if (!user) return res.redirect("/v1/home");

    if (!req.session.passport) return res.status(401).send("Unauthorized");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ msg: "Can't access" });
  }
};

module.exports = { userAuth };
