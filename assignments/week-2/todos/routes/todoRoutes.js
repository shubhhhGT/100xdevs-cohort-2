const express = require("express");
const router = express.Router();

// Import controllers
const { createTodo } = require("../controllers/createTodo");
const { getAllTodos, getTodosById } = require("../controllers/getTodo");
const { deleteTodo } = require("../controllers/deleteTodo");
const { updateTodo } = require("../controllers/updateTodo");

router.post("/createTodo", createTodo);
router.get("/getTodos", getAllTodos);
router.get("/getTodo/:id", getTodosById);
router.put("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
