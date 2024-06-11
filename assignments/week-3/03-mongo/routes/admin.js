const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Get username and password to sign up
  const { username, password } = req.body;

  // Check if the user already exists in the DB
  if (await Admin.findOne({ username: username })) {
    return res.status(401).json({ message: "User already exists" });
  }

  // Create a new entry in db
  await Admin.create({
    username: username,
    password: password,
  });

  // snd response
  res.status(200).json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // get title, des, etc from req body
  // PS: we dont mneed to chack that admin exits or not, as adminMiddleware is already taking care of it
  const { title, description, price, imageLink } = req.body;
  const { username } = req.headers;

  const instructor = await Admin.findOne({ username: username });

  // create a new course
  const newCourse = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    admin: instructor._id,
  });

  // Push the new course in admin course DB
  await Admin.findByIdAndUpdate(instructor._id, {
    $push: {
      courses: newCourse._id,
    },
  });

  // Send res
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // get username from req header
  const { username } = req.headers;

  // Find the admin using the username
  const admin = await Admin.findOne({ username: username });

  const adminCourses = await Course.find({ admin: admin._id });

  // send res
  res.json({ courses: adminCourses });
});

module.exports = router;
