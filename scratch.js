/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */


function hashFromArray(arr) {
  return arr.reduce((acc, cv) => {
    if (acc[cv]) {
      acc[cv]++
      return acc;
    } else {
      acc[cv] = 1;
      return acc;
    }
  }, {})
}

console.log(hashFromArray([1, '2', 3, 4, 5, 5, 5, 1, 2]));
