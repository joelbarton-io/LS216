/* Write a function that takes two sorted arrays as arguments and returns a new array
that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array.
You must build the result array one element at a time in the proper order. */

/*

?:


input: 2 sorted arrays
output: a single, new sorted array comprised of the elements in the two input arrays

rules of the problem (validate with test-cases):
- inputs are sorted arrays
- input can be an empty array
- array elements in both will be number typed
- there will always be the correct # of arguments (two arrays)

identify sub-problems:(al)



shape of the problem: (ds)

two arrays ...
[traverse both]
produce a single array


steps:
GUARD for either input arr being an empty array
  - return the other array

declare two counters, one for each array's curr index
declare a result array

both counters are !== their respective array's length - 1
  compare arr1[idx1] with arr2[idx2]
  whichever value is less
    push that value into the result array
    increment the idx counter for the array whose value was less than

if the idx counter for either of the arrays is != the arrays length - 1
  slice the rest of the elemnts in the other array and concat array into the result
  exit loop

return result


res = [1, 2, 3, 5, 9]
c1 = 1
c2 = 1

[1, 5, 9], [2, 3]

*/
function merge(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) return [];
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  const res = [];
  let c1 = 0;
  let c2 = 0;

  while (c1 < arr1.length && c2 < arr2.length) {
    let el1 = arr1[c1];
    let el2 = arr2[c2];

    if (el1 <= el2) {
      res.push(el1);
      c1++;
    }
    if (el1 > el2) {
      res.push(el2);
      c2++;
    }
  }

  if (c1 !== arr1.length) {
    let toAdd = arr1.slice(c1);
    toAdd.forEach(el => res.push(el));
  }

  if (c2 !== arr2.length) {
    let toAdd = arr2.slice(c2);
    toAdd.forEach(el => res.push(el));
  }

  return res;
}
/*
negatives:
  - initial idea caused a longer, more complicated implementation
  - if vs if/else
  - plan is a bit sparse!
neutrals:
  - unnecessary guard clause
  - got a little hacky slashy
positives:
  - good Q
  - good comms
  - test cases
*/

console.log(merge([1, 5, 9], [2, 6, 8]));    // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 1], [1, 1, 1])); // [1 ...]
console.log(merge([1, 5, 9], [2, 3]));    // [1, 2, 3, 5, 9]
console.log(merge([], [])); // []
console.log(merge([1, 5, 9], []));    // [1, 5, 9]
