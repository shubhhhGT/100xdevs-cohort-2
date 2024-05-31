const Todo = require("../models/File");

// Get All Todos
exports.getAllTodos = async (req, res) => {
  try {
    // Fetch all todos
    const todos = await Todo.find();

    // send res
    res.status(200).json({
      success: true,
      data: todos,
      message: "todos fetched successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error occured while getting all todos",
    });
  }
};

// Get todos by ID
exports.getTodosById = async (req, res) => {
  try {
    // get the ID
    const { id } = req.params;
    // Fetch todo
    const todo = await Todo.findById(id);

    //   If todo is not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found with given ID",
      });
    }

    // send res
    res.status(200).json({
      success: true,
      data: todo,
      message: "todos fetched successfully",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({
      success: false,
      message: "Error occured while getting all todos",
    });
  }
};
