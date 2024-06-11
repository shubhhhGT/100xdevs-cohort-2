// Middleware for handling auth
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
  // get username and password from req headers
  const { username, password } = req.headers;

  // Check if user exits in the DB
  const admin = await Admin.findOne({
    username: username,
    password: password,
  });

  // if admin exits then call the next else return 403
  if (admin) {
    next();
  } else {
    res.staus(403).json({ message: "Admin does not exist!" });
  }
}

module.exports = adminMiddleware;
