// [1,3,12,0,0]
// ops : 2
// i : 3
var moveZeroes = function(nums) {
  let i = 0;
  let ops = 0;

  while (nums.length - ops !== i) {
    const currEl = nums[i];

    if (currEl === 0) {
      ops++;
      let zero = nums.splice(i, 1)[0];
      nums.push(zero);
    } else {
      i++;
    }
  }

  return nums;
};


/*
DECLARE index pointer : 0
DECLARE spliceCount pointer : 0

TRAVERSE `nums` checking if currEl is zero
  if zero:
    increment spliceCount by 1;
    splice out curr el
     + push spliced element into end of `nums`
  if non-zero:
    increment index by 1

return mutated `nums`
*/

