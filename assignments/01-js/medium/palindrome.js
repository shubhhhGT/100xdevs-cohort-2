/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Normalize the string: convert to lowercase and remove whitespaces
  str = str.toLowerCase().split(" ").join("");
  // Remove non-alphanumeric characters from the string
  str = str.replace(/[^\w\s]/g, "");

  // Initialize two pointers: one at the start of the string (i) and one at the end (j)
  let i = 0;
  let j = str.length - 1;

  // Iterate through the string until the pointers meet
  while (i < j) {
    // If characters at positions i and j are not equal, the string is not a palindrome
    if (str[i] !== str[j]) {
      return false; // Return false indicating it's not a palindrome
    }
    // Move the pointers towards the center of the string
    i++;
    j--;
  }

  // If the loop completes without finding any mismatch, the string is a palindrome
  return true; // Return true indicating it's a palindrome
}

module.exports = isPalindrome;
