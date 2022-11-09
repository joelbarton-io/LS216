/*
Given an array of N integers, construct a product array
of the same size such that the i-th element of the product
array is equal to the product of all the elements from
the input array except for the i-th element.
*/


/*
?:


-> i: array of ints of length n

<- o: new array object of integer products of length n

expl/impl rules (validate with test-cases):
- input is always an array of (+/-) integers including zero and negative zero
- the i-th element in the product array is the product of all elements contained in the input array
  not inclusive of the i-th element in the input array

sub-problems:

traverse the input array of integers and gather all the elements to the left and right of the current element (at current index)

calculate product of gathered elements and push that product into result array

steps:
GUARD for empty array and sparse arrays

DECLARE product array as an empty array

TRAVERSE input array of elements with a normal for loop (with i)
  for left of curr element:
    slice from 0 upto the current index
  for right of curr element:
    slice from curr + 1 up to the end of the array (input array's length)

  concat these two array objects and find product
  push product into result array

input arr -> [-1, 2, 3, 4]
product arr -> []
i : 3

*/
/*
GUARD for empty array and sparse arrays

DECLARE product array as an empty array
DECLARE left product initialized to 1
DECLARE right product initialized to the product of the elements in the input array:
  forward from index 1 to the end of the array

TRAVERSE input array of elements
  REASSIGN rightProduct to the result of dividing itself by the absolute value of the current element
    - IF the current element is zero or negative zero, divide rightProduct by 1
  PUSH product into result array
  REASSIGN leftProduct to the result of multiplying itself by the current element

*/
// i = 0
// rightProd = 24

// [1, -1]

function makeProductArray(input) {
  if (input.length === 0) return [];
  if (typeof input[0] !== 'number') return 'invalid input';

  const products = [];
  let leftProduct = 1;
  let rightProduct = input.slice(1, input.length).reduce((a, c) => a * c);

  // [-1,   2,  3,  4,  -5]
  // [-120, 60, 40, 30, -24]
  for (let i = 0; i < input.length - 1; i++) {
    const elem = input[i];
    
  }

  return products;
}

// const sparseArray = [];
// sparseArray.length = 10;
// console.log(makeProductArray(sparseArray)) // err or 0

// console.log(makeProductArray([])) // err or 0
// console.log(makeProductArray([1, -1])) // [-1, 1]
// console.log(makeProductArray([-1, 1])) // [1, -1]

console.log(makeProductArray([-1, 2, 3, 4, -5])) // [-120, 60, 40, 30, -24]
// console.log(makeProductArray([-1, 2, 3, 4, 5])) // [120, -60, -40, -30, -24]
// console.log(makeProductArray([-1, 2, 3, 4])) // [24, -12, -8, -6]
// console.log(makeProductArray([0, 2, 3, 4])) // [24, 0, 0, 0]
// console.log(makeProductArray([-0, 2, 3, 4])) // [24, -0, -0, -0]
// console.log(makeProductArray([1, 2, 3, 4])) // [24, 12, 8, 6]