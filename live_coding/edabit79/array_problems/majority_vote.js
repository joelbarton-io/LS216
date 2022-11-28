/*
Create a function that returns the majority vote in an array. A majority vote is an element that
occurs > N/2 times in an array (where N is the length of the array).

Examples
majorityVote(["A", "A", "B"]) ➞ "A"

majorityVote(["A", "A", "A", "B", "C", "A"]) ➞ "A"

majorityVote(["A", "B", "B", "A", "C", "C"]) ➞ null

*/

/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

Q:
1. will the elements always be letters?  No, they can be any string chr.
2. will they always be single characters?  YES elements are always of length 1
3. does case matter ('a' ?== 'A')? NO, case does not matter, so 'a' === 'A'


input: array of single string characters, if array is empty -> return null
output: null or strict majority chr

RULES:
  - The frequency of the majority element must be strictly greater than 1/2
  - If there is no majority element, return null
  - If the array is empty, return null
  - (all strings are valid!)
  - case doesn't matter! -> but output should always be a uppercased letter
---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

mental model:
- create a dictionary that correlates string chr with frequency
- calculate the max frequency, check to see that there are no ties for first

- check if the max / total count of elements is > 50%



---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract:

GUARD for wrong data type
GUARD for empty array
GUARD for wrong element types

ensure all letters are uppercase in the array (map & reassignment of input var)

DECLARE dict
TRAVERSE input array with for loop
  POPULATE dict with letter property and count

TRANSFORM dict -> array of arrays
  GET MAX with sort

with array of arrays...
  filter all subarrays whose last value is less than the max

if this filtered array's length is > 1
  then we know we have a tie for first, so return null

otherwise
  calculate if the frequency of the most common chr is strictly greater fifty percent



revisit 'RULES' & add more test cases (as needed)
---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
["A", "B", "C", "D", "E", "E"]

{
  A: 1,
  B: 1,
  C: 1,
  D: 1,
  E: 2,
}
[ [A, 1],
  [B, 1],
  [C, 1],
  [D, 1],
  [E, 2]
]



GUARD for wrong data type
GUARD for empty array
GUARD for wrong element types

ensure all letters are uppercase in the array (map & reassignment of input var)

DECLARE dict
TRAVERSE input array with for loop
  POPULATE dict with letter property and count

TRANSFORM dict -> array of arrays
  GET MAX with sort

with array of arrays...
  filter all subarrays whose last value is less than the max

if this filtered array's length is > 1
  then we know we have a tie for first, so return null

otherwise
  calculate if the frequency of the most common chr is strictly greater fifty percent


*/

function majorityVote(input) {
  const FIFTY_PERCENT = 0.5000;
  const INPUT_LENGTH = input.length;

  if (!Array.isArray(input) ||
         !input.every(el => typeof el === 'string') ||
         !input.every(el => el.length === 1)
         ) {
    return 'invalid input!';
  }

  if (input.length === 0) return null;

  input = input.map(el => el.toUpperCase());
  const letterCounts = {};

  input.forEach(chr => {
    if (letterCounts[chr]) {
      letterCounts[chr]++;
    } else {
      letterCounts[chr] = 1;
    }
  });

  const asArrays = Object.entries(letterCounts);
  const maxOccurenceCount = asArrays.sort(([, a], [, b]) => b - a)[0][1];
  const maxOccurenceChr = asArrays.sort(([, a], [, b]) => b - a)[0][0];

  if (asArrays.filter(([, count]) => count === maxOccurenceCount).length !== 1) return null; // tie

  const frequency = maxOccurenceCount / INPUT_LENGTH;

  if (frequency > FIFTY_PERCENT) {
    return maxOccurenceChr;
  } else {
    return null;
  }

}


console.log(majorityVote(["A", "A", "B"])) // ➞ "A"
console.log(majorityVote(["A", "a", "B"])) // ➞ "A"
console.log(majorityVote(["A", "A", "A", "B", "C", "A"])) // ➞ "A"
console.log(majorityVote(["a", "B", "B", "A", "C", "C"])) // ➞ null
console.log(majorityVote(["A", "B", "C", "D", "E", "E"])) // ➞ null (only 33% of total, not a majority)
console.log(majorityVote(["A", "B", "C", "C", "E", "E"])) // ➞ null (tied at 2 a piece)
console.log(majorityVote([])) // ➞ null
console.log(majorityVote(['A'])) // ➞ 'A'
console.log(majorityVote(['A', 'AB', 'C']))
