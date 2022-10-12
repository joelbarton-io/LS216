function convert(num, index, arr) {
  console.log(num, index, arr);
  return String(num * arr.length ** index);
}

let chr = 'oreo';
console.log([1, 2, 3].map(convert))
