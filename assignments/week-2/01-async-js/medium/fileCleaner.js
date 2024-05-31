const fs = require("fs");

// Function to replce all the blank spaces with a single space and traims tailing white spaces
// function cleanText(text) {
//   return text.replace(/\s+/g, " ").trim();
// }

function cleanText(text) {
  let word = ""; // Initialize an empty word
  const words = []; // Array to store cleaned words

  // Iterate over each character in the input text
  for (let i = 0; i < text.length; i++) {
    const char = text[i];

    // If the character is not a space, add it to the current word
    if (char !== " ") {
      word += char;
    } else {
      // If the character is a space and the current word is not empty, push it to the words array
      if (word !== "") {
        words.push(word);
        word = ""; // Reset the current word
      }
    }
  }

  // Add the last word (if any) to the words array
  if (word !== "") {
    words.push(word);
  }

  // Join the cleaned words with a single space and return the result
  return words.join(" ");
}

fs.readFile("./fileCleaner.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const cleanData = cleanText(data);

  fs.writeFile("./fileCleaner.txt", cleanData, "utf8", (err) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log("File cleaned!");
  });
});
