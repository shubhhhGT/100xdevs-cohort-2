const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // get username and password from req headers
  const { username, password } = req.headers;

  // Check if user exits in the DB
  const user = await User.findOne({
    username: username,
    password: password,
  });

  // if admin exits then call the next else return 403
  if (user) {
    next();
  } else {
    res.staus(403).json({ message: "User does not exist!" });
  }
}

module.exports = userMiddleware;
