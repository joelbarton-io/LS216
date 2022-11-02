/*
Given an array, write a function to calculate it's depth.
Assume that a normal array has a depth of 1.
*/

// console.log(['a', ['b', ['c']]].flat(3));

function depth(arr) {
  if (!Array.isArray(arr)) return null;
  let count = 1


  return count;
}

/*
while
*/
console.log([1, 2, 3, 4].flat(1)); //➞ 1
console.log([1, [2, 3, 4]].flat(1)); //➞ 2
console.log([1, [2, [3, 4]]].flat(1)); //➞ 3
console.log([1, [2, [3, [4]]]].flat(3)); //➞ 4