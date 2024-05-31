/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  // Set the first element of the array as the largest element
  let largestNumber = numbers[0];
  //   Iterate from second element to the last element and check for elements greter than the current largest element
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  //   Return the current largest element
  return largestNumber;
}

module.exports = findLargestElement;
