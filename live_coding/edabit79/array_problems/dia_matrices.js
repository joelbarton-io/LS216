/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------
Q:
1. will n always be a normal number (e.g. not NaN, Infinity...) -> No
2. will n always be a number? -> not guaranteed, must guard
3. will n always be a positive integers? -> YES
3. will there always be the appropriate # of arguments provided? -> No

input: integer & a starting 'corner' string
output: array of arrays

RULES:
  - number of subarrays === n &&
    number of elements in each subarray === n
  - the 'starting corner' always starts with 0 and goes upto (non-inclusive of) n

edge cases:
- wrong input type
- right type, wrong value (Infinity)


---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

mental model:

- Need an array of n subarrays to fill with numbers

roadmap:
iterate from 0 upto and including (n-1)       (first number) (FOR)

iterate from first number
increment value until the subarray length is == n (second number) (WHILE)

[
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]
---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract :

CREATE array of length n filled with empty subarrays

starting from 0 -> including (n - 1) FOR (i)
  DECLARE secondCounter = i
  WHILE mainArr[i].length !== n...
    push secondCounter into curr subarray

    INCREMENT secondCounter by 1

NOW we have an array of subarrays
  using the value of dir, organize the array of subarrays appropriately
  if UR,  reverse the subarrays
  if UL, do nothing
  if LR, reverse main array & subarrays
  if LL, reverse the main array of subs

return array of subarrays having been processed from prev step

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------
i: 2
[
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]

j:2
is subArr.length === 3



---------------------------------------------------------------
CREATE array of length n filled with empty subarrays

starting from 0 -> including (n - 1) FOR (i)
  DECLARE secondCounter = i
  WHILE mainArr[i].length !== n...
    push secondCounter into curr subarray

    INCREMENT secondCounter by 1

NOW we have an array of subarrays
  using the value of dir, organize the array of subarrays appropriately
  if UR,  reverse the subarrays
  if UL, do nothing
  if LR, reverse main array & subarrays
  if LL, reverse the main array of subs

return array of subarrays having been processed from prev step
*/

function diagonalize(n, dir = 'ul') {

  if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) return 'invalid n value';
  if (typeof dir !== 'string' || dir === '' || dir === undefined) return 'invalid direction';

  const main = populateSubarrays(n);
  const reverseSubarrays = (subArr) => subArr.reverse();

  if (dir === 'ul') return main;
  if (dir === 'ur') return main.map(reverseSubarrays);
  if (dir === 'll') return main.reverse();
  if (dir === 'lr') return main.reverse().map(reverseSubarrays);
}

function populateSubarrays(n) {
  const main = [];
  for (let i = 0; i < n; i++) {
    main.push([]);
  }

  for (let i = 0; i < n; i++) {
    let count = i;

    while (main[i].length !== n) {
      main[i].push(count);
      count++;
    }
  }

  return main;
}

console.log(diagonalize(6, 'ul'));
console.log(diagonalize(6, 'ur'));
console.log(diagonalize(6, 'll'));
console.log(diagonalize(6, 'lr'));
console.log(diagonalize(6));
console.log(diagonalize(NaN, 'll'));
console.log(diagonalize([]));
console.log(diagonalize(6, ''));


/* diagonalize(3, "ur") ➞ [ // this is the default case
  [0, 1, 2],
  [1, 2, 3],
  [2, 3, 4]
]

diagonalize(4, "ur") ➞ [ // just need to reverse the subarrays
  [3, 2, 1, 0],
  [4, 3, 2, 1],
  [5, 4, 3, 2],
  [6, 5, 4, 3]
]

diagonalize(3, "ll") ➞ [ // just need to reverse the main array of subs
  [2, 3, 4],
  [1, 2, 3],
  [0, 1, 2]
]

diagonalize(5, "lr") ➞ [ // need to reverse main array & subarrays
  [8, 7, 6, 5, 4],
  [7, 6, 5, 4, 3],
  [6, 5, 4, 3, 2],
  [5, 4, 3, 2, 1],
  [4, 3, 2, 1, 0]
] */