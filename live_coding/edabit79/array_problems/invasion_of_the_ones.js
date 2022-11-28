// const infected = {
//   rows: [0, 1],
//   cols: [0, 1, 2]
// }
function getInfected(matrix) {
  const infected = {
    rows: {},
    cols: {},
  };

  matrix.forEach((row, rowIdx) => {
    row.forEach((el, colIdx) => {
      if (el === 1) {
        infected.rows[rowIdx] = true;
        infected.cols[colIdx] = true;
      }
    });
  });

  return infected;
}

function onesInfection(matrix) {
  const infected = getInfected(matrix);


  matrix.forEach((row, rowIdx) => {
    row.forEach((el, colIdx) => {
      if (infected.rows[rowIdx] || infected.cols[colIdx]) {
        matrix[rowIdx][colIdx] = 1;
      }
    })
  })

  return matrix;

  /*

  in nested loop:
    - if curr row index si included
    or
    - if curr col index is included

      change value to 1

  */
}


/* onesInfection([
  [0, 0, 1],
  [0, 0, 0],
  [0, 0, 0]
])  *//* ➞ [
  [1, 1, 1],
  [0, 0, 1],
  [0, 0, 1]
] */

console.log(onesInfection([
  [1, 0, 1, 0],
  [0, 1, 0, 0],
  [0, 0, 0, 0]
])) /* ➞ [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 0]
] */

/* onesInfection([
  [0, 1, 0, 1],
  [0, 0, 0, 0],
  [0, 1, 0, 0]
])  *//* ➞ [
  [1, 1, 1, 1],
  [0, 1, 0, 1],
  [1, 1, 1, 1]
] */