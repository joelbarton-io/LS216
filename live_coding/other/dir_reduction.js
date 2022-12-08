function dirReduc(input) {
  const DIR = {
    NORTH: 'SOUTH',
    EAST: 'WEST',
    SOUTH: 'NORTH',
    WEST: 'EAST',
  };
  /*
  if no next, then break
  if curr <-> next: remove both
  if `i` is > 0: decrement `i` by 1, dont increment `i`
  if curr and next are fine: set curr to next (increment `i`)
  */
  let index = 0;
  while (input[i] !== undefined) {
    let curr = input[index];
    let next = input[index + 1];

    if (DIR[curr] === next) {
      input.splice(i, 2);
      if (index > 0) index--;
    } else {
      index++;
    }
  }

  return input;
}

console.log(dirReduc(
  ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]
));



// ["WEST"]
