const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Get username and password to sign up
  const { username, password } = req.body;

  // Check if the user already exists in the DB
  if (await User.findOne({ username: username })) {
    return res.status(401).json({ message: "User already exists" });
  }

  // Create a new entry in db
  await User.create({
    username: username,
    password: password,
  });

  // snd response
  res.status(200).json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});

  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const { username } = req.headers;

  // Upadte the user and push the purchsed course in user.courses
  const user = await User.updateOne(
    { username: username },
    {
      $push: {
        courses: courseId,
      },
    }
  );

  // Update the studentsenrolled in courses DB
  await Course.findByIdAndUpdate(courseId, {
    $push: {
      studentsEnrolled: user._id,
    },
  });

  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username } = req.headers;
  const user = await User.findOne({ username: username }).populate("courses");
  res.status(200).json({ courses: user.courses });
});

module.exports = router;
