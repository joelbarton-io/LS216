function multiplyAllPairs(arr1, arr2) {
  const result = [];
  arr1.forEach((n1) => arr2.forEach((n2) => result.push(n1 * n2)));
  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
