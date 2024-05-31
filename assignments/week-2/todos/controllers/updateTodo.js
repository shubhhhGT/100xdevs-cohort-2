const Todo = require("../models/File");
const writeTodosToFile = require("../utils/writeTodos");

exports.updateTodo = async (req, res) => {
  try {
    // Get the ID of the TODO that you want to update
    const { id } = req.params;

    // get title and desc from req body
    const { title, description } = req.body;

    // Check if id is valid
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    // Check title and desc is not null
    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Title and description are required",
      });
    }
    // Update the Todo
    const updatedTodo = await Todo.findByIdAndUpdate(
      id,
      { title, description, updatedAt: Date.now() },
      { new: true, runValidators: true }
    );

    // Write todos to file
    await writeTodosToFile();

    // send res
    res.status(200).json({
      success: true,
      data: updatedTodo,
      message: "Todo updated successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error while updating Todo",
    });
  }
};
