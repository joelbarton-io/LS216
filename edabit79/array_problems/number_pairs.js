/*
Create a function that determines how many number pairs are embedded in a space-separated string. The first numeric value in the space-separated string represents the count of the numbers, thus, excluded in the pairings.

Examples

number_pairs("7 1 2 1 2 1 3 2") ➞ 2
// (1, 1), (2, 2)

number_pairs("9 10 20 20 10 10 30 50 10 20") ➞ 3
// (10, 10), (20, 20), (10, 10)

number_pairs("4 2 3 4 1") ➞ 0
// Although two 4's are present, the first one is discounted.

Notes
Always take into consideration the first number in the string is not part of the pairing, thus, the count. It may not seem so useful as most people see it, but it's mathematically significant if you deal with set operations.


*/
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

questions:
  1. will the string ints always be integers? - NO
  2. will they always be positive integers? - NO
  3. will there be any special numbers (NaN, Infinity)? - YES
  4. should we considered situations where the input string's num values are separated by more than one space or other space chr?

input: a string which represents a list of numbers and a length value (str[0])
output: return the number of 'pairs'

RULES:
  - the first chr is the length value and should not be included in the pairs representation
  - duplicate pairs (1, 1, 1) === 1 pair
  - duplicate pairs (1, 1, 1, 1) === 2 pairs

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."produce a record of the number of pairs of duplicate values, return number of the pairs"...

roadmap:
STRING split by single white space
ARRAY from the 1th index forward
OBJECT that keeps track of the # of each individual number character
  {
    1: 3,
    2: 3,
    3: 1
  } -> an ARRAY of entries

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract algo :
GUARD against invalid datatypes or empty strings or string of length < 3;

SPLIT input string by regexp

SLICE from 1th index and create new array of actual elements

DECLARE an empty obj dictionary;

TRAVERSE array of number characters
  POPULATE an object with the various counts for each chr in the array

  if dictionary[el]
    increment the value of that property
  else
    create that property, value is 1;

CONVERT obj -> array of subarrays

(IGNORE) FILTER array of arrays to remove any subarray who's second value is < 2;

DECLARE pairs = 0;
WITH filtered array...
TRAVERSE array

  FOR EACH...
    grab the second value (the count of that number character)

    while 2nd value > 1
      increment count by 1
      decrement 2nd value

return pairsCount;

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

algo walk-thru

---------------------------------------------------------------
*/

function numberPairs(input) {
  if (typeof input !== 'string' || input.length < 3) return 'invalid input';

  let numChrs = input.split(/[\s]+/).slice(1);
  const dict = {};

  numChrs.forEach(el => {
    dict[el] = dict[el] ? dict[el] + 1 : 1;
  });

  let arrOfSubs = Object.entries(dict);
  let pairs = 0;

  arrOfSubs.forEach(([_, count]) => {
    while (count > 1) {
      pairs += 1;
      count -= 2;
    }
  })

  return pairs;
}
// center cases:
console.log(numberPairs("7 1 2 1 2 1 3 2")) // 2 (odd number of elements)
console.log(numberPairs("7  1 2 1  2 1 3  2")) // 2 -> .split(/[\s]+/)
console.log(numberPairs("7 1.1 2 1.1 2 1.1 3 2")) // 2 (floats are valid)
console.log(numberPairs("2 1 2")) // 0
console.log(numberPairs("5 1 2 1 1 1")) // 2
console.log(numberPairs("5 1 1 1 1 1")) // 2
console.log(numberPairs("7 1 2 1 2 3 3 2")) // 3
console.log(numberPairs("4 2 3 4 1")) // 0
console.log(numberPairs("9 10 20 20 10 10 30 50 10 20")) // 3 (even number of elements)
console.log(numberPairs("3 NaN NaN NaN")) // 1
console.log(numberPairs("4 NaN NaN NaN Infinity")) // 1
console.log(numberPairs("4 NaN NaN Infinity Infinity")) // 2
console.log(numberPairs("4 NaN NaN Infinity -Infinity")) // 1
// edge cases:
console.log(numberPairs("0")) // invalid
console.log(numberPairs("")) // invalid
console.log(numberPairs(['0', 0])) // invalid
console.log(numberPairs("3 NaN NaN NaN")) // 1

// ~> 40:38
