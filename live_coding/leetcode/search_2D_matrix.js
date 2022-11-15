/*
Write an efficient algorithm that searches for a value `target` in an m x n integer matrix `matrix`.
This matrix has the following properties:
  - Integers in each row are sorted from left to right.
  - The first integer of each row is greater than the last integer of the previous row.

matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
]

target = 3

Output: true

matrix = [
  [1,3,5,7],
  [10,11,16,20],
  [23,30,34,60]
]

target = 13

Output: false


matrix = [
  []
]
*/

/*
-> i: 'matrix (array of subarrays containing integers), target integer
<- o: boolean

explicit rules:
  - Integers in each row are sorted from left to right in ascending order
  - The first integer of each row is > the last integer of the previous row.

steps:
  [
    [1],
    [2]
  ]

  [
    [1, 2, 3]
  ]

GUARD for an empty matrix
GUARD for single column or row matrix

loop over rows starting at row 1 (matrix[i == 0])
  for each row, we want:
    - first and last elements (first...last)
    - check if the target lies in between the first and last range
      - if between first/last:
        - search that row only
          - if curr row contains target, return true
      - if not, continue to next row

return false
*/

const searchMatrix = (matrix, target) => {

  if (matrix.length === 1 && matrix[0].length === 0) return 'empty matrix!';
  if (matrix.length === 1) return matrix[0].includes(target);
  if (matrix[0].length === 1) return matrix.flat().includes(target);

  const lastIndex = matrix[0].length - 1;
  const firstIndex = 0;
  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];
    const rowMin = row[firstIndex];
    const rowMax = row[lastIndex];

    if (target >= rowMin && target <= rowMax) return row.includes(target);
  }

  return false;
}

// console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 7));

console.log(searchMatrix([[1, 1], [2, 2]], 1));

const singleColumnMatrix = [
  [1],
  [2],
  [4],
  [8]
]

const singleRowMatrix = [
  [1, 2, 3]
]
// const matrix = [
//   [1,3,5,7],
//   [10,11,16,20],
//   [23,30,34,60] // check if this row includes our target
// ]

// const target = 13
// console.log(searchMatrix(matrix, target)) // true



