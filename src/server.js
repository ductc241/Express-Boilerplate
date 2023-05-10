const path = require("path");
require("dotenv").config({
  path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

// import loaders
const expressLoader = require("./loaders/express.loader");
const mongooseLoader = require("./loaders/mongoose.loader");
const passportLoader = require("./loaders/passport.loader");

// init function (async)
async function initApp() {
  await mongooseLoader();

  // define app to use middleware --- app.use()
  const app = expressLoader();

  passportLoader(app);
}

// run init function
initApp().catch((error) => console.error("Application is crashed: " + error));
