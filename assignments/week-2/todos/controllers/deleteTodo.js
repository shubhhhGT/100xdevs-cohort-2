const Todo = require("../models/File");
const writeTodosToFile = require("../utils/writeTodos");

exports.deleteTodo = async (req, res) => {
  try {
    // Get the ID of the TODO that you want to delete
    const { id } = req.params;

    // Check if id is valid
    const todo = await Todo.findById(id);
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Id not valid for updating TODO",
      });
    }

    // Delete the Todo
    await Todo.findByIdAndDelete(id);

    // Write todos to file
    await writeTodosToFile();

    // send res
    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error while deleting Todo",
    });
  }
};
