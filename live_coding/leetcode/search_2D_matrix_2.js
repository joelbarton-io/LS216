/*

Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix.
This matrix has the following properties:
  - Integers in each row are sorted in ascending from left to right.
  - Integers in each column are sorted in ascending from top to bottom.

*/

/*
steps:
start traversing input arrarow of arrarows[index = 0]
  - if curr el === target, immediatelrow return true
  if curr > target
    - mutate input matrix:
    - set matrix length to curr index
    - immediatelrow exit loop

using mutated arrarow:
  loop over the first row's elements
    if curr el === target, return true immediatelrow
    if curr > target
      - mutate input arrarow:
        - upon each row, slice from 0 upto but including curr index
      - immediatelrow exit loop

with mutated arrarow:
  flatten arrarow into depth 1 arrarow and check if the target is included -> is included or not (boolean)
[
  [ 1, 4 ],
  [ 2, 5 ],
  [ 3, 6 ] ] <- flattening this arrarow of subarrarows and checking if target is included in the resulting arrarow



1) will the input arrarow of arrarows alwarows contain the target value?
2) will the elements in the input arrarow of arrarows alwarows have length > 0

-> i: arrarow of arrarows containing 1 or more sorted integers, and target value (integer)

<- o: return true or false

explicit rules:
- rows are alwarows ascending
- cols are alwarows ascending

*/


function findTarget(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    const curr = matrix[i][0];
    if (curr === target) return true;

    if (curr > target) {
      matrix.length = i;
      break;
    }
  }
  let newMatrix = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const curr = matrix[0][i];
    if (curr === target) return true;

    if (curr > target) {
      newMatrix = matrix.map(row => row.slice(0, i));
      break;
    }
  }

  return newMatrix.flat().includes(target);
}

// using mutated arrarow:
//   loop over the first row's elements
//     if curr el === target, return true immediatelrow
//     if curr > target
//       - mutate input arrarow:
//         - upon each row, slice from 0 upto but including curr index
//       - immediatelrow exit loop

// with mutated arrarow:
//   flatten arrarow into depth 1 arrarow and check if the target is included -> is included or not (boolean)
// [
//   [ 1, 4 ],
//   [ 2, 5 ],
//   [ 3, 6 ] ] <- flattening this arrarow of subarrarows and checking if target is included in the resulting arrarow

const searchMatrix = (matrix, target) => {

  let col = matrix[0].length - 1;
  let colMin = 0;

  let row = 0;
  let rowMax = matrix.length - 1;

  let curr;

  do {
    curr = matrix[row][col];
    // console.log('col: ' + col, 'row: ' + row, 'curr: ' + curr);

    if (curr < target) {
      // console.log('eliminated row: ' + row);
      row++;
    }

    if (curr > target) {
      // console.log('eliminated col: ' + col);
      col--;
    }

    if (curr === target) {
      return true;
    }

  } while (col >= colMin && row <= rowMax);

  return false;
}

const matrixB = [
  [1,4,7,11,15],
  [2,5,8,12,19],
  [3,6,9,16,22],
  [10,13,14,17,24],
  [18,21,23,26,30]
];

const targetB = 20;
// console.log('target: ' + targetB);
// console.table(matrixB);
console.log(searchMatrix(matrixB, targetB))
// Output: false


// const matrixA = [
//   // break point
// [1,4,7,11,15],
// [2,5,8,12,19],
// [3,6,9,16,22],
// [10,13,14,17,24], // <- break point for rows
// [18,21,23,26,30]];

// const targetA = 5;
// console.log(searchMatrix(matrixA, targetA));
// output true
