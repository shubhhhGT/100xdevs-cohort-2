const fs = require("fs");

fs.readFile("./3-read-from-file.md", "utf-8", (err, data) => {
  if (err) {
    return console.error(err);
  }
  console.log(data);
});

for (let i = 0; i < 1000000000000; i++) {}
console.log("Quite Expensive Aye!");
