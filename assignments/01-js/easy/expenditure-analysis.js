/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Make an object to store the category and price for the categories
  let expediture = {};

  for (transaction of transactions) {
    // Destructure category and price from transactions
    const { category, price } = transaction;

    // If expenditure object does not a have specific category then make a new entry for it
    // else just add the price to the existing category
    if (expediture.hasOwnProperty(category)) {
      expediture[category] += price;
    } else {
      expediture[category] = price;
    }
  }

  // After this step if you log expenditure
  // it is going to look something like this: { Food: 20, Clothing: 25, Electronics: 30 }
  // Now you need it in an array which should look like this:
  /*
  [
  { category: 'Food', totalSpent: 20 },
  { category: 'Clothing', totalSpent: 25 },
  { category: 'Electronics', totalSpent: 30 }
  ]
  */

  const expenditureByCategory = Object.keys(expediture).map((category) => {
    return {
      category: category,
      totalSpent: expediture[category],
    };
  });
  return expenditureByCategory;
}

module.exports = calculateTotalSpentByCategory;
