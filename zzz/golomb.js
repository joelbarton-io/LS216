function decoder(sequence) {

  let idx = 0;
  let zeroCount = 0; // will need to add 1 to this to get the right slice length of binary
  let result = [];

  // "001000000101111001010001101"
  //    ^
  // idx       = 2
  // c         = "1"
  // zeroCount = 2
  // binaryLen = 3
  // string    = '100'

  while (sequence.length) {
    let c = sequence[idx];

    if (c === '0') { // && zeroCount === 0
      // increment zeroCount by 1
      zeroCount++;
      // increment idx by 1
      idx++;
      // continue with iteration
    } else if (c === '1' && zeroCount > 0) {
      // binaryLength = zeroCount plus 1, this is the length of the binary string
      let binaryLength = zeroCount + 1;
      // starting at idx, slice to idx + binary length, this is our binary string
      let binaryString = sequence.slice(idx, idx + binaryLength);
      // extract this string -> convert binary(str)
      let asInt = convert(binaryString);
      // push this integer into `result`
      result.push(asInt);

      // remove from idx 0 up to the total length of zeroCount + binaryLength from sequence
      sequence = sequence.slice(idx + binaryLength);
      // reset zeroCount to 0
      zeroCount = 0;
      // reset idx to 0
      idx = 0;
      // continue
    } else if (c === '1' && zeroCount === 0) { // must be zero
      // push 0 into `result`
      result.push(0);
      // remove front of string and reassign string to new, shorter string
      sequence = sequence.slice(1);
    }
  }

  return result;
/*
traverse string chars one by one (while loop)

if `curr` is '0' and `zeroCount` is zero:

else if `curr` is 1 and `zeroCount` is greater than zero:

else, the num must be 1 (1 - 1 = 0)

helper -> clean golomb (mainly involves removing leading zeros)
helper -> convert from binary to integer

*/

}




function convert(binaryString) {
  // x + 1 as binary

  // 22 + 1 = 23
  // 10111
  // (reversed) -> 11101
  // [1, 1, 1, 0, 1]
  //  0  1  2  3  4
  //  1+ 2+ 4+ 0+ 16 -> 23

  let asDigits = binaryString.split('').reverse().map(Number);
  let total = 0;

  asDigits.forEach((dig, i) => {
    let val = dig * Math.pow(2, i);
    total += val;
  });

  return total - 1;
}

console.log(decoder("001000000101111001010001101"));
