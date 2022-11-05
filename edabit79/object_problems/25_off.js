/*
You want to introduce a discount for your online store. Every customer gets a 25% discount on the most
expensive item in the shopping cart. The discount will be calculated on just one item, even if the
customer buys more than one of the most expensive item.

Create a function that takes an object and returns the total price after discount.
 */
/*

?:
1) will there always be only one highest price item or can there be different items that tie for the highest price?
2) are the objects in the input array guaranteed to have the correct properties and will their values be of the correct data type?

input: array of item objects

output: number value of total checkout price


rules of the problem (validate with test-cases):
- answer should be to two decimal places: $20.00


identify sub-problems:
- identify the highest priced item and decrement it's quanitity by 1
  - from this value, get the discounted price, save this to a variable

- iterate through the values and calculate a total

steps:

GUARD against invalid input types...

SORT array of objects by price, descending in value
GET highest price item's price and calculate the discounted price
DECREMENT highest price item's quantity by 1

REDUCE mutated array of objects into a single value

Add this value to the discounted item's price from before; return the sum

*/
function twentyFiveOnOne(items) {
  if (!Array.isArray(items)) return 'Invalid input';
  if (items.length === 0) return 'no Items in cart';

  const sorted = items.slice().sort((a, b) => b.price - a.price);
  let discountPrice = sorted[0].price * (3/4);
  sorted[0].quantity--;

  sorted.forEach(item => {
    discountPrice += (item.price * item.quantity);
  });

  return Math.round(discountPrice * 100) / 100;
}

console.table(twentyFiveOnOne([
  { name: "Iphone 20x", quantity: 1, price: 1350 },
  { name: "Samsung x30", quantity: 1, price: 1225 },
  { name: "Nokia 9250", quantity: 1, price: 800 },
  { name: "Tesla Model Y", quantity: 1, price: 72999 }
]))// ➞ 58124.25

console.log(twentyFiveOnOne([
  { name: "jogging pants", quantity: 1, price: 29.99 },
  { name: "tennis socks", quantity: 2, price: 5.99 },
  { name: "sweat shirt", quantity: 1, price: 59.99 }
]))// ➞ 86.96