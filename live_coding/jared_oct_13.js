// Column With Maximum Sum
// Given an array of numbers and a value for n, split the numbers into n-sized groups. If we imagine that these groups are stacked on top of each other (see below), return the column number that has the greatest sum. If two or more columns have the same sum, return the one with the smallest column number.

// Example
// nums = [4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19]
// n = 4
// Gives the array:

// [[4, 14, 12, 7],
// [14, 16, 2, 13],
// [7, 16, 11, 19]]

// // 1, 2, 3, 4 (column)
// // 25, 46, 28, 39 (sum)
// You would return 2, as the 2nd column has the greatest sum.

// Notes
// Nums will always divide into equal-length groups.

/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

input: array of integers, n (# of columns) array.length/n === number of subarrays
output: the 'column' that sums to the greatest value

RULES:
  - input will always be an array of length > 0
  - if two or more column sums are equal in value, return 'earliest' sum

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."using a nested loop, we want to calculate the 'column sums'"...

" column sum" -> sum of the elements at each index in the subarrays
roadmap:
  - ARRAY and a NUm
  ...
  NUM (indicates the column number which has the first largest sum for that column)

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

mental model:

// nums = 4, 14, 12, 28, 14, 16, 5, 13, 7, 16, 11, 19
// n = 4

//


abstract algo :

GET subarray count ->
  inputarray length / n
    -> subArr count

FOR loop 0 < subArrcount

SPLIT input array into subarrays of length n
  [4, 14, 12, 28, 14, 16, 5, 13, 7, 16, 11, 19]

[
[4, 14, 12, 28],
[14, 16, 2, 13],
[7, 16, 11, 19]
]
CREATE result array [[4], [14], [12], [7]]

TRAVERSE the array of subarrays (with index)
  FOR EACH subarray
    TRAVERSE that subarray (with index)
      [4, 14, 12, 7] ... el, indx
        push el -> resultArr[i]

store the new mapped array of ints in a variable...
CALCULATE sum of each subarray in the result array (MAP!)
  FOR EACH subarr
    get sum (.reduce((a, b) a + b))


Get max from the new array of ints

.indexOf(maxVal) -> index + 1

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/

function maxSum(arr, n) {
  let subArrs = [];

  while (arr.length !== 0) {
    subArrs.push(arr.splice(0, 4)); // mutation
  }

  const result = [];
  for (let count = 0; count < n; count++) {
    result.push([]);
  }

  subArrs.forEach(arr => {
    arr.forEach((num, idx )=> {
      result[idx].push(num);
    });
  });

  const sums =  result.map(arr => arr.reduce((a, b) => a + b));
  const columnMax = Math.max(...sums);
  return sums.indexOf(columnMax) + 1;
}

console.log(maxSum([4, 14, 12, 7, 14, 16, 5, 13, 7, 16, 11, 19], 4)); // -> 2

console.log(maxSum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 4)); // -> 1
// 4 4 4 4
