var countBits = function(n) {
  // do we just count the 1s in the binary representation of n?

  // convert to binary then count the number of '1's in binary rep.

  let quotients = [];
  let remainders = [];

  while (n > 0) {
    let quo = n % 2;
    let rem = n / 2;
    quotients.push(quo);
    remainders.push(rem);
    n = quo;

  }
  return quotients;
};


// console.log(countBits(0))  //  0
// console.log(countBits(4))  //  1
console.log(countBits(7))  //  3
// console.log(countBits(9))  //  2
// console.log(countBits(10)) //  2
