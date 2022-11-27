/*
?:

[7,1,5,3,6,4]
   ^b    ^s

-> i: array of integer values
<- o: max profit or 0

explicit rules:
- must buy before you sell; you can't buy & sell on same day

implicit rules:


mental model & sub-problems:

want to traverse the input array of integers and locate the minimum and maximum values where the min val occurs BEFORE the max val and return the difference.
If no such min/max pair exists, return 0

steps:

GUARD for array of length 1 -> return 0
declare maxProfit and assign it to 0

declare min and assign it to +Infinity

loop over array:
  tempShifted = shifted first val in array
  if tempShifted < min:
    reassign min to tempShifted

  get maxVal from remaining array elements
  compare this maxVal with min
    if min >= maxVal:
      continue;
    else:
      calculate profit of subtracting min from maxVal
      if this result is > profit
        assign profit to the result of this operation



profit = 0
min = 1
tempShifted = 1
[5,3,6,4]
*/

const maxProfit = function(prices) {
  let maxProfit = 0;
  let min = prices[0];

  for(let i = 1; i < prices.length; ++i) {
    let currPrice = prices[i]
      // if currPrice is < min, we now have a new
      if(min > currPrice) {
          min = currPrice;

      } else {
        let newProfit = currPrice - min;
        // if the new profit exceeds the current value of maxProfit, then we want to reassign maxProfit to new profit
        if(newProfit > maxProfit) {
          maxProfit = newProfit;
      }
    }
  }

  return maxProfit;
};



//console.log(maxProfit([7,1,5,3,6,4]))

// ADD CODE HERE
function intersection(arrs) {
  let [first, second, third] = arrs;

  return first.reduce((acc, curr) => {
    if (second.includes(curr) && third.includes(curr)) acc.push(curr)
    return acc
  }, []);
}

// Uncomment these to check your work!
const arr1 = [5, 10, 15, 20];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [1, 10, 15, 5, 20];

console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]
