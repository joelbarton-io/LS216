// Write a function that returns true if there exists a row that is identical to a column in a 2-D matrix, otherwise false.
//
// To illustrate
// [
//   [1, 2, 3, 4],
//   [2, 4, 9, 8],
//   [5, 9, 7, 7],
//   [6, 8, 1, 0]
// ]

// 2nd row + 2nd column are identical: [2, 4, 9, 8]

/*

i:
  - main input always an array but elements not guaranteed to be arrays
  - subarray elements are ALWAYS numbers but can include special numbers like NaN

o: boolean return

req:

- a row or column consists of all elements in said row or column
- rows are left to right
- columns are top to bottom

assumptions

inputarray -> build the columns as natural lists -> join the various rows + columns as strings -> return result


algo:

GUARD for invalid typed elements in input array (strings, {}, null)
GUARD for non-matrixed inputs (an input array whose length !== the length of its subarrays)
  - all subarrays must be of the same length,
  - that length must also be the length of the larger, enclosing array


CREATE new array of empty array elements

Iteration to create (nested iteration) -> produces the COLUMN arrays
ITERATE over array of subarrays
  for EACH element subarray
    ITERATE over curr subarray, with chr el and idx
      EMPTYARRS[idx].PUSH el

ADD all elements from input array into array containing columns

JOIN subarrays into STRING values - ['1234, '3254', ...]
CHECK if any duplicate string values -> use a SET from produced array of strings
COMPARE this set to the array of strings
  if same length,
  NO DUPS so false
  ELSE TRUE
*/

function matrixes(input) {
  if (!input.every(subArr => Array.isArray(subArr))) {
    return 'invalid input';
  }

  if (!input.every(subArr => subArr.length === input.length)) {
    return 'invalid input';
  }

  let columns = [];
  for (let count = 0; count < input.length; count++) {
    columns.push([]);
  }

  input.forEach(subArr => {
    subArr.forEach((num, idx) => {
      columns[idx].push(num);
    })
  });

  const rowsAndColumns = Array(...input, ...columns).map(el => el.join(''));
  const noDups = new Set(rowsAndColumns);
  return noDups.length !== rowsAndColumns.length
}


console.log(matrixes([
  [1, -NaN, 3, 4],
  [NaN, 4, 9, 8],
  [5, 9, 7, 7],
  [6, 8, 1, 0],
])) // true
