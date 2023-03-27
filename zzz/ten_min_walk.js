function isValidWalk(directions) {
  if (directions.length !== 10) return false;
  // starting position is [0, 0] (this is arbitrary)

  // ending position MUST match starting position otherwise it's false

  /*
    (x, y)

    n -> y + 1
    s -> y - 1
    e -> x + 1
    w -> x - 1

  traverse array of directions
  based on curr val, +/- either the x or the y value of the current position

  if there are 10 'blocks' walked and the current position isn't === the the starting position, return false since you're out of time
  if by the end of the 'walk' the starting position's x/y values are == to the ending positions x/y values, return true, otherwise false

  */
  let origin = 0;
  let x = 0;
  let y = 0;
  let block = 0;

  while (directions[block] && block < 10) {
    const dir = directions[block];

    if (dir === 'n') y += 1;
    if (dir === 's') y -= 1;
    if (dir === 'e') x += 1;
    if (dir === 'w') x -= 1;

    block++;
  }

  if (block !== 10) return false;
  return (x === origin && y === origin);
}

// must reach minimum amount of time

console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

const arr = [
  'w', 'e', 'w', 'e',
  'w', 'e', 'w', 'e',
  'w', 'e', 'w', 'e'
]
console.log(isValidWalk(arr));