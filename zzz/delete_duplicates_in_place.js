var removeDuplicates = function (nums) {
  let size = nums.length;

  for (let li = 0, ri = 1, count = 1; ri < size; ri++) {
    console.log(ri);
    if (nums[li] === nums[ri]) {
      count += 1;

      if (count > 2) {
        nums[ri] = null;
        li++;
        count = 1;
      } else if (count === 2 && li + 1 != ri) {
        li++;
        nums[li] = nums[ri];
        nums[ri] = null;
      }
    } else {
      li++;
      nums[li] = nums[ri];
      nums[ri] = null;
    }
  }

  return nums;
};

removeDuplicates([1, 1, 1, 2, 2, 3])

/*

algo:
  - declare count and init to 1

    - loop over elements with two pointers (li, ri)

    - if left === right,
        - increment count by 1

        - if count > 2:
          - delete value at ri
          - increment li by 1
          - reset count to 1

        - if count is 2 and li + 1 is not ri (non-cons):
            - increment li
            - set val at curr li slot to right
            - set val at curr ri to default empty

    - else if left != right,
        - increment li
        - set val at curr li slot to right
        - set val at curr ri to default empty

              v
  [1,1,2,2,3,_]
           ^
*/var removeDuplicates = function (nums) {
  let size = nums.length;

  for (let li = 0, ri = 1, count = 1; ri < size; ri++) {
    if (nums[li] === nums[ri]) {
      count += 1;

      if (count > 2) {
        nums[ri] = null;
        li++;
        count = 1;
      } else if (count === 2 && li + 1 != ri) {
        li++;
        nums[li] = nums[ri];
        nums[ri] = null;
      }
    } else {
      li++;
      nums[li] = nums[ri];
      nums[ri] = null;
    }
  }

  return nums;
};


/*

algo:
  - declare count and init to 1

    - loop over elements with two pointers (li, ri)

    - if left === right,
        - increment count by 1

        - if count > 2:
          - delete value at ri
          - increment li by 1
          - reset count to 1

        - if count is 2 and li + 1 is not ri (non-cons):
            - increment li
            - set val at curr li slot to right
            - set val at curr ri to default empty

    - else if left != right,
        - increment li
        - set val at curr li slot to right
        - set val at curr ri to default empty

              v
  [1,1,2,2,3,_]
           ^
*/
/* var removeDuplicates = function(nums) {
  let a = 0;
  let b = 1;

  while (b < nums.length) {
    if (nums[a] === nums[b]) { // duplicate
      delete nums[b];
    } else {
      if (a != b - 1) {
        nums[a + 1] = nums[b];
        delete nums[b];
      }
      a++;
    }
    b++
  }

  return nums.reduce((acc, curr) => {
    if (typeof curr === 'number') acc++;
    return acc;
  }, 0);
}; */


// var removeDuplicates = function(nums) {
//   // mutate array in place

//   // use pointer A to keep track of the last unique chr in the input array `nums`
//   // use pointer B to keep track of the curr el to compare to the last unique element


//   let a = 0;
//   let b = 1;

//   while (b < nums.length) {
//     let left = nums[a];
//     let right = nums[b];

//     // if they're duplicates, we want to increment pointer b
//     if (left === right) {
//       b++;
//     } else if (left != right) {
//       if (a != b + 1) {
//         nums[a + 1] = right;
//         a++;
//         b++;
//       }
//     }
//     // if they're not duplicates:
//     //   and if a != b + 1:
//     //      need to set nums[a + 1] = nums[b]
//     // increment both pointers
//   }

//   return nums;
// };



// var removeDuplicates = function (nums) {
//   let a = 0;
//   let b = 1;

//   while (b < nums.length) {
//     if (nums[a] != nums[b]) {
//       if (a != b + 1) nums[a + 1] = nums[b];
//       a++;
//     }

//     b++;
//   }

//   return [...nums];
// };


console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) // [1, 2, 3, 4, 5, undefined, undefined]
// console.log(removeDuplicates([1, 1, 2])) // [1, 2, 3, 4, 5, undefined, undefined]

// [1, 1, 2]
//  a  b
//[1, 2, 3, 4, 5, _, _]
//          a        b


//[1, 2, 3, 4, 5, _, _]
// a  b