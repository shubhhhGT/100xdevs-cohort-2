const express = require("express");

// Create an instance of express
const app = express();

// Use dotenv to load env
require("dotenv").config();

// Get Port from .env file
const PORT = process.env.PORT || 3001;

// middlewares to parse json req body
app.use(express.json());

// Import routes
const todoRoutes = require("./routes/todoRoutes");
app.use("/api/v1", todoRoutes);

// Connect to DB
const dbConnect = require("./config/db");
dbConnect();

// Listen to PORT
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

// Default Route
app.get("/", (req, res) => {
  res.send(`<h1>This is homepage</h1>`);
});
