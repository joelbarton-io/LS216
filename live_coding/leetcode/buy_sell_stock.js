

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

const maxProfit = (prices) => {
  if (prices.length < 2) return 0; // doesn't account for sparse arrays

  let profit = 0;
  let left = prices[0];
  for (let i = 1; i < prices.length - 1; i++) {
    if ((prices[i]) < left) {
      left = prices[i]
    }

    let right = prices[i + 1];

    if (left > right) {
      continue;
    }

    let temp = right - left;

    if (profit < temp) {
      profit = temp;
    }
  }
  return profit;
};


/*
if
*/


console.log(maxProfit([7,1,5,3,6,4]))
