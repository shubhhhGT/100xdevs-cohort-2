/**
  You need to create an express HTTP server in Node.js which will handle the logic of a todo list app.
  - Don't use any database, just store all the data in an array to store the todo list data (in-memory)
  - Hard todo: Try to save responses in files, so that even if u exit the app and run it again, the data remains (similar to databases)

  Each todo has a title and a description. The title is a string and the description is a string.
  Each todo should also get an unique autogenerated id every time it is created
  The expected API endpoints are defined below,
  1.GET /todos - Retrieve all todo items
    Description: Returns a list of all todo items.
    Response: 200 OK with an array of todo items in JSON format.
    Example: GET http://localhost:3000/todos
    
  2.GET /todos/:id - Retrieve a specific todo item by ID
    Description: Returns a specific todo item identified by its ID.
    Response: 200 OK with the todo item in JSON format if found, or 404 Not Found if not found.
    Example: GET http://localhost:3000/todos/123
    
  3. POST /todos - Create a new todo item
    Description: Creates a new todo item.
    Request Body: JSON object representing the todo item.
    Response: 201 Created with the ID of the created todo item in JSON format. eg: {id: 1}
    Example: POST http://localhost:3000/todos
    Request Body: { "title": "Buy groceries", "completed": false, description: "I should buy groceries" }
    
  4. PUT /todos/:id - Update an existing todo item by ID
    Description: Updates an existing todo item identified by its ID.
    Request Body: JSON object representing the updated todo item.
    Response: 200 OK if the todo item was found and updated, or 404 Not Found if not found.
    Example: PUT http://localhost:3000/todos/123
    Request Body: { "title": "Buy groceries", "completed": true }
    
  5. DELETE /todos/:id - Delete a todo item by ID
    Description: Deletes a todo item identified by its ID.
    Response: 200 OK if the todo item was found and deleted, or 404 Not Found if not found.
    Example: DELETE http://localhost:3000/todos/123

    - For any other route not defined in the server return 404

  Testing the server - run `npm run test-todoServer` command in terminal
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.json());

// Lets create a db
let db = [];

// get all the todos
app.get("/todos", (req, res) => {
  try {
    res.status(200).json(db);
  } catch (error) {
    return res.status(500).json("Failed to get todos");
  }
});

// Get todos with Id
app.get("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todo = db.find((entry) => entry.id === parseInt(id, 10));
    if (!todo) {
      return res.status(404).json("Not Found");
    }
    res.status(200).json(todo);
  } catch (err) {
    return res.status(404).json("Not Found");
  }
});

// POST /todos - Create a new todo item
app.post("/todos", (req, res) => {
  try {
    // Get the things i want from bosy of req
    const { title, completed, description } = req.body;

    // Push into db
    db.push({
      id: Date.now(),
      title: title,
      completed: completed,
      description: description,
    });

    res.status(201).json({ id: db[db.length - 1].id });
  } catch (error) {
    return res.status(500).json("Failed!");
  }
});

// PUT /todos/:id - Update an existing todo item by ID
app.put("/todos/:id", (req, res) => {
  try {
    // get id from req parameters
    const { id } = req.params;
    // get updates fro req body
    const { title, description } = req.body;

    // FInd the todo
    const todoIndex = db.findIndex((entry) => entry.id === parseInt(id, 10));

    if (todoIndex === -1) {
      return res.status(404).json("Todo not Found");
    }

    // Update the todo
    const updatedTodo = {
      id: db[todoIndex].id,
      title: title,
      description: description,
    };

    // make the chnages in the og db
    db[todoIndex] = updatedTodo;

    res.status(200).json(updatedTodo);
  } catch (err) {
    return res.status(404).json("Not Found");
  }
});

// DELETE /todos/:id - Delete a todo item by ID
app.delete("/todos/:id", (req, res) => {
  try {
    // get id from req parameters
    const { id } = req.params;

    // delete the todo
    db = db.filter((entry) => entry.id !== parseInt(id, 10));

    res.status(200).send();
  } catch (error) {
    return res.status(404).json("Not Found");
  }
});

app.get("*", (req, res) => {
  return res.status(404).send("Route not found");
});
module.exports = app;
