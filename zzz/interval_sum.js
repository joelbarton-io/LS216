const breaksCode = [
  [1, 4],
  [7, 10],
  [3, 5]
]
const works = [[3, 5], [1, 4], [7, 10]]; // 7
const intervals3 = [[0, 20], [-100000000, 10], [30, 40]];
const intervals4 = [
  [-18, -13], [15, 19],
  [-8, -4], [-8, -6],
  [-17, -8], [-1, 8],
  [16, 23], [-1, 3],
  [-5, 0], [6, 9]
];

const intervals5 = [[1, 5], [1, 5]]; // 4
const sev = [[9, 12], [7, 10], [5, 8], [3, 6], [1, 4]]; // 11

const other = [
  [-12, -6],
  [2, 4],
  [19, 24],
  [20, 27],
  [12, 17],
  [-18, -16],
  [-12, -7]
]; // 23

const other2 = [[1, 20], [2, 19], [5, 15], [8, 12]]; // 19

console.log(sumIntervals([[-3, 3]]));

function sortIntervals(intervals) {
  const copy = []; // to avoid mutating input
  intervals.forEach(interval => copy.push(interval.slice()));
  return copy.sort((a, b) => a[0] - b[0]);
}


function findTotal(stack) {
  let result = 0;

  stack.forEach(interval => {
    let start = interval[0];
    let end = interval[1];
    let diff = end - start;
    result += diff;
  })

  return result;
}

function sumIntervals(intervals) {
  if (intervals.length < 2) return findTotal(intervals);

  const copy = sortIntervals(intervals).reverse();
  const stack = [];
  stack.push(copy.pop()); // set up stack

  while (copy.length) {

    const lastInStack = stack[stack.length - 1];
    const lastInCopy = copy[copy.length - 1];

    if (lastInStack[1] >= lastInCopy[0]) { // overlap condition 1
      if (lastInStack[1] < lastInCopy[1]) { // overlap condition 2
        lastInStack[1] = lastInCopy[1];
      }

      copy.pop();
    } else {
      stack.push(copy.pop());
    }
  }

  const result = findTotal(stack);
  return result;
}

/*
WORKS:

starting with an empty stack

while `sorted` is non-empty:

  - compare `stack`'s last element's second element to first element in current of `sorted`
    - if stack.last.last is >= copy.curr.first (overlap):
      - mutate stack.last (change .last to sorted.last) and discard sorted current
    - if no overlap is detected, pop off curr and push into `stack`
    - continue

*/


/* function sumIntervals2(intervals) {
  const sorted = sortIntervals(intervals);

  let pointer = 0;
  let small   = 0;
  let big     = 1;

  while (pointer < sorted.length - 1) {
    let leftSmall  = sorted[pointer][small];
    let leftBig    = sorted[pointer][big];
    let rightSmall = sorted[pointer + 1][small];
    let rightBig   = sorted[pointer + 1][big];

    if (leftBig >= rightSmall) { // overlapping intervals
      sorted.splice(pointer + 1, 1);
      sorted[pointer] = [leftSmall, rightBig];
    } else {
      pointer += 1;
    }
  }
  const result = findTotal(sorted);
  console.log('the result is: ', result);

  return result;
}

 */












/*
function sum(sorted) {
  if (sorted.length < 2) return sorted[1] - sorted[0];

  let left = 0;
  let right = 1;
  let small = 0
  let big = 1;

  // let tempLeft;


  let result = [];
  let newInterval = [];

  while (right < sorted.length) {
    let leftSmall = sorted[left][small];
    let leftBig = sorted[left][big];
    let rightSmall = sorted[right][small];
    let rightBig = sorted[right][big];

    if (leftBig > rightSmall) { // overlap

    }


    if (newInterval.length === 2) {
      // push new interval
      // set new interval to empty array
      // set left to right
      // and increment right by 1
    }


    right += 1;
    console.log('leftSmall: ', leftSmall, 'leftBig: ', leftBig, 'rightSmall: ', rightSmall, 'rightBig: ', rightBig);
  }

  // while (right < sorted.length) {
  //   let leftSmall = sorted[left][0];
  //   let leftBig = sorted[left][1];
  //   let rightSmall = sorted[right][0];
  //   let rightBig = sorted[right][1];


  //   if (leftBig > rightSmall) { // overlap
  //     tempLeft = leftSmall;
  //     right += 1; // left doesn't move
  //     console.log('overlap');
  //     console.log('leftSmall: ', leftSmall, 'leftBig: ', leftBig, 'rightSmall: ', rightSmall, 'rightBig: ', rightBig);
  //     // console.log('tempLeft: ', tempLeft);


  //   } else {
  //     console.log('no overlap');
  //     console.log('leftSmall: ', leftSmall, 'leftBig: ', leftBig, 'rightSmall: ', rightSmall, 'rightBig: ', rightBig);
  //     // console.log('tempLeft: ', tempLeft);

  //     // increment result by interval
  //     if (tempLeft !== undefined) {
  //       result += (sorted[right - 1][1] - tempLeft);
  //       return result;
  //       tempLeft = undefined;
  //     } else {

  //     }


  //     left = right; // left moves
  //     right += 1;
  //   }
  // }



  return sorted;
} */
/*
if smallRight <= bigLeft (this is overlap)
- set tempLeft to smallLeft
- set tempRight to bigRight
- move right pointer by 1

if not:
- calculate the interval (big - small), add this to result value (init 0)

return result
*/

/*

overlap case:
- don't increment pointer

closed interval case:
*/