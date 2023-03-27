/*
INPUT:
  1. array of arrays of strings
  2. initial position (tuple of integers)
  3. move set (right, left, up, down) as strings

OUTPUT:
  - array of strings
  - list of 'moves' which contain the chr's name

DATA FLOW:
REQUIREMENTS:
  - top left is (0, 0)
  - horizontal circularity is valid
  - vertical circularity is invalid

EDGE CASES:
  - any edge movements must be considered wrt circular moves
    - either rotate to other side or stay in the same place
  - initial position doesn't factor into return array

SUMMARY:
  - basically we are modifying a coordinates based on the current move string value (r/l/u/d)
  - need max and min indices for array horizontal edges
  - need max and min indices for array vertical edges

STEPS:

TRAVERSE elements in `moves` array

  check if current move is valid:

  for all left/right moves:
    if current x-axis value exceeds max x-axis value: x-axis value -= max
    if current x-axis value is lessthan min x-axis value: x-axis value += max
    otherwise: just increment or decrement x-axis value by 1

  for all up/down moves:
    if out of bounds: dont modify current cursor position
    otherwise, just increment or decrement y-axis value by 1

  update coordinate values based on the current 'move'
  using updated coordinates, push the current cursor position value (a string) into result array


*/
function streetFighterSelection(fighters, position, moves) {
  const [xMax, xMin] = [fighters[0].length - 1, 0];
  const [yMax, yMin] = [fighters.length - 1, 0];
  const cursorPositions = [];

  moves.forEach(move => {
    let y = position[0];
    let x = position[1];

    if (move == 'up') y -= 1;
    if (move == 'down') y += 1;
    if (move == 'right') x += 1;
    if (move == 'left') x -= 1;

    if (x > xMax) x = xMin;
    if (x < xMin) x = xMax;
    if (y > yMax) y = y - 1;
    if (y < yMin) y = y + 1;

    const currentChampion = fighters[y][x];
    position = [y, x];
    cursorPositions.push(currentChampion);
  });

  return cursorPositions;
}

let fighters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
]
let initial_position = [ 1, 3 ]

let moves = [
  'up',    'up',    'left',
  'left',  'left',  'down',
  'down',  'right', 'right',
  'left',  'down',  'down',
  'up',    'left',  'down',
  'up',    'up',    'up',
  'right', 'left',  'up',
  'up',    'left'
]

console.log(streetFighterSelection(fighters, initial_position, moves))

// expected [ 'Chun Li', 'E.Honda', 'Ryu', 'Vega', 'Balrog', 'Sagat', 'Sagat', 'M.Bison', 'Ken', 'M.Bison', 'M.Bison', 'M.Bison', 'Vega', 'Balrog', 'Sagat', 'Balrog', 'Balrog', 'Balrog', 'Vega', 'Balrog', 'Balrog', 'Balrog', 'Guile' ]
// to deeply equal [ 'Guile', 'Guile', 'Blanka', 'E.Honda', 'Ryu', 'Ken', 'Ken', 'Chun Li', 'Zangief', 'Chun Li', 'Chun Li', 'Chun Li', 'E.Honda', 'Ryu', 'Ken', 'Ryu', 'Ryu', 'Ryu', 'E.Honda', 'Ryu', 'Ryu', 'Ryu', 'Vega' ]