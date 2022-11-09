function makeProductArray(input) {
  if (input.length === 0) return [];
  if (typeof input[0] !== 'number') return 'invalid input';

  let leftProduct = 1;
  let rightProduct = input.slice(1, input.length).reduce((a, c) => a * c);
  const products = [];

  for (let i = 0, leng = input.length; i < leng; i++) {
    if (i === 0) {
      products.push(rightProduct);
    } else if (i === leng - 1) {
      leftProduct = leftProduct * input[i - 1];
      products.push(leftProduct);
    } else {
      rightProduct = rightProduct / (input[i] || 1);
      leftProduct = leftProduct * input[i - 1];
      products.push(rightProduct * leftProduct);
    }
  }

  /*
  if at first element:
    push right into products

  if at last element:
    reassign left to itself * the element to its left
    push left into products

  else:
    reassign right to itself divided by the current element
    reassign left to itself * the previous element
    push the value of left * right into products

  */
  return products;
}

// const sparseArray = [];
// sparseArray.length = 10;
// console.log(makeProductArray(sparseArray)) // err or 0
// console.log(makeProductArray([])) // err or 0
// console.log(makeProductArray([1, -1])) // [-1, 1]
// console.log(makeProductArray([-1, 1])) // [1, -1]
// console.log(makeProductArray([-1, 2, 3, 4, -5])) // [-120, 60, 40, 30, -24]
// console.log(makeProductArray([-1, 2, 3, 4, 5])) // [120, -60, -40, -30, -24]
// console.log(makeProductArray([-1, 2, 3, 4])) // [24, -12, -8, -6]
// console.log(makeProductArray([0, 2, 3, 4])) // [24, 0, 0, 0]
console.log(makeProductArray([-0, 2, 3, 4])) // [24, -0, -0, -0]
// console.log(makeProductArray([1, 2, 3, 4])) // [24, 12, 8, 6]

console.log(makeProductArray([-1,1,0,-3,3])) // [0,0,9,0,0]
