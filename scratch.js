/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */


obj = { a: 1, b: 2, c: 3, d: undefined, undefined: true };

if (obj.hasOwnProperty(undefined)) {
  console.log('found');
} else {
  console.log('missing');
}

console.table(Object.keys(obj));
