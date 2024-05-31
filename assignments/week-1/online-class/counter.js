// Create a counter in js (counts down from 30 to 0)

for (let i = 30; i >= 0; i--) {
  setTimeout(() => {
    // Log the current value of 'i'
    console.log(i);
  }, 1000 * (30 - i)); // Calculate the delay based on the difference between the current value of 'i' and the initial value of 30
}
