/*
INPUT:
  - array
  - length is always 2 or more
  - containing integers between 0 and 9

OUTPUT:
  - integer
  - the final, reduced value

DATA FLOW: array -> [smaller arrays/recursion operations] -> integer

REQUIREMENTS:
  - if current element is unique, that value 'becomes' 1
  - if current element has duplicate(s):
    - and if those duplicate(s) are consecutive:
      - count them and return this count (thus reducing the length of the array)
    - if duplicates are non-consecutive:
      - they become a 1

EDGE CASES:
SUMMARY:

[0, 4, 6, 8, 8, 8, 5, 5, 7] ->
[1, 1, 1, 3, 2, 1] ->
[3, 1, 1, 1] =>
[1, 3] =>
[1, 1] =>
[2]

STEPS:

*/

function setReducer(input) {
  if (input.length === 1) return input[0]; // base case
  
  let nextInput = [];
  let leftIdx = 0;
  let rightIdx = 1;
  let consCount = 1;

  while (rightIdx <= input.length) {

    if (input[leftIdx] == input[rightIdx]) {
      consCount++;
    } else {
      nextInput.push(consCount);
      consCount = 1;
    }
    leftIdx++;
    rightIdx++;
  }

  return setReducer(nextInput);
}

console.log(setReducer([0, 4, 6, 8, 8, 8, 5, 5, 7]))