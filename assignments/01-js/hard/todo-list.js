/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    // Initialize todoList as an empty array
    this.todoList = [];
  }

  // Method to add a new todo to the list
  add(todo) {
    // Push the new todo into the todoList array and return the new length of the array
    return this.todoList.push(todo);
  }

  // Method to remove a todo from the list based on its index
  remove(indexOfTodo) {
    // Filter out the todo at the specified index and update todoList with the filtered array
    this.todoList = this.todoList.filter((item, i) => i !== indexOfTodo);
    // Return the updated todoList
    return this.todoList;
  }

  // Method to update a todo at a specific index with a new value
  update(index, updatedTodo) {
    // Check if index is valid
    if (index >= this.todoList.length) {
      // If index is invalid, return the current todoList without making any changes
      return this.todoList;
    }
    // Update the todo at the specified index with the new value
    return (this.todoList[index] = updatedTodo);
  }

  // Method to retrieve all todos in the list
  getAll() {
    // Return the entire todoList array
    return this.todoList;
  }

  // Method to retrieve a todo at a specific index
  get(indexOfTodo) {
    // Check if index is valid
    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) {
      // If index is invalid, return null
      return null;
    }
    // Return the todo at the specified index
    return this.todoList[indexOfTodo];
  }

  // Method to clear all todos from the list
  clear() {
    // Set the length of todoList to 0, effectively clearing all todos
    return (this.todoList.length = 0);
  }
}

module.exports = Todo;
