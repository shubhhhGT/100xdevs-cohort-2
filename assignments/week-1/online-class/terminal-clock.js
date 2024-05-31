function updateTime() {
  // Get the current date and time
  const date = new Date();

  // Extract hours, minutes, and seconds from the current time
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  // Display the current time in the terminal in the format: hours : minutes : seconds
  // if you want time in 24hr format, just remove %12 and youre good to go
  console.log(`${hours % 12} : ${minutes} : ${seconds}`);
}

// Call updateTime function every second using setInterval to update the displayed time
setInterval(updateTime, 1000);
