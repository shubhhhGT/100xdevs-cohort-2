const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exits
  if (await User.findOne({ username: username, password: password })) {
    return res.status(400).send("User alrreay exists");
  }

  // create an entry for the user
  await User.create({
    username: username,
    password: password,
  });

  res.status(200).json({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  // Check if user already exits
  if (!(await User.findOne({ username: username, password: password }))) {
    return res.status(400).send("Please sign up first");
  }

  const payload = {
    username: username,
    password: password,
  };
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  // return res
  res.status(200).json({ token: token });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});

  res.json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Get courseId from req params
  const { courseId } = req.params;

  const user = await User.findOne({ username: req.username });
  // Purchase the course
  await User.findOneAndUpdate(
    { username: req.username },
    {
      $push: {
        courses: user._id,
      },
    },
    { new: true }
  );

  await Course.findByIdAndUpdate(
    courseId,
    {
      $push: {
        studentsEnrolled: courseId,
      },
    },
    { new: true }
  );

  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Show the puchased courses by a user
  const courses = await User.findOne({ username: req.username })
    .populate("courses")
    .exec();

  res.status(200).json({ courses: courses });
});

module.exports = router;
