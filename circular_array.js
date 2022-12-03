/*
## REQUIREMENTS:
## EXAMPLES/EDGE CASES:

## INPUT:
  - array of subarrays with numbers elements (NaN, Infinity, floats, negatives?)
  - subarrays always have a length of 2 or more
  - there is never less than two subarrays in input array

## INTERMEDIATE:

edges = {
  left:  [1, 9, 4, 1]
  right: [1, 4, 1, 9]
}

[[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]]


## OUTPUT:
  - boolean

## SUMMARY:
## STEPS:

TRAVERSE input array of subarrays:
  pushing First and Last elements in subarray into respective lists in our obj

sort both arrays in edges

TRAVERSE one of them with index
  check if el in both left/right arrays are equal
  if not return false

return true
*/




// Write a function that determines if an array is circular. An array is circular if its
// subarrays can be reordered such that each subarray's last element is equal to the next
// subarray's first element.

// For example, the array [[1, 1, 1], [9, 2, 3, 4], [4, 1], [1, 2, 5, 7, 9]] is
// circular because we can re-arrange the elements to create the following array:
// [[9, 2, 3, 4], [4, 1], [1, 1, 1], [1, 2, 5, 7, 9]]

//[[9, 2, 3, 1], [4, 1], [2, 1, 1], [1, 2, 5, 7, 9]]

// In a circular re-ordering, the last subarray's last element must be identical to the first subarray's first element.
// Subarrays will contain at least one element.


console.table(isCircular([[9, 8], [6, 9, 1], [8, 4, 2], [1, 9], [2, 1, 6]]))// ➞ true
// Can be reordered: [[9, 8], [8, 4, 2], [2, 1, 6], [6, 9, 1], [1, 9]]

console.table(isCircular([[1, 1], [1, 2]]))// ➞ false
console.table(isCircular([[2, 1], [1, 2]]))//➞ true
console.table(isCircular([[2, 1], [1, 2]]))//➞ true
console.table(isCircular([[2, 1], [1, 2], [2, 1], [1, 3, 1], [1, 4, 4]]))// ➞ false

function makeEdge(input) {
  const edges = {
    left: [],
    right: [],
  }

  input.forEach(subArr => {
    let leftEdge = subArr[0];
    let rightEdge  = subArr[subArr.length - 1];

    edges.left.push(leftEdge);
    edges.right.push(rightEdge);
  });

  return edges;
}

function isCircular(input) {
  const edges = makeEdge(input);
	const ascending = (a, b) => a - b;

  edges.left.sort(ascending);
  edges.right.sort(ascending);

  const left = edges.left;
  const right = edges.right;
  let res = true;

  for (let i = 0; i < left.length; i++) {
    const leftEl = left[i];
    const rightEl = right[i];

    if (leftEl !== rightEl) {
      res = false;
      break;
    };
  }

  return res;
}
