/*
## REQUIREMENTS:
  - 'strictly increasing' : left number < right number
  - 'continuous' : consecutive so one after the other (index 1...index 2)

## EXAMPLES/EDGE CASES:
  [1,-3,5,4,7]  ->  2
  [1]           ->  1
## INPUT: integer array of length 1 or greater
## INTERMEDIATE: integer
## OUTPUT: Number representing length of longest continuous increasing subsequence (subarray)

## SUMMARY:
  - we want to find the longest consecutive sequence of chrs contained in integer array nums and return that subsequence's length

## STEPS:

DECLARE longestLeng : -1
DECLARE currLength : 1

TRAVERSE the int elements in nums and at each index: (i < nums.length - 1)
  CHECK to see if currLeng > longestLeng
      IF true, reassign longestLeng to currLeng

  DECLARE left, right i and i + 1
  COMPARE left to right
    IF left < right:
      INCREMENT currLength by 1
    OTHERWISE:
      REASSIGN currLength to 1

RETURN longestLeng

*/
// [1,3,5,7]
//  ^

var findLengthOfLCIS = function(nums) {
  let longest = -1;
  let curr = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    if (curr > longest) longest = curr;

    let left = nums[i];
    let right = nums[i + 1];

    if (left < right) {
      curr++;
    } else {
      curr = 1;
    }
  } 

  if (curr > longest) longest = curr;

  return longest;
};


































