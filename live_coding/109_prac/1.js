/* # Given an array of numbers, for each number find out how many numbers
# in the array are smaller than it. When counting numbers, only count
# unique values. That is, if a given number occurs multiple times in
# the array, it should only be counted once. */

/* [1, 2, 3, 4, 5] // [0, 1, 2, 3, 4]
[1, 2.1, 3, 4, 5] // [0, 1, 2, 3, 4]
[1, 2.99999, 3, 4, 5] // [0, 1, 2, 3, 4]

[1, 1, 2, 3, 4, 5] //[0, 0, 1, 2, 3, 4]
[0, 0, 0, 0, 0] // [0, 0, 0, 0, 0]
[-2, 0, 1, 3, 3] // [0, 1, 2, 3, 3]

[NaN, 1, 2, 3, Infinity, Infinity, -Infinity] // [null, 0, 1, 2, null, null, null]
 */
/*

?:
1) Will the input ever have special number types? (NaN, Infinity, -Infinity) yes, don't count these, return null for their count of smaller than

input: array of Numbers (int, float, special)
output: -> array with each index's value being the unique # of numbers smaller than the input's value at that index

rules of the problem (validate with test-cases):
- valid input type is assumed / valid element type is assumed
- special number types are not evaluated and their count should be null in result array
- special number types do not count towards another number's lowerThan count (ignore them)
- only unique numbers contribute to a number's lessThan count (want to use a )


identify sub-problems:

CREATE a result array

TRAVERSE input array of numbers:
  at EACH INDEX:
    if it is a special number:
      push null into result array and skip to next

    if NOT a special number:
      - Slice left and right to create array of 'other values' to compare with curr element
      - filter out special numbers from `otherVals` array
      - create a set from this array, convert back to array
      - filter UniqueOthers for the # of elements which are less than curr
      - take the length of the filteredArray and push into result array

return result array


steps:

arr.slice(currIdx + 1).concat([1, NaN, 3, 3, Infinity].slice(0, currIdx))

*/
function smallerThanCurrent(nums) {
  const result = [];
  const isNotSpecialNum = (num) => !(Number.isNaN(num) || num === Infinity || num === -Infinity);

  nums.forEach((num, idx) => {
    if (!isNotSpecialNum(num)) {
      result.push(null);
    } else {
      const others = nums.slice(idx + 1).concat(nums.slice(0, idx));
      const filteredOthers = others.filter(isNotSpecialNum);
      const uniqueOthers = [...new Set(filteredOthers)];
      const lessThanCurr = uniqueOthers.filter(el => el < num).length;
      result.push(lessThanCurr);
    }
  });

  return result;
}

console.log(smallerThanCurrent([1, NaN, 3, 3, Infinity])) // [0, null, 1, 1, null]
console.log(smallerThanCurrent([1, 2, 3, 4, 5])) // [0, 1, 2, 3, 4]
console.log(smallerThanCurrent([1, 2.1, 3, 4, 5])) // [0, 1, 2, 3, 4]
console.log(smallerThanCurrent([1, 2.99999, 3, 4, 5])) // [0, 1, 2, 3, 4]
console.log(smallerThanCurrent([1, 1, 2, 3, 4, 5])) //[0, 0, 1, 2, 3, 4]
console.log(smallerThanCurrent([0, 0, 0, 0, 0])) // [0, 0, 0, 0, 0]
console.log(smallerThanCurrent([-2, 0, 1, 3, 3])) // [0, 1, 2, 3, 3]
console.log(smallerThanCurrent([NaN, 1, 2, 3, Infinity, Infinity, -Infinity])) //[null, 0, 1, 2, null, null, null]

// ~> 31:22, wrote own test cases so that added to the overall time
