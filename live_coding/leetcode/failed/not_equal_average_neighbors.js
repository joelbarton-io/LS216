/*
A number can be the average of its neighbors if one neighbor is smaller than the number and the other is greater than the number.


## INPUT:
  - array of unique integers
  - length of array is always 3 or greater

## OUTPUT:
  - rearranged array of elements

## REQUIREMENTS:
  - left and right average !== curr el

## EDGE CASES:
  - input array already satisfies the requirement
## SUMMARY:
## STEPS:
*/
var rearrangeArray = function(nums) {
  nums.sort((a, b) => a - b);
  let leftHalf = nums.splice(0, nums.length / 2).reverse();
  let result = [];

  while (nums.length > 0 || leftHalf.length > 0) {
    if (nums.length !== 0) result.push(nums.pop())
    if (leftHalf.length !== 0) result.push(leftHalf.pop())
  }
  return result;
};

