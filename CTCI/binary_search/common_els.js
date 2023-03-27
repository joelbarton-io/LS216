// // two sorted arrays containing unique integers, find common elements

// function findCommonHashTable(one, two) {
//   let bs_idx = Math.floor(one.length / 2);

//   for (let i = 0; i < two.length; i++) {
//     if (bs(one, bs_idx, two[i])) console.log(two[i]);
//   }
// }

// function bs(chunk, idx, target) { // boolean
//   let el = chunk[idx];

//   if (target === el) return true;

//   if (target > el) { // check right
//     let rightSide = chunk.slice(idx + 1);
//     let newMiddleIdx = Math.floor(rightSide.length / 2);
//     return bs(rightSide, newMiddleIdx, target);
//   }

//   if (target < el) { // check left
//     let leftSide = chunk.slice(0, idx);
//     let newMiddleIdx = Math.floor(leftSide.length / 2);
//     return bs(leftSide, newMiddleIdx, target);
//   }
// }

// let two = [17, 35, 39, 40, 55, 58, 60];
// let one = [13, 27, 35, 40, 49, 55, 59];

// console.log(findCommonHashTable(one, two))

var searchMatrix = function (matrix, target) {
  const ONE_D_ARR = matrix.flat();

  return binarySearch(ONE_D_ARR, target, 0, ONE_D_ARR.length - 1);
};

const binarySearch = (arr, target, left, right) => {
  let middle = Math.ceil((left + right) / 2);

  if (arr[middle] === target) {
    return true;
  }

  if (arr[middle] < target) {
    left = middle + 1;
    return binarySearch(arr, target, left, right);
  }

  if (arr[middle] > target) {
    right = middle - 1;
    return binarySearch(arr, target, left, right);
  }

  return false;
}

let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let targ = 20;

console.log(searchMatrix(matrix, targ));