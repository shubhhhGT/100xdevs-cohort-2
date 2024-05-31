const fs = require("fs");
const path = require("path");
const Todo = require("../models/File");

const filePath = path.join(__dirname, "../Todos.txt");

// Function to write all todos to a file
const writeTodosToFile = async () => {
  // Find all todos and write to file
  const todos = await Todo.find();
  fs.writeFileSync(filePath, JSON.stringify(todos, null, 2));
};

module.exports = writeTodosToFile;
