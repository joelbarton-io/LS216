function solve(moves, x, y) {
  const counts = {
    NORTH: 0,
    SOUTH: 0,
    EAST: 0,
    WEST: 0,
  };

  moves.forEach((move) => {
    counts[move] += 1;
  });

  const currY =  counts.NORTH - counts.SOUTH;
  const currX = counts.EAST - counts.WEST

  return currY === y && currX === x;
}

console.log(solve(["NORTH", "EAST"], 1, 1))