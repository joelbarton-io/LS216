/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */
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
	if (rows.length === 0) return [];
  if (rows[0].length === 0) return [[]];

  const rowLength = rows[0].length - 1;
  const rowCount = rows.length - 1;
  const main = [];

  rows.forEach((row, rowIdx) => {
    const newRow = [];

    row.forEach((num, numIdx) => {
      let currSum = num;

      if (hasLeft(numIdx)) currSum += row[numIdx - 1];

      if (hasRight(numIdx, rowLength)) currSum += row[numIdx + 1];

      if (hasUp(rowIdx)) currSum += rows[rowIdx - 1][numIdx];

      if (hasDown(rowIdx, rowCount)) currSum += rows[rowIdx + 1][numIdx];

      if (hasLeft(numIdx) && hasUp(rowIdx)) currSum += rows[rowIdx - 1][numIdx - 1];

      if (hasLeft(numIdx) && hasDown(rowIdx, rowCount)) currSum += rows[rowIdx + 1][numIdx - 1];

      if (hasRight(numIdx, rowLength) && hasUp(rowIdx)) currSum += rows[rowIdx - 1][numIdx + 1];

      if (hasRight(numIdx, rowLength) && hasDown(rowIdx, rowCount)) currSum += rows[rowIdx + 1][numIdx + 1];

      newRow.push(currSum);
    });
    main.push(newRow);
  });

  return main;
}

function hasDown(rowIdx, rowCount) {
  // number of rows in main array
  return rowIdx < rowCount;
}

function hasUp(rowIdx) {
  return rowIdx > 0;
}

function hasLeft(numIdx) {
  return numIdx > 0;
}

function hasRight(numIdx, rowLength) {
  // number of elements in the current row
  return numIdx < rowLength;
}

console.log(
  spotlightMap([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

/* [12, 21, 16],
  [27, 45, 33],
  [24, 39, 28] */