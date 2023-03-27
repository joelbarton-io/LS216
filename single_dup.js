var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];

  let left = 0;
  let right = nums.length - 1;

  return bs(left, right, nums);
};

function bs(left, right, nums) {

  let isOdd;
  let mid = ((nums.length - 1) / 2);

  if (nums[mid - 1] != nums[mid] && nums[mid + 1] != nums[mid]) return nums[mid];

  if (nums[mid - 1] === nums[mid]) {
    isOdd = ((mid - 1) - left) % 2 === 1;
    return (isOdd) ? bs(left, mid, nums) : bs(mid + 1, right, nums);

  } else {
    isOdd = ((mid + 1) - right) % 2 === 1;
    return (isOdd) ? bs(mid, right, nums) : bs(left, mid - 1, nums);
  }
}

console.log(singleNonDuplicate([1, 1, 2, 2, 3]));

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));

// console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));

/*
left : 0
mid  : 3
right: 6

left : 3 + 1
mid  : 5
right: 6



*/


// [1,1,2,2,3,3,7,8,8]

// check to see if val at mid is uniq (checking to the left and right)
//  - do we need to confirm that val at mid has a left and right?
//
//  - if val at mid's doesnt equal the value to the left or right, found it
//
//  - otherwise:
//    - if value to left is mid's pair
//      - if left side's length ((mid - 1) - left) is ODD
//        - then we know we need to look in that section
//      - if left side's length is EVEN
//        - then we look in the right side of midpoint
//
//  - if value to right is mid's pair
//    - if right side's length ((mid - 1) - right) is ODD
//      - then we know we need to look in that section
//    - otherwise if right side's length is EVEN
//      - then we look in the left side of midpoint



/*
** INPUT **
    - Array (integers) sorted
    - always has ODD length
      - length can be 1 or more (edge case of length 1)


** OUTPUT **
    - find single unique element (integer)


** INFO/RULES **
    - all but one array element appear exactly twice
    - need to find single element
    - must be faster than linear time


****00:00-00:07****


** EXAMPLES & EDGES **

                 v
[1,1,2,3,3,4,4,8,8]
 ^       m

l = 0
m = 4
r = 8

****00:07-00:13****

** BY HAND & MENTAL MODEL **

mm: using binary search (three pointers, left, right, mid), remove 'half' the elements from contention every iteration


****00:13-00:20****


** DETAILED STEPS **
****00:20-00:30****

check to see if val at mid is uniq (checking to the left and right)
  - do we need to confirm that val at mid has a left and right?

  - if val at mid's doesnt equal the value to the left or right, found it

  - otherwise:
    - if value to left is mid's pair
      - if left side's length ((mid - 1) - left) is ODD
        - then we know we need to look in that section
      - if left side's length is EVEN
        - then we look in the right side of midpoint

  - if value to right is mid's pair
    - if right side's length ((mid - 1) - right) is ODD
      - then we know we need to look in that section
    - otherwise if right side's length is EVEN
      - then we look in the left side of midpoint





** CODE **
00:30-00:40
*/
