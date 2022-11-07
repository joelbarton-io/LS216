/*

?:


input: array of integers (arr), 1 integer (k)
    - input always two elements?
    - arr elems always integers? (could contain NaN, -Infinity, float values)
    - k always valid positive integer?

    - arr could be empty arr
    - arr could be wrong type; k could be wrong type

output: min and max products involving (k) elements from (arr)


rules of the problem (validate with test-cases):
  - if there are not (k) elems in (arr), return null


identify sub-problems:

      validation of inputs
      sorting input arr

      get min value and the last (k-1) values from sorted arr
      find product -> min prod

      get last (k) values from sorted arr
      find prod -> max prod

      return two element array

shape of the problem:

-> take list and sort ascending ... depending on if we want -/+ value ... take max neg * (k - 1) positives from right side

steps:

GUARD against:
  - invalid input type for either parameter (arr is array and k is positive integer)
  - arr contains non number values
  - arr contains invalid number values (NaN, Infinity)
  - k > arr.length -> null

SORT input arr in ascending order

GET min value from arr
GET last (k - 1) values from sorted arr
CALC min product from these values

GET last (k) values from sorted arr
CALC max product

RETURN [min, max] prod arr

*/

function productPair(arr, k) {
  const ERR = 'ERROR';
  const INVALID_NUMBERS = [NaN, Infinity, -Infinity];

  const invalid_num = candidate => INVALID_NUMBERS.includes(candidate);
  const not_num = candidate => typeof candidate !== 'number';

  if (typeof k !== 'number' || !Array.isArray(arr)) return ERR;
  if (k > arr.length) return null;
  if (k < 1 || arr.length === 0) return ERR;
  if (arr.some(not_num)) return ERR;
  if (arr.some(invalid_num)) return ERR;

  /*
  need:
    - all possible permutations of length k from input arr
    - for each permutation, need to get product for the subarr
    - get min/max
  */

  const allPairs = (arr, num) => {
    const res = [];

    if (num === 0){
      return [[]];
    }

    const subResult = allPairs(arr, num - 1);

    for (let el of arr){
      for (let sub of subResult){
        res.push([el].concat(sub));
      }
    }

    return res;
  }

  const allProducts = allPairs(arr, k).map(set => set.reduce((a, c) => a * c));

  return [Math.min(...allProducts), Math.max(...allProducts)];
/*   const sortedArr = arr.sort();
  let minVal;
  let maxVals;

  if (k === 1) {
    minVal = sortedArr[0];
    return [minVal, sortedArr[sortedArr.length - 1]];
  }

  const sliceForMin = arr.length - (k - 1);
  const sliceForMax = arr.length - k;

  minVal = sortedArr[0];
  maxVals = sortedArr.slice(sliceForMin);

  let min = minVal * sortedArr.slice(sliceForMin).reduce((a, c) => a * c);
  let max = sortedArr.slice(sliceForMax).reduce((a, c) => a * c);
  return [min, max]; */

}
// console.log(productPair([5, 4, 3, 3, 6], 2), [9, 30]);



/*
k = 2
[5, 4, 3, 3, 6]


[5, 4]
[5, 3]
[5, 3]
[5, 6]
*/
/*
console.log(productPair()); // ERROR
console.log(productPair([1, 2])); // ERROR
console.log(productPair(1, [1, 2])); // ERROR

console.log(productPair([], 3)); // null
console.log(productPair([1, 2], 3)); // null
console.log(productPair([1, 2, 3, -4], 100)); // null

console.log(productPair(['1', '2', '3', '-4'], 3)); // ERROR
console.log(productPair(['1', '2', '3', -4], '3')); // ERROR
console.log(productPair({}, 3)); // ERROR
console.log(productPair(null, NaN)); // ERROR
console.log(productPair([NaN, Infinity, -Infinity], 2)); // ERROR


console.log(productPair([0, 1, 2, 3], 2)); // [0, 6]
console.log(productPair([0, 1, 2, 3, 4], 3)); // [0, 24]
console.log(productPair([1, 2, 3, -4], 1)); // [-4, 3]
console.log(productPair([1, 2, 3, -4], 2)); // [-12, 6]
console.log(productPair([1, 2, 3, -4], 3)); // [-24, 6]
 */

// ~> 37:27 (didn't pass the edabit cases);



/* const arr = [5, 4, 3, 3, 6];
const num = 2;

const allPairs = (arr, num) => {
  const res = [];
  if (num === 0){
    return [[]];
  }
  const subResult = allPairs(arr, num - 1);

  for (let el of arr){
    for (let sub of subResult){
      res.push([el].concat(sub));
    }
  }

  return res;
}
console.log(allPairs(arr, num)); */
// console.log(permutator([5, 4, 3, 3, 6]))

function getSubarrays(arr){
  return arr.reduce((subsets, value) => {
    return subsets.concat(subsets.map(set => {
      return [value, ...set];
    }))
  }, [[]])
}

console.log(getSubarrays([5, 4, 3, 3, 6]))