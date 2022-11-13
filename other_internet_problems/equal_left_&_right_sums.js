function solve(nums) {
  if (nums.length === 0) {
      return -1;
  } else if (nums.length === 1) {
      return 0;
  }

  let left = 0;
  let right = nums.reduce((a, c) => a + c, 0);

  for (let i = 0, leng = nums.length; i < leng; i++) {
      let curr = nums[i];
      right -= curr;
      if (left === right) {
          return i;
      }
      left += curr;

  }
  return -1;
}

let nums = [2, 3, 4, 0, 5, 2, 2];

let arr = [];
arr.length = 100000
arr.fill(-1);

console.log(solve(arr));
