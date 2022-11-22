/*
## INPUT:
  - array itself is of length 1 or more
  - +/- integer elements

## OUTPUT:
## DATA FLOW:
  - Array -> Map -> Entries Array -> Array
## RULES:
  - k will always be between 1 and the length of `nums`
  - It is guaranteed that the answer is unique.

    - only one right answer, no situations where there is a tie for some
## EDGE CASES:
nums = [1,1,1,2,2,3,3], k = 2 -> [1, 2, 3] // invalid test case
nums = [1, 1, 1, 1, 1], k = 5 -> [1, 1, 1, 1, 1]
nums = [1,1,1,2,2,3,3,4], k = 3 -> [1, 2, 3]

## SUMMARY:

count the occurences of each integer in `nums` and return the largest `k` occurences

## STEPS:
GUARD for `nums` length 1: return `nums`
CREATE object `occurences`
TRAVERSE input array of integers (reduce)
  build out occurences object based on the number of a specific integer
                        - octal numbers conversion issues?
TRANSFORM obj into array of arrays and sort in descending order by each element's el at index 1 (entries, sort)

return the first k elements (for)

[1,1,1,2,2,3]

{
  '1' : 3,
  '2' : 2,
  '3' : 1,
} -> [ ['1', 3], ['2',2], ...]
*/

var topKFrequent = function(nums, k) {
  const occurences = nums.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});

  let entries = Object.entries(occurences).sort(([,a], [, b]) => b - a);

  return entries.filter((_, i) => i < k).map(entry => Number(entry[0]));
};
