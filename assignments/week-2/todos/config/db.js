const mongoose = require("mongoose");

// Get env file
require("dotenv").config();

const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("DB connected Successfully"))
    .catch(() => {
      console.error("Error connecting to DB");
      process.exit(1);
    });
};

module.exports = dbConnect;
