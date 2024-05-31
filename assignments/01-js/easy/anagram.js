/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // Convert the given strings to uppercase, as an anagram is case-insensitive.
  // Then split each string into an array of characters.
  // For example:
  // If str1 = "Bhai" and str2 = "Abhi", after these steps:
  // str1 = ['B', 'H', 'A', 'I'] and str2 = ['A', 'B', 'H', 'I']
  // Sort the arrays using the sort() method (this method applies only to arrays, not strings).
  // After sorting, the arrays should look like this:
  // str1 = ['A', 'B', 'H', 'I'] and str2 = ['A', 'B', 'H', 'I']
  // Join the arrays back into strings using the join() method.
  // After joining, str1 = "ABHI" and str2 = "ABHI"
  // Finally, compare the two strings: str1 === str2 (this will return true if they are anagrams).
  // Return the result of the comparison.

  str1 = str1.toUpperCase().split("").sort().join();
  str2 = str2.toUpperCase().split("").sort().join();
  return str1 === str2;
}

module.exports = isAnagram;
