function mazeRunner(maze, directions) {
  let [x, y] = locateStart(maze);

  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];

    [x, y] = modPos(x, y, dir);

    if (maze[y] === undefined || maze[y][x] === undefined || maze[y][x] === 1) {
      return 'Dead';
    }

    if (maze[y][x] === 3) {
      return 'Finish';
    }
  }

  return 'Lost';
}


function locateStart(maze) {
  const copy = maze.flat();
  const l = maze.length;
  let posX = copy.indexOf(2);
  let posY = 0;

  while (posX >= l) {
    posX -= l;
    posY++;
  }

  return [posX, posY];
}

function modPos(x, y, dir) { // returns a tuple array with updated coordinates following dir
  if (dir === 'N') y--;
  if (dir === 'S') y++;
  if (dir === 'E') x++;
  if (dir === 'W') x--;

  return [x, y];
}

/*
  avoid hitting walls ('1') or going outside the range (dead)

  if left in maze, return lost

  if reached finish, return Finish


  1. find starting coordinates ('2')
  2. loop through directions array (incrementing by 1)

    2.5 modify position values ([x, y])

    3. if position is either undefined or 1, return dead

    4. if reached finish, return early ('Finish')

  5. no more moves ('Lost')

*/