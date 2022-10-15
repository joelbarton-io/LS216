/* Given a grid of numbers, return a grid of the Spotlight Sum of each number.
The spotlight sum can be defined as the total of all numbers immediately surrounding
the number on the grid, including the number in the total. */
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------
Q:
1. will the elements in each subarray always be valid integers? (no -, Infinity, NaN) YES


input: array of arrays
output: a modified array of arrays

RULES:
- input will always have === lengthed subarrays
- all numbers have a spotlight sum (even edges)


TERMS:
- "spotlight sum": curr value +
  - if has value to left -> add this
  - if has value to right-> add this
  - if has value up -> add this
  - if has value down -> add this
  - if has value diagonal
    - if up & left -> add this
    - if up & right -> add this
    - if down and left -> add this
    - if down and right -> add this
edge case:
---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

mental model:
  for left + right:
    last = (arr.length - 1)

    if the index either !== 0 or !== last -> then we know it has right & left
    if index is 0 -> ONLY RIGHT
    if index is last -> ONLY LEFT

  for up + down:
    last = (arr.length - 1)

    if subarray's index is 0
      only down
    if subarrays index is last
      only up
    if neither:
      both up and down

  for diagonals:
    - if up & left -> add this
    - if up & right -> add this
    - if down and left -> add this
    - if down and right -> add this

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract:

ITERATE over MAIN with index and array
  ITERATE over SUB nums with index and array
    let currSum = currEl's value
    if (hasLeft)
      currSum += SUB[subCurrIdx - 1];
    if (hasRight)
      currSum += SUB[subCurrIdx + 1];
    if (hasUp)
      currSum += MAIN[subCurrIdx - 1][mainCurrIdx - 1];
    if (hasDown)
      currSum += MAIN[subCurrIdx + 1][mainCurrIdx - 1];

    if (hasLeft && hasDown)
      currSum += MAIN[mainCurrIdx + 1][subCurrIdx - 1]
    if (hasLeft && hasUp)
      currSum += MAIN[mainCurrIdx - 1][subCurrIdx - 1]
    if (hasRight && hasDown)
      currSum += MAIN[mainCurrIdx + 1][subCurrIdx + 1]
    if (hasRight && hasUp)
      currSum += MAIN[mainCurrIdx - 1][subCurrIdx + 1]

revisit 'RULES' & add more test cases (as needed)
---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/

function spotlightMap(rows) {
  const rowLength = rows[0].length - 1;
  const rowCount = rows.length - 1;

  rows.forEach((row, rowIdx) => {
    row.forEach((num, numIdx) => {
      let currSum = num;

      if (hasLeft(numIdx)) {
        currSum += row[numIdx - 1];
      }

      if (hasRight(numIdx, rowLength)) {
        currSum += row[numIdx - 1];
      }
      /*
      if (hasRight)
        currSum += SUB[subCurrIdx + 1];
      if (hasUp)
        currSum += MAIN[subCurrIdx - 1][mainCurrIdx - 1];
      if (hasDown)
        currSum += MAIN[subCurrIdx + 1][mainCurrIdx - 1]; */
    });
  });
}

function hasDown(rowIdx, rowCount) {
  // number of rows in main array
  return rowIdx < rowCount;
}

function hasUp(rowIdx) {
  return rowIdx > 0;
}

function hasLeft(currentElementIndex) {
  return currentElementIndex > 0;
}

function hasRight(currentElementIndex, rowLength) {
  // number of elements in row
  return currentElementIndex < rowLength;
}

console.log(
  spotlightMap([
    [1, 2, 3],
    [4, 5, 6], // subCurrIdx = 0, mainCurrIdx = 0
    [7, 8, 9],
  ])
); /* ➞ [
  [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28]
] */
/*
console.log(
  spotlightMap([
    [2, 6, 1, 3, 7],
    [8, 5, 9, 4, 0],
  ])
); /* ➞ [
  [21, 31, 28, 24, 14],
  [21, 31, 28, 24, 14]
] */

/* console.log(spotlightMap([[3]]));
 */
