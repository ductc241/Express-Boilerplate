const passport = require("passport");

//strategies
const { localStrategy, jwtStrategy } = require("../middlewares/passport.mdw");

module.exports = (app) => {
  app.use(passport.initialize());

  // config session strategy
  // passport.use(localStrategy);
  // passport.serializeUser((user, cb) => {
  //   return cb(null, user);
  // });
  // passport.deserializeUser((user, cb) => {
  //   return cb(null, user);
  // });

  // config jwt strategy
  passport.use(jwtStrategy);
};
