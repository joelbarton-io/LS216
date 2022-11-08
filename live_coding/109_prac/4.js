'use strict';

/*
?: Write a method that takes an array
of integers and returns the two numbers
that are closest together in value.


1) Is it possible to have an input that contains nothing? YES, return error message
2) is the input type guaranteed? No, must validate input type
3) how do I handle invalid data types in the array assuming that it is an array? ERROR MESSAGE or null
4) how should we handle a situation where the input array contains multiple pairs of integers which have the same absolute difference?
  - [1, 2], [4, 5] ? ASSUMPTION: if there are multiple pairs with the same absolute difference, return the pair whose sum is the smallest.
5) does the order of the elements in the two element array being returned matter? YES, ascending order!

-> i: array of integers (special number types: NaN Infinity bigInt)

<- o: two element array containing the pair of values whose abs diff is the smallest and if there are multiple pairs, return the one with the min sum

expl/impl rules (validate with test-cases):

- closest together in value : the absolute difference between the two integers
- if there are multiple pairs with the same absolute difference, return the pair whose sum is the smallest.
- the two element array returned must be sorted in ascending order

sub-problems:

validate input, ensuring that the input type is the expected type and handling invalid inputs

Pass over the SORTED input array using a sliding window and compare the abs diff of the window elements with some minAbsDiff value
[1, 2, 3, 4, 5])) // [1, 2]
   [2, 3] compare this abs diff with minAbsDiff
    if smaller, store pair and update minAbsDiff's value

if the pairs array [[1, 2], [2, 3], ...] has a length of > 1

steps:

GUARD for:
  - invalid input types.
  - invalid array element types ('1', [], ) -> every elem in input array MUST be a number
  - (must be INTEGER) remainder operator to check for ints

CREATE a copy of input array with slice
SORT slice of input array (ascending) and store in a variable

DECLARE result array
DECLARE minAbsDiff value (Infinity)

TRAVERSE sortedSlice with index (0) upto but not including sortedSlice length - 1
  using Math.abs(pair_first - pair_last)              -> 1, 3, 1, 1
    if this value is < minAbsDiff:
      push pair into result array
      update minAbsDiff to the calcuated absDiff of subtracting window's values
    else
      continue to next iteration

  check if result array's length > 1
    if === 1:
      return sorted first element in result array
    else:
      find sums for all pairs
      sort these in ascending order
      return the first elem in result   [[a, b, sum of a + b], [1, 2, 3], [2, 3, 5]]
*/
console.log(findMinAbsDiff([1, 2, 3, 4, 5])) // [1, 2]
console.log(findMinAbsDiff([1, 1, 1, 1, 1])) // [1, 1]
console.log(findMinAbsDiff([-1, 0, 3, 4, 5])) // [-1, 0]
console.log(findMinAbsDiff([1, 1, 3, 4, 5])) // [1, 1]

console.log(findMinAbsDiff([1, 2.1, 3, 4, 5])) // ERR
console.log(findMinAbsDiff([1, NaN, 3, 4, Infinity])) // ERR
console.log(findMinAbsDiff([-1, 0, '3'])) // ERR or null

console.log(findMinAbsDiff([])) // ERR or null
console.log(findMinAbsDiff({})) // ERR
console.log(findMinAbsDiff())

function findMinAbsDiff(input) {
  if (!Array.isArray(input)) return null;
  if (input.length === 0) return 'EMPTY ARRAY!';
  if (input.some(elem => typeof elem !== 'number')) return 'INVALID ELEMENTS!';
  if (input.some(elem => [NaN, Infinity, -Infinity].includes(elem))) return 'INVALID ELEMENTS!';
  const notInt = (number) => Math.round(number) !== number;
  if (input.some(notInt)) return 'INVALID ELEMENTS!';

  const sortedInput = input.slice(0).sort((a, b) => a - b);
  const pairs = [];
  let minAbsDiff = Infinity;

  for (let idx = 0; idx < sortedInput.length - 1; idx++) {
    let pair = sortedInput.slice(idx, idx + 2);
    let absDiff = Math.abs(pair[0] - pair[1])

    if (absDiff <= minAbsDiff) {
      pairs.push(pair);
      minAbsDiff = absDiff;
    }
  }

  if (pairs.length === 1) return pairs[0];

  return pairs.map(pair => {
    return pair.concat(pair[0] + pair[1]);
  }).sort(([,, a], [,, b]) => {
    a - b;
  })[0].slice(0, 2);
}
