function solve(board, word) {
  let verticals = [];
  let count = board[0].length;
  verticals.length = count;
  verticals.fill('');

  for (let i = 0; i < count; i += 1) {
    board.forEach(subArr => {
      if (subArr[i] === word) return true;
      return verticals[i] += subArr[i]
    });
  }

  if (verticals.includes(word)) return true;
  if (board.map(subArr => subArr.join('')).includes(word)) return true;
  return false;
}

let board = [
  ["H", "E", "L", "L", "O"],
  ["A", "B", "C", "D", "E"]
]
let word = "HELLO"

console.log(solve(board, word));
