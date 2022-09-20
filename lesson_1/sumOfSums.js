function sumOfSums(arr) {
  let count = 0;

  return arr.reduce((accum, curr) => {
    count += 1
    curr = arr.slice(0, count).reduce((a, c) => a + c); // slice and sum a chunk
    return accum + curr;
  }, 0);
}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35