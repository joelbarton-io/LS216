let grid = [
  ['TL', 1, 0, 'TR'],
  [1, 1, 1, 0],
  [0, 1, 0, 0],
  ['BL', 1, 0, 'BR']
]

console.log(
  grid[0][0],
  grid[0][grid[0].length - 1],
  grid[grid.length - 1][0],
  grid[grid.length - 1][grid[0].length - 1],
)


/**
 * @param {number[][]} grid
 * @return {number}
 */

var islandPerimeter = function (grid) {
  /*
    is there only one island? yes
    no lakes, e.g. no internal water

    if it is land:
      must check all four directions (is this true?)
      only check all four directions for the top row

      if it's on an edge:
        - automatically has at least one 'edge' (we can add that to our total immediately)

      if it's a corner:
        - it automatically has two edges (add two automatically)

    if not land:
      skip to next cell


  */



  let topLeft = grid[0][0];
  let topRight = grid[0][grid[0].length - 1];
  let bottomLeft = grid[grid.length - 1][0];
  let bottomRight = grid[grid.length - 1][grid[0].length - 1];
  let i = 0;
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      const cell = grid[y][x];
      // if (cell === 0) continue; // nothing to count

      let edges = 4;

      if (grid[y + 1] === undefined || grid[y - 1] === undefined) {
        console.log('top/bot edge');
      }
      if (grid[y][x + 1] === undefined || grid[y][x - 1] === undefined) {
        console.log('left/right edge');
      }
      if (grid[y + 1][x + 1] === undefined || grid[y + 1][x - 1] === undefined ||
        grid[y - 1][x + 1] === undefined || grid[y - 1][x - 1] === undefined) {
        console.log('corner');
      } else {
        console.log('interior');
      }


    }
  }
};


console.log(islandPerimeter(grid));



/*    if (y === 0 && x === 0) { // top left
     edges = 2;
   } else if (y === 0 && x === grid[0].length - 1) { // top right
     edges = 2;
   } else if (y === grid.length - 1 && x === 0) { // bot left
     edges = 2;
   } else if (y === grid.length - 1 && x === grid[0].length - 1) { // bot right
     edges = 2;
   } else {
     edges = 3;
   } */