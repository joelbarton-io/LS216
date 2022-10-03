// function solve(nums, values) {
//   let high = -Infinity;
//   let sum;

//   for (let i = 0; i < nums.length; i += 1) {
//       for (let j = i; j < nums.length; j += 1) {
//           sum = (values[i] + values[j] + nums[j] - nums[i]);
//           if (sum > high) {
//               high = sum;
//           }
//       }
//   }
//   return high;
// }


function solve(nums, values) {
  let high = -Infinity;
  let sum;

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    for (let j = i; j < nums.length; j += 1) {
      sum = (values[i] - nums[i]) + (values[j] + nums[j]);
      if (sum > high) {
        high = sum;
      }
    }
  }
  return high;
}


let nums = [0, 1, 6];
let values = [-5, 5, 4];

console.log(solve(nums, values));
