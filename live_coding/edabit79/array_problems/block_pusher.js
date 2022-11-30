/*
## REQUIREMENTS:
## EXAMPLES/EDGE CASES:

## INPUT:
## INTERMEDIATE:
## OUTPUT:

## SUMMARY:
## STEPS:
*/
/*

find last index of pusher `>` and number of blocks `#` from index of pusher to end of list
lastPusherIndex = 0
input.slice(lastPusherIndex + 1) -> traverse this array and count the number of `#`
also get length of the 'end chunk'
  -> if diff :(length of chunk - block count ) is < n, set n to difference

*/

// console.table(blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1)); // ['-', '-', '>', '#', '#', '-', '-', '-']
// console.table(blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10));     // ['-', '-', '-', '>', '#', '#', '#']
// console.table(blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2)); // ['-', '-', '>', '-', '>', '#', '#', '-']
//                           //
// console.table(blockPushing(['>', '>', '>', '-'], 3));                     // ['-', '>', '>', '>']
//                           // only moves once because reached end of board

let n = 10;
const board = ['>', '#', '-', '#', '-', '-', '#'];

let lastPusherIndex = board.lastIndexOf('>');
let chunk = board.slice(lastPusherIndex + 1);
let blockCount = chunk.reduce((acc, curr) => {
  if (curr === '#') acc++;
  return acc;
}, 0);
let leng = chunk.length;
let diff = leng - blockCount;
if (diff < n) n = diff;


while (n > 0) {


  n--;
}