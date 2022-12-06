function validSolution(board){
  const N = board.length
  for (let i = 0; i < N; i++) {
    const row = board[i];
    const obj = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true,
                  7: true, 8: true, 9: true };

    for (let j = 0;  j < row.length; j++) {
      const el = row[j]
      if (el === 0) return false;
      delete obj[el];
    }
    if (Object.keys(obj).length > 0) return false;
  }
  for (let colIdx = 0; colIdx < N; colIdx++) {
    const obj = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true,
                  7: true, 8: true, 9: true };

    for (let j = 0; j < board.length; j++) {
      const el = board[j][colIdx];
      if (el === 0) return false;
      delete obj[el];
    }

    if (Object.keys(obj).length > 0) return false;
  }

  for (let row = 0; row < N - 2; row += 3) {
    for (let col = 0; col < N - 2; col += 3) {
      const obj = { 1: true, 2: true, 3: true, 4: true, 5: true, 6: true,
        7: true, 8: true, 9: true };

      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          let x = row + i;
          let y = col + j
          let z = board[x][y]

          if (z === 0) return false;
          delete obj[z];
        }
      }
      if (Object.keys(obj).length > 0) return false;
    }
  }

  return true;

// col  row
// 0-2, 0-2
// 3-5, 0-2
// 6-9, 0-2

// 0-2, 3-5
// 3-5, 3-5
// 6-9, 3-5

// 0-2, 6-9
// 3-5, 6-9
// 6-9, 6-9
/*
## PROBLEM:

## RULES:
  - column must contain all values 1 - 9
  - row must contain all values 1 - 9
  - sub boxes must contain all values 1 - 9

## EXAMPLES/EDGE CASES:

## INPUT:
  - 9x9 matrix (2d array)
  - elements can be values 0 - 9

## INTERMEDIATE:
  {
    1: true,
    5: true,
    ...
    9: true,
  }
## OUTPUT: boolean

## SUMMARY:
  - checking a sudoku board to see if its state represents a valid solution

## STEPS:
// TRAVERSE the board of rows (for)
//   for each row:
//     check if currVal in row is 0 -> return false;
//     check that every value between 1 and 9 is present ({})

//   check length of object as array of keys, must be of length 1

// TRAVERSE the board of columns with index `colIdx`
//   using this index:
//     loop through rows surveying values at `colIdx`:
//       check if currVal in row is 0 -> return false;
//       check that every value between 1 and 9 is present ({})

*/


}

console.log(validSolution(
  [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]
));