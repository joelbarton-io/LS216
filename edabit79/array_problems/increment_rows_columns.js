/*

?:


in: rows count, column count, array of incrementation info
out: the matrix with the appropriate data


rules:
  - 1 row operation applies to the whole row, incrementing each element by 1
  - 1 col operation applies to the whole col, incrementing each element by 1

mental model:


abstract:

CREATE matrix array of arrays

TRAVERSE list of incrementation operations

  given last chr, operate upon either the specified row or column (if exists)


code:
*/

function makeMatrix(rows, cols) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(0);
    }
    matrix.push(row);
  }
  return matrix;
}

function final(rows, cols, operations) {
  let matrix = makeMatrix(rows, cols);

  operations.forEach(op => {
    const oper = op[op.length - 1];
    const num  = op.slice(0, op.length - 1);

    if (oper === 'r') {
      const mapped = matrix[num].map(el => el + 1);
      matrix.splice(num, 1, mapped);
    }

    if (oper === 'c') {
      matrix.map(row => {
        row[num]++;
        return row;
      });
    }
  });

  return matrix;
}

console.log(final(3, 3, ["2r", "2c", "1r", "0c"]));

/*[
  [1, 0, 1],
  [2, 1, 2],
  [2, 1, 2]
]*/