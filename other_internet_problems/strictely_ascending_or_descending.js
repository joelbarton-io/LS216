function solve(nums) {
  let first = nums[0];
  let second = nums[1];

  if (first === second) {
      return false;
  }

  let toggle = true;
  let index = 1

  if (first > second) { // descending
      while (toggle && index < nums.length - 1) {
          let curr = nums[index];
          let next = nums[index + 1];
          if (curr <= next) {
              toggle = false;
          }
          index += 1;
      }

  }

  if (first < second) { // ascending
      while (toggle && index < nums.length - 1) {
          let curr = nums[index];
          let next = nums[index + 1];
          if (curr >= next) {
              toggle = false;
          }
          index += 1;
      }
  }

  return toggle;
}

let nums = [1, 2, 3, 4, 5, 5];
solve(nums)