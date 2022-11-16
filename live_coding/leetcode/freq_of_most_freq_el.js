/*
The frequency of an element is the number of times it occurs in an array.

You are given an integer array `nums` and an integer `k`. In one operation, you can choose an index of `nums` and increment the element at that index by 1.

Return the maximum possible frequency of an element after performing at most k operations.



Example 1:

Input: nums = [1,2,4], k = 5
Output: 3
Explanation: Increment the first element three times and the second element two times to make nums = [4,4,4].
4 has a frequency of 3.

Example 2:

Input: nums = [1,4,8,13], k = 5
              [ 3,4,5  ]
Output: 2
Explanation: There are multiple optimal solutions:
- Increment the first element three times to make nums = [4,4,8,13]. 4 has a frequency of 2.
- Increment the second element four times to make nums = [1,8,8,13]. 8 has a frequency of 2.
- Increment the third element five times to make nums = [1,4,13,13]. 13 has a frequency of 2.

Example 3:

Input: nums = [3,9,6], k = 2
Output: 1


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105
1 <= k <= 105

*/

/*

INPUT: array of integers and a maxIncrement count `k` (integer)
OUTPUT: the max frequency of some element after 0 - k operations (incrementing)
DATA FLOW:


REQUIREMENTS:
- we can only increment values in the array, no decrementation allowed

EDGE CASES:

SUMMARY:
- produce the most amount of duplicate values by using 0-k incrementations operations upon the elements in the array
- the optimal


STEPS:

determine if the input array has any duplicates already

sort input array

create 'mirror' array which tracks the differences between consecutive values

using mirror as a guide, find the min difference and increment the value at that

*/
// k = 5
// [1,1,4,8,13]
// [ 0,3,4,5  ]

const maxFrequency = function(nums, k) {
  // find if input has dups already:

  // nums.reduce((acc, curr) => {
  //   if (!acc[curr]) {
  //     acc[curr] = true;
  //   }
  //   return acc;
  // }, new Set());

  const sortedNums = nums.sort((a, b) => a - b)
  let mirror = [];

  for (let i = 1; i < sortedNums.length; i++) {
    const prior = sortedNums[i - 1];
    const curr  = sortedNums[i];
    mirror.push(curr - prior);
  }
  return mirror;
};

console.log(maxFrequency([1, 1, 4, 8, 13]))