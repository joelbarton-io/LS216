/*

?:
1) will the arguments always be the right type?
2) will the elements in the array always be positive integers?
3) can the input array be empty?

input: array of integers & a single `target` integer
output: the two elements which sum to `target`



rules of the problem (validate with test-cases):
  - if there are multiple pairs which sum to `target`; choose the one whose second
    value's index is less
  - if no pair is found which sums to `target`, return undefined


identify sub-problems:

- validate input
- capture any two values which sum to target and retain the second val's index
- compare the pairs secondary value's indices, take smallest pair's index

steps:

GUARD against invalid inputs

DECLARE empty array: `sumPairs`

sumToTarget(a,b,target) -> a + b === target

loop over input array with i
  loop again over input array with j
    check if pairs sumToTarget(a, b)
      if they do sum -> get pair and j_index and push into `sumPairs`
    else continue

sort sumToTarget based on the third element (the 2nd val's index)
get minimum.slice(0, 2)

*/

function sumPairs(ints, target) {
  const ERR = "INVALID INPUT";
  const isInt = (num) => Number.isInteger(num);
  const sumToTarget = (first, second) => first + second === target;

  if (!Array.isArray(ints)) return ERR;
  if (ints.some(el => typeof el !== 'number')) return ERR;
  if (ints.some(el => !isInt(el))) return ERR;

  const sumPairs = [];

  for (let i = 0; i < ints.length; i++) {
    for (let j = i + 1; j < ints.length; j++) {
      const first = ints[i];
      const second = ints[j];

      if (sumToTarget(first, second)) {
        sumPairs.push([first, second, j]);
      }
    }
  }

  if (sumPairs.length === 0) return undefined;

  return sumPairs.sort(([,,a], [,,b]) => a - b)[0].slice(0, 2);
}

/* function sumPairs(ints, target) {
  const ERR = "INVALID INPUT";
  const isInt = (num) => Number.isInteger(num);
  const sumToTarget = (first, second) => first + second === target;

  if (!Array.isArray(ints)) return ERR;
  if (ints.some(el => typeof el !== 'number')) return ERR;
  if (ints.some(el => !isInt(el))) return ERR;

  const sumPairs = [];



  if (sumPairs.length === 0) return undefined;

  return sumPairs.sort(([,,a], [,,b]) => a - b)[0].slice(0, 2);
} */
console.log(sumPairs([0, 2, 5, 3], 5)) // [0, 5]
console.log(sumPairs([-1, 3, 6, 2], 5)) // [-1, 6]
console.log(sumPairs([0, 2, 5, 7], 5)) // [0, 5]
console.log(sumPairs([0, 1, 7, 3], 5)) // no pairs
console.log(sumPairs([1, 1, 1, 1, 1], 2)) // [1, 1]
console.log(sumPairs([], 5)) // no pairs */

/*
console.log(sumPairs([0, 2.1, 5, 3], 5)) // ERROR
console.log(sumPairs({}, 5)) // ERROR
console.log(sumPairs(5)) // ERROR
console.log(sumPairs()) // ERROR
console.log(sumPairs(['1', '2'], 3)) // ERROR */

