const { Admin } = require("../db");
require("dotenv").config();
const jwt = require("jsonwebtoken");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  try {
    // get token from req headers
    const token = req.header("Authorization").replace("Bearer ", "");

    // verify the token
    const decoded = await jwt.verify(token, process.env.JWT_SECRET);

    // If admin is present call the next middleware fun
    if (decoded.username) {
      req.username = decoded.username;
      next();
    } else {
      res.status(403).send("You are not authorized on this route!");
    }
  } catch (e) {
    return res.status(500).json({ msg: "Something went wrong" });
  }
}

module.exports = adminMiddleware;
