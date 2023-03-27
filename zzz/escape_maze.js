// Return the array of movements to execute to get out of the maze

/*
' ' is some walkable space
'#' is a thorn bush (you can't pass through)
'^', '<', 'v' or '>' is your sleeping body facing respectively the top, left, bottom or right side of the map.
*/

function findOrigin(maze) { // returns x, y coordinates of starting position
  let row = 0;

  while (true) {
    let idx = maze[row].search(/[<^>v]/g);
    if (idx != -1) return [idx, row];
    row++;
  }
}
function findExit(grid) {
  /*
  check top, right, bottom, left for an empty space ' '
        grid[y][x]

  top:  grid[0][FIND]
  rig:  grid[FIND][grid[0].length - 1]
  bot:  grid[grid.length - 1][FIND]
  lef:  grid[FIND][0]

  */

  let top = grid[0]; // find x index
  let bot = grid[grid.length - 1];
  let left = grid.map(row => row[0]);
  let right = grid.map(row => row.slice(-1)[0]);

  let y;
  let x;

  if (top.includes(' ')) {
    y = 0;
    x = top.indexOf(' ');
  } else if (right.includes(' ')) {
    y = right.indexOf(' ');
    x = grid[0].length - 1;
  } else if (bot.includes(' ')) {
    y = grid.length - 1;
    x = bot.indexOf(' ');
  } else if (left.includes(' ')) {
    y = left.indexOf(' ');
    x = 0;
  }

  return [x, y];
}
function initialDirection(chr) {
  if (chr == '^') return 'N';
  if (chr == '>') return 'E';
  if (chr == 'v') return 'S';
  if (chr == '<') return 'W';
}
function escape(maze) {
  const grid = maze.map(str => str.split(''));

  let [x, y] = findOriginff(maze);
  let currDir = initialDirection(grid[y][x]);
  let [xEx, yEx] = findExit(grid);


  while (x != xEx && y != yEx) {

    const nextDir = findNextMove(x, y, grid);
    changeDirection(currDir, nextDir);
    console.log(nextDir);
    break;
    // compare curr and next directions and make change to direction
  }
}
function findNextMove(x, y, grid) { // return direction to move next

}
function changeDirection(curr, next) { // should return direction change string


}
const simple = [
  '##########',
  '#        #',
  '#  ##### #',
  '#  #   # #',
  '#  #^# # #',
  '#  ### # #',
  '#      # #',
  '######## #'
  //         x
]; // [F, R, F, R, F, F, F, R, F, F, F, F, R, F, F, F, F, F, R, F, F, F, F, F, F, F, R, F, F, F, F, F, F]

/*
'F' move one step forward
'L' turn left
'R' turn right
'B' turn back
*/
const hard = [
  "#########################################",
  "#<    #       #     #         # #   #   #",
  "##### # ##### # ### # # ##### # # # ### #",
  "# #   #   #   #   #   # #     #   #   # #",
  "# # # ### # ########### # ####### # # # #",
  "#   #   # # #       #   # #   #   # #   #",
  "####### # # # ##### # ### # # # #########",
  "#   #     # #     # #   #   # # #       #",
  "# # ####### ### ### ##### ### # ####### #",
  "# #             #   #     #   #   #   # #",
  "# ############### ### ##### ##### # # # #",
  "#               #     #   #   #   # #   #",
  "##### ####### # ######### # # # ### #####",
  "#   # #   #   # #         # # # #       #",
  "# # # # # # ### # # ####### # # ### ### #",
  "# # #   # # #     #   #     # #     #   #",
  "# # ##### # # ####### # ##### ####### # #",
  "# #     # # # #   # # #     # #       # #",
  "# ##### ### # ### # # ##### # # ### ### #",
  "#     #     #     #   #     #   #   #    ",
  "#########################################"
]

console.log(
  escape(
    simple
  )
);

/* console.log(
  escape(
    hard
  )
); */

let maze = [
  ['#', '#', '#', '#', '#', '#', '#', '#', '#', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '#'],
  ['#', ' ', ' ', '#', '#', '#', '#', '#', ' ', '#'],
  ['#', ' ', ' ', '#', ' ', ' ', ' ', '#', ' ', '#'],
  ['#', ' ', ' ', '#', '^', '#', ' ', '#', ' ', '#'],
  ['#', ' ', ' ', '#', '#', '#', ' ', '#', ' ', '#'],
  ['#', ' ', ' ', ' ', ' ', ' ', ' ', '#', ' ', '#'],
  ['#', '#', '#', '#', '#', '#', '#', '#', ' ', '#']
]