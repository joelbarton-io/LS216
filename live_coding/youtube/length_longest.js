/*

“A consecutive-run is a list of adjacent, consecutive integers. This list can be either increasing or decreasing.

Create a function that takes an array of numbers and returns the length of the longest consecutive-run.”

If there aren't any consecutive runs (there is a gap between each integer), return 1.

longestRun([1, 2, 3, 5, 6, 7, 8, 9]) ➞ 5
// Two consecutive runs: [1, 2, 3] and [5, 6, 7, 8, 9] (longest).
 */


/*

## INPUT:
  - list only ever contains INTS
  - (empty?) / sparse
## OUTPUT:
  - integer coor leng of longest consecutive run

## DATA FLOW:
  - array (can be empty or sparse) -> [] -> integer return value

## REQUIREMENTS:
  - always ints
  - consecutive-run:
    - one after the other &
    - consistently be in one 'direction' asc/desc

## SUMMARY:

- given some list of integer values, calculate the longest consecutive-ascending/descending run and the length of the run as an integer


## STEPS:
GUARD against:
  - sparse and empty input arrays

declare longestRun = -Infinity;
declare currRunLength = 1


TRAVERSE input array (index 1)
  declare left, right

    if leftEl === rightEl - 1 : (ascending)
      currRunLeng++;
      continue;
    if not:
      check to see if currRunLeng > longestRun
      reassign longestRun to currRunLeng
      negate isAscending value

  else if (leftEl === rightEl - 1)
      currRunLeng++;
    if not:
      check to see if currRunLeng > longestRun
      reassign longestRun to currRunLeng
  else
    check to see if currRunLeng > longestRun
    currRunlength = 1
*/


function longestRun(input) {

  if (!Array.isArray(input)) return 'invalid input';
  if (input.length === 0) return 1;
  if (input[0] === undefined) return 1;

  return ascending(input);

}

function ascending(input) {
  const lengths = [];
  let currRunLeng = 1;
  const consecutiveAscending = (left, right) => left + 1 === right;

  for (let i = 1; i < input.length; i++) {
    let left = input[i - 1];
    let right = input[i];
    
  }
  return lengths;
}

function descending(input) {
  const lengths = [];
  let currRunLeng = 1;
  const consecutiveDescending = (left, right) => left - 1 === right;

  for (let i = 1; i < input.length; i++) {
    let left = input[i - 1];
    let right = input[i];

    if (consecutiveDescending(left, right)) {
      currRunLeng++;
    } else {
      lengths.push(currRunLeng);
    }
  }
  return lengths;
}
console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9])); // ➞ 5