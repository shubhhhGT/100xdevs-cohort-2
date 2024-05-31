/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Convert given string to uppercase (Read Note)
  str = str.toUpperCase();

  // Declare an array containing vowels
  let vowels = ["A", "E", "I", "O", "U"];

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // If current char of String exists in vowels, increment the count by 1
    if (vowels.indexOf(str[i]) !== -1) {
      count += 1;
    }
  }

  return count;
}

module.exports = countVowels;
