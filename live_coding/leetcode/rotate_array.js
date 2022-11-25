/*
## INPUT: array of integers, k (positive integer value)
## OUTPUT: rotated array of integers
## DATA FLOW: array to array
## RULES:
  - k is always 0 or greater
## EDGE CASES:
  - where k > nums.length
  - where nums.length is 1
## SUMMARY:
  - if k > nums.length -> use remainder operator
## STEPS:

*/
/*
GUARD for
  - input nums.length being 1
  - k === 0 or if k % nums.length === 0

DECLARE operations;

CHECK if `nums` length is < k:
  ASSIGN operations to the remainder of k % `nums`.length

WHILE operationsCount !== 0 :
  nums.unshift(nums.pop())
  decrement operationsCount by 1

RETURN the curr value of `nums`
*/


var rotate = function(nums, k) {
  if (nums.length === 0) return nums;
  if (k === 0 || (k % nums.length === 0)) return nums;

  let operations = k;
  if (k > nums.length) operations = k % nums.length;

  const chopFrom = nums.length - operations;
  const rotatedEls = nums.splice(chopFrom);
  nums.unshift(...rotatedEls);

  return nums;
};


























