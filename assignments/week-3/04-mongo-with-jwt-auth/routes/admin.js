const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if admin already exists
  if (await Admin.findOne({ username: username })) {
    return res.status(400).send("Admin already exists");
  }

  // Create an entry in DB
  await Admin.create({
    username: username,
    password: password,
  });

  // snd response
  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  //   Check if user exits or not
  if (!(await Admin.findOne({ username: username }))) {
    return res.status(403).send("Please sign up first");
  }

  const payload = {
    username: username,
    password: password,
  };
  //sign in and generate a jwt
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  res.status(200).json({
    token: token,
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  //   Get all other things from req body
  const { title, description, price, imageLink } = req.body;

  //   Create course
  const course = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  // add the course to the course list of admin
  await Admin.updateOne(
    { username: req.username },
    {
      $push: {
        courses: course._id,
      },
    }
  );

  // Send res
  res.status(200).json({
    courseId: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  //   Get all the courses created by a admin
  const courses = await Admin.findOne({ username: req.username }).populate(
    "courses"
  );
  res.json({ courses: courses });
});

module.exports = router;
