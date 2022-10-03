/*
function solve(nums, k) {
  let left, right;

  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      left = nums[i];
      right = nums[j]
      if (left + right === k) {
        return true;
      }
    }
  }
  return false;
}
*/

function twoSum(nums, k, hashMap = {}) {
  for (let index in nums) {
    let curr = nums[index];
    if (hashMap[k - curr]) {
      return true;
    }
    hashMap[curr] = true;
  }
  return false;
}

console.log(twoSum([35, 8, 18, 3, 22], 11));
