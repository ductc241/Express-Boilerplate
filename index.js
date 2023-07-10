// Test env file, you can romove. Check "Npm start"

const path = require("path");

require("dotenv").config({
  path: path.resolve(__dirname, `.env.${process.env.NODE_ENV}`),
});

if (process.env.NODE_ENV === "development") {
  console.log(process.env.NODE_ENV);
  console.log(`Running on port ${process.env.APP_PORT} and development mode`);
}

if (process.env.NODE_ENV === "production") {
  console.log(process.env.NODE_ENV);
  console.log(`Running on port ${process.env.APP_PORT} and production mode`);
}
