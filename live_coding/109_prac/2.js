
/*
?:
# Write a method that takes one argument: an array of integers.
# The method should return the minimum sum of 5 consecutive
# numbers in the array. If the array contains fewer than 5
# elements, the method should return nil.


-> i: array of ints (could contain special numbers!)

<- o: "minimum sum of 5 cons numbers"


expl/impl rules (validate with test-cases):

- if input array has less than 5 elements, return null
- if invalid element in array, what do (?) return error message
- sparse arrays or arrays with non-indexed object properties (?) yes, invalid input!

sub-problems:

GUARD against invalid inputs

traverse valid input array and slice chunks of length 5; calculate sum for that chunk and store this sum in a variable (dependant on magnitude)

return final minSum value

steps:

GUARD against:
  - non array inputs
  - length less than 5
  - invalid elements in input array (sparse arrays) (wrong datatypes inside of input)

DECLARE minSum = Infinity

TRAVERSE input array with index from 0..(length - 5)

  SLICE from currIdx..currIdx + 5
  SUM the chunk
  COMPARE chunkSum to minSum
    if smaller than minSum; reassign minSum to chunkSum
    else continue

return minSum;
*/

console.log(findMinSum([1, 2, 3, 4, 5])) // 15       [1, 2, 3, 4, 5]
console.log(findMinSum([1, 2, 3, 4, 5, 6])) // 15    [1, 2, 3, 4, 5]
console.log(findMinSum([-1, 1, 3, 4, 5, 6, 7])) // 12   [-1, 1, 3, 4, 5]
console.log(findMinSum([-1, 1, 3, 4, 5, -6, 7])) // 7    [1, 3, 4, 5, -6]
console.log(findMinSum([1, 2, 3, 4])) // null
console.log(findMinSum([])) // null
console.log(findMinSum([NaN, 1, 2, 3, 4, 5])) // ERROR
console.log(findMinSum([-Infinity, 1, 2, 3, 4, 5])) // ERROR
const sparseArr = [];
sparseArr.length = 10;
console.log(findMinSum(sparseArr)) // ERROR <- still doesn't work for partially sparse arrays!
console.log(findMinSum({})) // ERROR


function findMinSum(numbers) {
  const LENG = 5;
  const isSpecialNum = (num) => Number.isNaN(num) || num === Infinity || num === -Infinity;
  if (!Array.isArray(numbers)) return 'INVALID: non-array';
  if (numbers.length < 5) return null;
  if (numbers[0] === undefined) return 'INVALID: sparse array';
  if (numbers.some(isSpecialNum)) return 'INVALID: special number';

  let minSum = Infinity;

  for (let idx = 0; idx <= (numbers.length - LENG); idx++) {
    const chunkSum = numbers.slice(idx, idx + LENG).reduce((a, c) => a + c);
    if (chunkSum < minSum) minSum = chunkSum;
  }

  return minSum;
}

// ~> 27:30