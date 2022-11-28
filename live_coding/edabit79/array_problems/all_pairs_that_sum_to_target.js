/*
CRUX: I didn't realize that if the input had duplicates integers, they would


Create a function that returns all pairs of numbers in an array that sum to a target.

Sort the pairs in ascending order with respect to the smaller number, then order each
pair in this order: [smaller, larger].

 */
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------
Q:
1. Will the input always be an array? Yes
2. Will the array elements always be positive numbers? No
3. Will the elements ever contain any special number types? No
4. will the elements always be integers? (no decimals, no non-base 10 numbers) Yes, always integers



input:
  - always an array of integer values (+/-);
  - target will always be an integer value;

output:

RULES:
  - if no pairs sum to target, return empty array
  - individual numbers can only be used once, once used they're out of the pool of possible values

edge case:
---------------------------------------------------------------
*/
/* outlining (validate assumptions, attempt to generalize logic)
---------------------------------------------------------------

mental model:

generate a list of the various pairs that sum to target

sort the individual pairs so the smaller number is first

sort the array of pairs in ascending order based on the first number in the various pairs

ds roadmap:
<- Array of integers, target integer

(...)

-> array of pairArrays

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract:

perform nested interation over the elements
  take the pairs and check to see if their sum is === target ;
  take pairs and push into 'leftOvers' array;
  take pairs and push as an array into result array;

revisit 'RULES' & add more test cases (as needed)
---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/

function allPairs(numbers, target) {
  const pairs = [];
  const leftOvers = numbers.slice(0);

  const last = numbers.length;

  for (let i = 0; i < last; i++) {
    for (let j = (i + 1); j < last; j++) {
      const num1 = numbers[i];
      const num2 = numbers[j];
      const sum = num1 + num2;

      if (sum === target && leftOvers.includes(num1) && leftOvers.includes(num2)) {
        pairs.push([num1, num2].sort((a, b) => a - b));
        leftOvers.splice(i, 1, NaN);
        leftOvers.splice(j, 1, NaN);
      }
    }
  }
  return pairs.sort(([a, ], [b, ]) => a - b);
}


console.log(allPairs([2, 4, 5, 3, 10, -3], 7)); // [[2, 5], [3, 4]]
/* console.log(allPairs([5, 3, 9, 2, 1], 3)); // [[1, 2]]
console.log(allPairs([4, 5, 1, 3, 6, 8], 9)); // [[1, 8], [3, 6], [4, 5]]
console.log(allPairs([0, 0, 0, 0], 0)); // [[0, 0], [0, 0]]
console.log(allPairs([1, 1, 1, 1, 1], 2)); // [[1, 1], [1, 1]] */
/*
console.log(allPairs([0, 3, 0, 3], 3)); // [[0, 3], [0, 3]]
console.log(allPairs([0, 3, 0, 3], 0)); // [[0, 0]]
 */
