// Initialize the counter with a starting value of 0
let seconds = 0;

// Use setInterval to execute the provided function every 1000 milliseconds (1 second)
setInterval(() => {
  // Increment the counter by 1 and log the updated value to the console
  console.log((seconds += 1));
}, 1000);
