/*
recursively divide n by 5 and store quotients




*/


function zeros(n, trailingZeros = 0) {
  if (n < 5) return trailingZeros;
  n = Math.floor(n / 5);
  trailingZeros += n;
  
  return zeros(n, trailingZeros);
}

let n = 1123;
console.log(zeros(n));

/* function zeros (n) {
  let trailingZeros = 0;

  while (n >= 5) {
    n = Math.floor(n / 5);
    trailingZeros += n;
  }

  return trailingZeros;
} */

