
/*
var shiftGrid = function(grid, k) {
  const oneDim = grid.flat();
  const leng = oneDim.length;

  if (k === leng) return grid;
  if (k > leng) while (k > leng) k -= leng;

  oneDim.unshift(...oneDim.splice(leng - k, k));

  let i = 0;
  let colSize = grid.length;
  let rowSize = grid[0].length;

  for (let y = 0; y < colSize; y++) {
    for (let x = 0; x < rowSize; x++) {
      grid[y][x] = oneDim[i];
      i++;
    }
  }

  return grid;
};
 */
/*
intuition:

    - the matrix should actually be thought of as a 1d array
    - if k is greater than the length of the 1d array, subtract the length from k until k < length

algo:
    - if k > length, subtract leng from k until no longer true;
    - slice off the last k elements from 1d array and preppend them to the start of arr
    - traverse input rows and cols with a index (to keep track of the index in 1d array)
        - swap out value in row/col with appropriate value in 1d arr

    - return input
*/

/*
var checkInclusion = function(s1, s2) {
  const map = new Map();
  const sortedS1 = s1.split('').sort().join('');
  let size1 = s1.length;
  let size2 = s2.length;

  for (let i = 0; i < size1; i++) {
    let key = s1[i];
    map.has(key) ? map.set(key, map.get(key) + 1) : map.set(key, 1);
  }

  for (let i = 0; i < (size2 - size1 + 1); i++) {

    let key = s2[i];
    if (!(map.has(key))) continue;
    const sortedS2 = s2.slice(i, i + size1).split('').sort().join('');
    console.log(sortedS2, sortedS1)

    if (sortedS2 === sortedS1) return true;
  }

  return false;
};

console.log(checkInclusion("ab", "eidbaooo")); */

// chatGPT3's solution:

// function productExceptSelf(nums) {
//   const n = nums.length;
//   const result = new Array(n).fill(1);

//   let leftProduct = 1;
//   for (let i = 0; i < n; i++) {
//     console.log(result[i], leftProduct);
//     result[i] *= leftProduct;
//     leftProduct *= nums[i];
//   }

//   let rightProduct = 1;
//   for (let i = n - 1; i >= 0; i--) { // [ 1, -1, -1, -0, 0 ]
//     result[i] *= rightProduct; //                 ^
//     rightProduct *= nums[i]; // 0
//   }
//   // [-1, 1, 0, -3, 3]
//   //         ^
//   return result;
// }

// console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0, 0, 9, 0, 0]

// my final solution:

// var productExceptSelf = function (nums) {
//   let size = nums.length;
//   let ans = [];
//   let l_prod = 1;
//   let r_prod = product(nums, 1);

//   for (let i = 0; i < size; i++) {
//     ans.push(l_prod * r_prod);

//     let excluded = nums[i];
//     l_prod *= excluded;

//     let div = nums[i + 1] === undefined ? 1 : nums[i + 1];
//     div === 0 ? r_prod = product(nums, i + 2) : r_prod /= div;
//   }
//   return ans;
// };

// function product(arr, startingIdx) {
//   let size = arr.length;
//   let prod = 1;
//   for (let i = startingIdx; i < size; i++) {
//     if (arr[i] === 0) return 0;
//     prod *= arr[i];
//   }
//   return prod;
// }

// console.log(productExceptSelf([-1, 1, 0, -3, 3])) // [0, 0, 9, 0, 0]
                                // ^

/*
var productExceptSelf = function(nums) {
  let size = nums.length;
  let ans = [];

  for (let i = 0; i < size; i++) {
    let arr;

    if (i === 0) {
      arr = nums.slice(i + 1);
    } else if (i + 1 === size) {
      arr = nums.slice(0, size - 1);
    } else {
      arr = nums.slice(0, i).concat(nums.slice(i + 1))
    }

    ans.push(product(arr));
  }

  return ans;
};

function product(arr) {
  let size = arr.length;
  let prod = 1;

  for (let i = 0; i < size; i++) {
    if (arr[i] === 0) return 0;
    prod *= arr[i];
  }
  return prod;
}
*/
/*
intuition:

    - get initial product of nums starting at index 1 and multiply this by 1 (default 'left' )


    - loop over elements (there will be an 'excluded' value which will serve as a partition value)

    - 'right' will be start with initial product, then for every next iteration, we divide right by curr and then multiply by left

    - left is initially 1 (when partition index is 0)


    -> [1, 2, 3, 4]
              ^
    -> [24,12,8,6]


*/

// productExceptSelf([-1, 1, 0, -3, 3]) // [0, 0, 9, 0, 0]

// var arrayPairSum = function(nums) {
//   nums.sort((a, b) => a - b);
//   let ans = 0;

//   for (let i = 0; i < nums.length - 1; i += 2) {
//     ans += Math.min(nums[i], nums[i + 1]);
//   }

//   return ans;
// };

/*
intuition:

    - sort arr ascending
    - group cons nums and take mins

    this approach ensure that the larger numbers are not minimized by being paired with smaller than necessary numbers
*/

// var minimumDifference = function(nums, k) {
//   nums.sort((a, b) => a - b);

//   let ans = Infinity;
//   let end = nums.length + 1 - k;

//   for (let i = 0; i < end; i++) {
//     let min = nums[i];
//     let max = nums[i + k - 1];
//     ans = Math.min(max - min, ans);
//   }

//   return ans;
// };


/*
intuition:
    - sort `nums`

    - traverse using a window which finds the min and max of that window (how to store this info?)

    - keep track of min diff of (max - min) of a group of nums

    - if the minimum diff of some group of numbers is less than some previous value, reassign previous value to current min diff


    [9,7,4,1] k = 2
         ^^^

    [9] k = 1
     ^



input:
    - array of nums

output:
    - min possible difference



 */
// [1,4,7,9]
//  ^^^
// console.log(minimumDifference([9,7,4,1], 2));

// var wordPattern = function(pattern, s) {
//   const words = s.split(' ');
//   if (words.length != pattern.length) return false;

//   let size = words.length;
//   const MAP = new Map();

//   for (let i = 0; i < size; i++) {
//     if (!(MAP.has(pattern[i]))) {
//       MAP.set(pattern[i], words[i]);
//     } else {
//       if (MAP.get(pattern[i]) != words[i]) {
//         return false;
//       }
//     }
//   }

//   return true;
// };

/*
"dog cat cat fish"
              ^-^

abba
   ^
{
  a: 'dog',
  b: 'cat'
}

hashmap.

pattern chr key to s[i] after split


{
  a: 'dog',
  b: 'cat'
}

if new key, add to hashmap and continue with iteration
if key exists, the assoc value must be equal to current word in `s`, if not, return false;

*/

// LOOKED at solution for this one...

// var findDisappearedNumbers = function(nums) {
//   nums.forEach(number => {
//     let indexSeen = Math.abs(number) - 1;

//     if (nums[indexSeen] > 0) {
//       nums[indexSeen] = nums[indexSeen] * -1;
//     }
//   })
//   const ansult = [];

//   nums.forEach((number, i) => {
//     if (number < 0) ansult.push(i + 1);
//   })

//   return ansult;
// };

/*
  sorting is out of the question since time must be linear
  hashmap is out of the question since space must be constant


  input is:
    [1, input.length]


  min should be 1
  max should be nums.length


  assuming there are missing elements in the range, there will be duplicate values in nums
  we know the max is the length of nums


  inp: [1,1,1,1], size: 4 (max), sum: 10 vs 4
  out: [2,3,4]
*/

// brute force O(n) with additional memory (hashmap)

// var findDisappearedNumbers = function(nums) {
//   let DATA = {};
//   let size = nums.length;
//   for (let i = 0; i < size; i++) {
//     if (!(nums[i] in DATA)) DATA[nums[i]] = true;
//   }

//   let ansult = [];

//   for (let i = 1; i < size + 1; i++) {
//     if (!(i in DATA)) ansult.push(i);
//   }

//   return ansult;
// };

/*
  input is:
    [1, input.length]

  min should be 1
  max should be nums.length

  assuming there are missing elements in the range, there will be duplicate values in nums
  we know the max is the length of nums


*/

// this one felt hard because the outer loop condition wasn't (isn't) clear to me (how to expanss it)

// var maxNumberOfBalloons = function(text) {
//   let balloon = 'balloon';
//   const BAL = {};
//   for (let i = 0; i < balloon.length; i++) {
//     (BAL[balloon[i]]) ? BAL[balloon[i]]++ : BAL[balloon[i]] = 1;
//   }

//   let MAP = {};
//   for (let i = 0; i < text.length; i++) {
//     (MAP[text[i]]) ? MAP[text[i]]++ : MAP[text[i]] = 1;
//   }

//   let keys = Object.keys(BAL);
//   let count = 0;

//   while (true) {
//     for (let key of keys) {
//       if (!MAP[key]) {
//         return count;
//       } else {
//         MAP[key] -= BAL[key];
//         if (MAP[key] < 0) {
//           return count;
//         }
//       }
//     }
//     count++
//   }
// };


// var pivotIndex = function(nums) {
//   let left = 0;
//   let right = nums.reduce((acc, curr) => acc + curr, 0);
//   let size = nums.length;

//   for (let i = 0; i < size; i++) {
//     let pivot = nums[i];

//     right -= pivot
//     if (left === right) return i;
//     left += pivot;
//   }

//   return -1;
// };

// let input = [-1,-1,0,1,1,0]
// console.log(pivotIndex(input));

// var nextGreaterElement = function(nums1, nums2) {
//   const NEED = {};
//   let size1 = nums1.length;

//   for (let i = 0; i < size1; i++) {
//     if (!NEED[nums1[i]]) NEED[nums1[i]] = true;
//   }

//   const NEXT_BIG = {};

//   for (let i = nums2.length - 1; i >= 0; i--) {
//     const curr = nums2[i];

//     if (i === nums2.length - 1) {
//       NEXT_BIG[curr] = -1;
//     } else {
//       NEXT_BIG[curr] = nextBigger(curr, i, nums2);
//     }
//   }

//   for (let i = 0; i < size1; i++) {
//     nums1[i] = NEXT_BIG[nums1[i]];
//   }

//   return nums1;
// };

// function nextBigger(num, startingIndex, arr) {
//   let size = arr.length;

//   for (let i = startingIndex; i < size; i++) {
//     if (num < arr[i]) return arr[i];
//   }

//   return -1;
// }

// nums1 = [3,1,5,7,9,2,6], nums2 = [1,2,3,5,6,7,9,11];

// console.log(nextGreaterElement(nums1, nums2));
// [5,2,6,9,11,3,7]


// bruteforce: time -> O(n), space -> O(n)
// var majorityElement = function(nums) {
//   /*

//   */

//   const COUNTS = new Map();
//   let half = Math.ceil(nums.length / 2);
//   let size = nums.length;

//   for (let i = 0; i < size; i++) {
//     let key = nums[i];

//     if (COUNTS.has(key)) {
//       let curr = COUNTS.get(key);
//       COUNTS.set(key, curr + 1);
//     } else {
//       COUNTS.set(key, 1);
//     }

//     if (COUNTS.get(key) === half) return key;
//   }
// };

/* var canPlaceFlowers = function (flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
    let curr = flowerbed[i];
    let left = flowerbed[i - 1];
    let right = flowerbed[i + 1];

    if (i === 0) {
      if (curr === 0 && right === 0) {
        flowerbed[i] = 1;
        n--;
      } else if (curr === 0 && right === undefined) {
        if (n === 1 || n === 0) return true;
        return false;
      }
    } else if (i === flowerbed.length - 1) {
      if (curr === 0 && left === 0) {
        flowerbed[i] = 1;
        n--;
      }
    } else {
      if (curr === 0 && right === 0 && left === 0) {
        flowerbed[i] = 1;
        n--;
      }
    }

    if (n === 0) {
      return true;
    }
  }

  return n < 1
}; */


// function canPlaceFlowers(flowerbed, n) {
//   let end = flowerbed.length;
//   let count = 0;

//   for (let i = 0; i < end; i++) {
//     let last = i - 1 >= 0 ? flowerbed[i - 1] : 0;
//     let next = i + 1 < end ? flowerbed[i + 1] : 0;

//     if (flowerbed[i] === 0 && last === 0 && next === 0) {
//       count++;
//       i++;
//     }

//     if (count >= n) return true;
//   }

//   return false;
// }
// console.log(canPlaceFlowers([0], 1) === true)
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 2) === true)
// console.log(canPlaceFlowers([0, 0, 0, 0, 0], 3) === true)
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 3) === false)
// console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1) === true)

// var isIsomorphic = function (s, t) {

//   if (s.length != t.length) return false;

//   const TOP = new Map();
//   const BOT = new Map();

//   for (let i = 0; i < s.length; i++) {
//     if (TOP.get(s[i]) !== BOT.get(t[i])) return false;

//     TOP.set(s[i], i);
//     BOT.set(t[i], i);
//   }

//   return false;
//   // const MAP = new Map();

//   // for (let i = 0; i < s.length; i++) {
//   //   const S_CHR = s[i];
//   //   const T_CHR = t[i];
//   //   if (MAP.has(S_CHR) || MAP.has(T_CHR)) {
//   //     if (MAP.get(S_CHR) != T_CHR || MAP.get(T_CHR) != S_CHR) {
//   //       return false;
//   //     }
//   //   } else {
//   //     MAP.set(S_CHR, T_CHR);
//   //     MAP.set(T_CHR, S_CHR);
//   //   }
//   // }
//   // return true;
// };

// let s = "egcd"
//          ^
// let t = "adfd"
//          ^
// console.log(isIsomorphic(s, t));

// var twoSum = function(nums, target) { // brute force:
//   const MAP = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const el = nums[i];
//     const key = target - el;

//     if (MAP.has(el) && MAP.get(el) != i) {
//       return [i, MAP.get(el)];
//     }
//     MAP.set(key, i);
//   }
// };

// console.log(twoSum([3, 3], 6));

// var isSubsequence = function (s, t) {


//   // 'abc',
//   //    ^

//   // 'ahbcXXXX'
//   //     ^


//   for (let tIdx = 0, sIdx = 0; sIdx < s.length && tIdx < t.length; tIdx++) {
//     console.log(t[tIdx], s[sIdx])
//     if (t[tIdx] === s[sIdx]) sIdx++;
//     if (sIdx === s.length) return true;
//   }

//   return false;
// };
/*
loop's exit condition is: all of 's''s chrs are found (sIdx === s.length)

if the curr tChr === the curr sChr, we increment sIdx
*/

// console.log(isSubsequence('abc', 'ahbxxxxxxx'));
/*
iterate over `t` characters with an additional pointer (to keep track of `s`'s length)

if the curr `t` chr matches `s`'s curr chr, increment `s` length counter

if we get to the end of traversing `t` chr's and `s` length counter is != s .length - 1 return false

otherise return true
*/

