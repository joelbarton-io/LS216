// Write a function that connects each previous word to the next word by the shared letters. Return the resulting string (removing duplicate characters in the overlap) and the minimum number of shared letters across all pairs of strings.

// "to" and "ops" share "o" (1)
// "ops" and "psy" share "ps" (2)
// "psy" and "syllable" share "sy" (2)
// the minimum overlap is 1

/*
input: array of strings (can be empty) or empty array with no element
output: two element array containing combined strings & min number of shared letters across all pairs

questions/clarifications:

core path rules:
- input is always an array
- output is always a two element array with string and int

mental model:
- need to keep track of number of overlap for each section
- need to build a string from each element of the array by adding them together and removing the overlapping characters

abstract algo :
lastIndex = 2

["oven", "envier", "erase", "serious"]

GUARD against:
  - empty arrays

DECLARE an array overlapCount
(for) TRAVERSE the input array of strings with index (start at index 1)

    HELPER to create subword
      PUSH last element into overlapCount array
      reassign the value at the current in our array to the first element in the returned array


  calculate min value from overlapCount array

  return [arrlastelement, overlapcountmin]

HELPER
  two words (previous, current)

  get the last index of the first chr in (current[0])
  using this index...
    startOfPrevIndex = slice previous word from lastIndex operation

    LENGTH get length of this slice

    if the slicePrev === current.slice(0, PREV INDEX)

      THIS IS AN OVERLAP
      toAppend = splice prev word as array from 0...2 (capture this value)

      append the toAppend value with current (return out this value) and length of slice

      [left chunk + current, length of slice ]
    else
      NOT AN OVERLAP

      return [previous + current, 0]
*/

function helper(prev, curr) { //
  const firstLetter = curr[0];
  const index = prev.lastIndexOf(firstLetter); // doesn't work with duplicates (refactor)
  const overlap = prev.slice(index);
  const leng = overlap.length;

  if (index === -1) return [prev + curr, 0];

  if (overlap === curr.slice(0, leng)) {
    const toAppend = prev.slice(0, index);
    return [toAppend + curr, leng];
  }
}

function join(arr) {
  if (!Array.isArray(arr)) return 'ERROR';
  if (arr.length === 0) return ['', 0];
  if (arr.length === 1) return [arr[0], 0];

  const overlapCount = [];

  for (let idx = 1; idx < arr.length; idx++) {
    const curr = arr[idx];
    const prev = arr[idx - 1];
    const result = helper(prev, curr);

    overlapCount.push(result[1]);
    arr[idx] = result[0];
  }

  return [arr[arr.length -1], Math.min(...overlapCount)]
}

console.log(helper("oven", "envier"))

console.log(join(["oven", "envier", "erase", "serious"])) // ["ovenvieraserious", 2]
console.log(join(["move", "over", "very"])) // ["movery", 3]
console.log(join(["to", "ops", "psy", "syllable"])) // ["topsyllable", 1]
console.log(join(["aaa", "bbb", "ccc", "ddd"])) // ["aaabbbcccddd", 0]
console.log(join(['111  ', '  1222', '222'])) // ['11122222', 1] FAILS THIS CASE
console.log(join(['&&&', '$$$'])) // ['&&&$$$', 0]
console.log(join(['&&&'])) // ['&&&', 0]
console.log(join([])) // ['', 0]
console.log(join(['', '', '', ''])) // ['', 0]

// ~> 55ish (failed a test case for dups)
// can I mutate input?
// case sensitive?
// cleanse input for whitespaces? or take into account?
