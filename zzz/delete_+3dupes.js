/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  // Initialize an integer k that updates the kth index of the array...
  // only when the current element does not match either of the two previous indexes...
  let k = 2;
  // Traverse elements through loop...
  for (let i = 2; i < nums.length; i++) {
    // If the index does not match the (k-1)th and (k-2)th elements, count that element...
    if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
      nums[k] = nums[i];
      k++;
    }
    // If the index matches the (k-1)th and (k-2)th elements, we skip it...
  }

  return k;       //Return k after placing the final result in the first k slots of nums...
}

// var removeDuplicates = function (nums) {
//   let a = 0, b = 1, c = 1;

//   while (b < nums.length) {
//     let left = nums[a], right = nums[b];

//     if (left === right) {
//       if (c === 1) {
//         if (a != b - 1) {
//           nums[a + 1] = right;
//           delete nums[b];
//         }

//         a++;
//         c++;

//       } else if (c === 2) {
//         // if (b + 1 === nums.length) {
//         //   delete nums[b];
//         // }
//         c = 1;
//       }

//     } else {
//       if (a != b - 1) {
//         nums[a + 1] = right;
//         delete nums[b];
//         c = 1;
//         a++;
//       }
//     }
//     b++;
//   }
//   return nums;
//   let result = 0;
//   nums.forEach(n => typeof n === 'number' ? result++ : null);
//   return result;
// };

// let nums = [1, 1, 1, 2, 2, 3];
//         [1, 1, 2, 2, 3, _];
//                   a     b
// c = 1

let nums = [1, 2, 2];
// [1, 1, 1]
//     a  b
// c = 1
console.log(removeDuplicates(nums)) // [1, 1, _] k = 2


/*
two pointers A & B
one counter C init 1

while b < nums length

if left === right

  if counter === 1:
    && if nums[a] != nums[b - 1]: // non-consecutive indices!
      set nums[a + 1] to nums[b]
      delete nums[b]

    a++, b++, c++

  if counter === 2:
    b++
    c = 1


if left != right
  && if nums[a] != nums[b - 1]: // non-consecutive indices!
    set nums[a + 1] to nums[b]
    delete nums[b]
    c = 1
    a++, b++


*/