var longestConsecutive = function (nums) {
  if (nums.length === 0) return 0;

  let min = Infinity;
  let max = -Infinity;
  let size = nums.length;
  const set = new Set();

  for (let i = 0; i < size; i++) {
    const curr = nums[i];
    set.add(curr);
    if (curr < min) min = curr;
    if (curr > max) max = curr;
  }

  let maxSeq = 1;
  let tempSeq = 1;

  for (let i = min; i <= max; i++) {

  }
  
  return maxSeq;
};

// var longestConsecutive = function (nums) {
//   if (nums.length === 0) return 0;

//   let min = Infinity;
//   let max = -Infinity;
//   let size = nums.length;
//   const set = new Set();

//   for (let i = 0; i < size; i++) {
//     const curr = nums[i];
//     set.add(curr);
//     if (curr < min) min = curr;
//     if (curr > max) max = curr;
//   }
//   const uniqueCount = set.size - 1;

//   let maxSeq = 1;
//   let tempSeq = 1;
//   let recognizedCount = 0;

//   for (let i = min; i <= max; i++) {
//     let next = i + 1;

//     if (set.has(next)) {
//       tempSeq++
//       recognizedCount++;
//       // console.log(recognizedCount)
//       if (recognizedCount + 1 === uniqueCount && maxSeq > 1) return maxSeq;
//     } else {
//       tempSeq = 0;
//     }

//     if (tempSeq >= maxSeq) maxSeq = tempSeq;
//   }

//   return maxSeq;
// };


console.log(longestConsecutive([0, 1, 2, 4, 8, 5, 6, 7, 9, 3, 55, 88, 77, 99, 999999999]))
// console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
// console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]));
/*
INPUT:
    - array of integers
    - unsorted
    - length 0 to 10^5
    - very high mag numbers

OUTPUT:
    - integer length

SUMMARY:
    - we want to see what the longest sequence of elements we've arranged in ascending or descending order is

BRAINSTORM:

  first loop:

    - declare min/max variables
    - create a set or map of the elements from the array

  second loop (from min to max (incrementing by 1)):

    - declare max length sequence variable outside of loop + temp seq length variable

    - starting at min, check if min + 1 is in set

      - true: increment temp seq and continue
      - false: set temp seq to 1 and continue
*/
