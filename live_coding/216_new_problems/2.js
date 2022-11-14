/*
Given an array of integers, nums, return the third largest number in the array.
If the third largest number does not exist, return the greatest number.

You are not allowed to sort the array.
*/

/*
?:
1) will the input array ever be empty? YES -> null
2) will the input array ever be sparse or contain non-indexed properties? ([1, 'a': 3, <emptyslots>]) YES
3) will the array elements always be integers (no floats, or special numbers like Infinity, NaN)?
4) can the input array integer elements be negative?
5) will there ever be non Number elements? -> No, none explicitly. (['1'])

-> i: array of +/- integers `nums`
  - can be sparse
  - can have non-indexed properties
  - can be empty
  - elements will always be numbers including infinity, NaN, floats

<- o: number (third largest number or the greatest number)


explicit rules:
  - You are not allowed to sort the array.
  - if no 'third largest' integer value exists, return the largest of selection

mental model & sub-problems:

validation of input array and it's elements and qualities (sparseness, etc.)

identifying the three largest numbers and returning the third largest (if it exists)

steps:

GUARD against :
  - non array inputs (undefined, object, int, etc.)
  - empty arrays
  - arrays with floats
  - arrays with NaN elements

CLEAN/TRANSFORM input array if it happens to be sparse

CREATE set from input array (takes care of duplicate values) -> convert back to array

early return for those input arrays which have a length < 3 : get max from this array and return

CREATE a largestNums array []
loop three times:

  get max from input array and push into largest nums
  delete max from input array (mutates array creating a hole)

return  min from largest nums array
*/

const isNotInt = (candidate) => Math.round(candidate) !== candidate;

function thirdMax(input) {
  if (!Array.isArray(input)) return 'invalid input';
  if (input.length === 0) return null;
  if (input.some(isNaN)) return 'invalid NaN element detected';
  if (input.some(isNotInt)) return 'invalid float detected';

  // sparse arrays
  const cleanArr = [...input].filter(el => el !== undefined);

  // duplicate elements
  const set = new Set(cleanArr);
  let nonDupArr = [...set];

  // short arrays
  if (nonDupArr.length < 3) return Math.max(...nonDupArr);

  const largestNums = [];

  for (let count = 0; count < 3; count++) {
    let max = Math.max(...nonDupArr);
    let idx = nonDupArr.indexOf(max);
    largestNums.push(max);
    delete nonDupArr[idx];
    nonDupArr = [...nonDupArr].filter(el => el !== undefined);
  }

  return Math.min(...largestNums);
}


const sparse = [1, 2, 3];
sparse.length = 10;
const other = [1, 2, 3];
other.hello = 0;
console.log(thirdMax(sparse)) // 1
console.log(thirdMax(other)) // 1
console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([3, 1])); // 3
console.log(thirdMax([Infinity, -Infinity, 1])) // -Infinity
console.log(thirdMax([Infinity, Infinity, Infinity, 1, -Infinity])) // -Infinity
console.log(thirdMax([Infinity, -Infinity, 1, 0])) // 0
console.log(thirdMax([2, 2, 2, 2])); // 2
console.log(thirdMax([])) // null
console.log(thirdMax([3, 2, 1, 2.2, -3.1])); // ERR
console.log(thirdMax([Infinity, -Infinity, 1, NaN, NaN])) // ERR
console.log(thirdMax({})) // ERR


/*
Will we always receive precisely one argument? If not, what should I do if the array is omitted? What should I do if there is more than one argument?
Will the argument always be an array? If not, what should I do?
Can the array be empty? If so, what should I return?
Can the array have fewer than three elements? If so, what should I return?
Can the array be sparse? If so, how should I handle the missing elements?
Can the array contain any number of elements?
Will the array ever contain negative numbers or 0? If so, how should I handle those?
Will the array ever contain non-integers? If so, how should I handle those?
Will the array ever contain NaN? If so, how should I handle that?
Will the array ever contain Infinity? If so, how should I handle that?
Will the array ever contain -Infinity? If so, how should I handle that?
Can the numbers in the array appear in any order? For instance, might I receive a [1, 3, 2] array? Does this affect the result in any way?
Can the array have repeated numbers, e.g., [3, 3, 1]? If so, how should I handle those? Should I handle the two 3s as different numbers and return 1, or should I return the largest number, 3?​
*/
