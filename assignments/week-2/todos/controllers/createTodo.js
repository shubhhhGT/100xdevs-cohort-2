// Import Schema
const Todo = require("../models/File");

const writeTodosToFile = require("../utils/writeTodos");

// Write logic to create a Todo
exports.createTodo = async (req, res) => {
  try {
    // Extract title and description from request body
    const { title, description } = req.body;

    // verify that title and description are not empty
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }

    // Add to DB
    const response = await Todo.create({ title, description });

    // Write todos to file
    await writeTodosToFile();

    // Send success response
    res.status(201).json({
      success: true,
      data: response,
      message: "Todo Created!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error while creating Todo",
    });
  }
};
