function sum(integer) {
  return String(integer).split('').reduce((acc, curr) => Number(acc) + Number(curr));
  // could also use a starting value of `0` which allows us to use only one Number();
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45