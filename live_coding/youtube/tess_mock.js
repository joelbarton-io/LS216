/*
question:
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/

/*
?s:


-> i:array of ints and a target value (integer)
  - input array should have at least two elements
  -
<- o: two element array


expl/impl rules (validate with test-cases):



sub-problems:




steps:

GUARD for invalid length input array (length < 2)

CREATE HASH from input array (k - el: [index])

traverse input array values with for
  curr el's value
  if that value exists in our hash
    if that dict[key] includes curr_idx, filter dict[key] and check if empty
      if it is empty, continue with iteration
      otherwise, return element at at zeroth index
      use this value in the returned two element array


  return [curr_idx, index for key]

*/

// function twoSum(input, k) {
//   if (input.length < 2) return null;
//   const dict = makeDict(input, k);

//   for (let i = 0; i < input.length; i++) {
//     const key = input[i];
//     if (dict[key] && dict[key] !== i) return [i, dict[key]];
//   }
// }

// function makeDict(input, k) {
//   return input.reduce((acc, curr, idx) => {
//     const key = k - curr;
//     acc[key] = idx;
//     return acc;
//   }, {});
// }

// function twoSum(input, k) {
//   for (let i = 0; i < input.length; i++) {
//     const curr = input[i];

//     for (let j = 0; j < input.length; j++) {
//       const other = input[j];
//       if (i === j) continue;
//       if (k - curr === other) return [i, j]

//     }
//   }
// }

function twoSum(input, k) {
  const hash_table = new Map();

  for (let i = 0; i < input.length; i++) {
    const complement = k - input[i];
    hash_table.set(complement, i);
  }

  for (let i = 0; i < input.length; i++) {
    let key = input[i];
    if (hash_table.has(key) && hash_table.get(key) !== i) {
      return [hash_table.get(key), i];
    }
  }

  return [];
}

console.log(twoSum([2, 3], 4)); // []
console.log(twoSum([1, 2, 3, 4], 4)); // [0, 2]
console.log(twoSum([1, 2, 4, 3], 4)); // [0, 3]
console.log(twoSum([-1, 2, 3, 4], 1)); // [0, 1]
console.log(twoSum([3, 1, 0, 2,], 2)); // [2, 3]


// {
//   3: 0,
//   2: 1,
//   1: 2,
//   0: 3,
// }

// [1, 2, 3, 4]
// curr : 1

// if this exists: k - curr: 3
//   return curr_idx, hash[curr]




// var twoSum = function(input, k) {
//     if (input.length < 2) return null;
//   const dict = makeDict(input, k);

//   for (let i = 0; i < input.length; i++) {
//     const key = input[i];
//     if (dict[key]) {
//       const filtered = dict[key].filter(idx => idx !== i);
//       if (filtered.length > 0) {
//         return [i, filtered[0]];
//       }
//     }
//   }
// };

// function makeDict(input, k) {
//   const dict = {};

//   for (let i = 0; i < input.length; i++) {
//     const element = input[i];
//     const key = k - element;

//     if (!dict[key]) {
//       dict[key] = [];
//       dict[key].push(i);
//     } else {
//       dict[key].push(i);
//     }
//   }
//   return dict;
// }
