/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

input: array of subarrays which contain either `#` or `-` elements
output: a new array of subarrays that represents the 'end result' of turning on gravity

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ...""...

roadmap:

ARRAY of subarrays
ARRAY which represents the 'columns': all values across the subarrays of a particular index
ARRAY of sorted subarrays (.sort().reverse())
RECREATE initial array of subarrays (array of columns -> array of rows)
ARRAY of subarrays

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract algo :
CREATE an empty array of subarrays of the length of the inputArr[0]

TRAVERSE input array
  TRAVERSE each subarray with index (produces the array of columns (which are arrays))
    PUSH curr el into the arrayOfSubArrays[idx]

TRAVERSE the array of columns with MAP
  transform the curr array with .sort and .reverse

TRAVERSE arrayOfColumns
  TRAVERSE subarray el with index (produces the array of rows)
    push curr el into the new Array of subarrays

RETURN THE previous operation

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

[
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]

columns =
[  top       bottom
    [-, -, -, -],
    [-, -, -, #],
    [-, -, -, #],
    [-, -, -, -]
  ]
implement with code

---------------------------------------------------------------
*/

function switchGravityOn(matrix) {
  let columnHeight = matrix[0].length;
  const arrayOfColumnArrays = [];
  for (let i = 0; i < columnHeight; i++) {
    arrayOfColumnArrays.push([]);
  }

  matrix.forEach(row => {
    row.forEach((el, idx) => {
      arrayOfColumnArrays[idx].push(el);
    });
  });

  const gravityApplied = arrayOfColumnArrays.map(column => column.sort().reverse());
  const arrayOfRowArrays = [];
  let rowLength = gravityApplied[0].length;

  for (let i = 0; i < rowLength; i++) {
    arrayOfRowArrays.push([]);
  }

  gravityApplied.forEach(column => {
    column.forEach((el, idx) => {
      arrayOfRowArrays[idx].push(el);
    })
  })

  return arrayOfRowArrays;
}

console.log(switchGravityOn(
[
  ["-", "#", "#", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"]
]
));

/* [
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "-", "-", "-"],
  ["-", "#", "#", "-"]
]
 */
console.log(switchGravityOn([
  ["-", "#", "#", "-"],
  ["-", "-", "#", "-"],
  ["-", "-", "-", "-"],
]))
/*
[
  ["-", "-", "-", "-"],
  ["-", "-", "#", "-"],
  ["-", "#", "#", "-"]
] */

console.log(switchGravityOn([
  ["-", "#", "#", "#", "#", "-"],
  ["#", "-", "-", "#", "#", "-"],
  ["-", "#", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"]
]))

/* [
  ["-", "-", "-", "-", "-", "-"],
  ["-", "-", "-", "-", "-", "-"],
  ["-", "#", "-", "#", "#", "-"],
  ["#", "#", "#", "#", "#", "-"]
] */

// ~> 26:51
