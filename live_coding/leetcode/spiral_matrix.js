/*
"spiral order" ->

- start at top left corner of matrix (matrix[0][0])
- move right across top row until the next index is `undefined`
- once undefined is encountered, begin descending curr column until the next element is undefined
- once undefined is encountered, traverse left to right until next element is undefined
- once undefined is encountered, ascending curr column until next element is undefined OR the next element's coor pair has already been visited


rules:
- there will always be 1 or more rows
- there will never be more than 10 columns (row length)
- elements in each row will never be greater than 100 or less than -100

need some way to track previously occupied coordinates (maybe like tuple or two arr)

steps:
guard against empty matrix (matrix length === 1 or 0 && matrix[0].length === 0)

check if either the matrix length === 1 or the firstRow.length === 1  (*)

start with some initial coordinates
discarded rows, columns array

x = 0
y = 0
next = matrix[y][x]
  if next is integer:

    increment x by 1

  if next is undefined:
    if matrix[y + 1][x], next is undefined:
      then we're done and can exit loop and return result array
    if next is integer:
      turn -> stop incrementing x and start incrementing y
        increment y by 1
      if next is undefined
        need to start decrementing x

*/

const spiralOrder = function(matrix) {
  if (matrix.length === 1 && matrix[0].length === 0) return [];

  const total = matrix.length * matrix[0].length;
  const visited = [];
  const result = [];

  let x = 0;
  let y = 0;

  let right = true;
  let down = false;
  let left = false;
  let up = false;

  // visited.push(`${x},${y}`);
  let next = matrix[y][x];

  while (result.length < total) {

    while (right) {
      result.push(next)
      x++;
      next = matrix[y][x];

      if (next !== undefined) {
        right = false;
        down = true;
        break;
      }
    }
    result.push('hi')

    // while (down) {
    //   if (next !== undefined) {
    //     down = false;
    //     left = true;
    //     break;
    //   }
    // }

    // while (left) {
    //   if (next !== undefined) {
    //     left = false;
    //     up = true;
    //     break;
    //   }
    // }

    // while (up) {
    //   if (next !== undefined) {
    //     up = false;
    //     right = true;
    //     break;
    //   }

    // }

    // if (right && next !== undefined) { // has something to the right?
    //   // increment x
    //   // push el into `result` & coordinates into `visited`
    //   // reassign next
    // } else if (next === undefined && right) { // right top corner boundary
    //   up = false;
    //   // increment y
    //   // push el into `result` & coordinates into `visited`
    // }
  }

  // while (true) {
  //   let next = matrix[y][x];


  //   if (next !== undefined) {
  //     result.push(next);
  //     visited.push(`${x},${y}`)
  //     x++;
  //   } else {
  //     if (direction === 'west') {
  //       direction = 'south';
  //       next = matrix[y + 1][x - 1];
  //       if (next !== undefined) {

  //       }
  //     }
  return result;
};


// const matrixF = [[]]
// error message
const matrixA = [[1,2,3],[4,5,6],[7,8,9]]
//[1,2,3,6,9,8,7,4,5]
const matrixB = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// [1,2,3,4,8,12,11,10,9,5,6,7]
const matrixC = [[1,2],[3, 4]]
// [1, 2, 4, 3]
const matrixD = [[1],[2],[3],[4]]
// 1, 2, 3, 4
const matrixE = [[1, 2, 3, 4]]
// 1, 2, 3, 4


console.log(spiralOrder(matrixA));