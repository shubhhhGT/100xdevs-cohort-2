const fs = require("fs");

// The data you want to add
let data = "Well, modified it!";

// Write to the file
fs.writeFile("./4-write-to-file.md", data, "utf-8", (err) => {
  if (err) {
    return console.error(err);
  }

  // just read and display the content of the modified file
  fs.readFile("./4-write-to-file.md", "utf-8", (err, data) => {
    if (err) {
      return console.error(err);
    }
    console.log(data);
  });
});
