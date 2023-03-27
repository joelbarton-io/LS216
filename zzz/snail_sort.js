function snail (arr) {
  if (arr.length < 2) return arr[0];
  const result = [];

  while (arr.length) {
    result.push(...arr.splice(0, 1));
    arr.forEach(row => result.push(...row.splice(-1, 1)));
    arr.reverse().map(row => row.reverse());
  }

  return result.flat();
}
console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))