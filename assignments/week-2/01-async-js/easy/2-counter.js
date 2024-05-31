// Initialize the counter with a starting value of 0
let seconds = 0;

// Define a function to increment time
function incrementTime() {
  // Increment seconds by 1
  seconds += 1;
  console.log(seconds);

  // Use setTimeout and pass the same function as handler
  setTimeout(incrementTime, 1000);
}

// Call the function to start execution
incrementTime();
