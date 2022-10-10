/* The Luhn formula is a simple checksum formula used to validate a variety of identification numbers, such as credit card numbers and Canadian Social Insurance Numbers.

The formula verifies a number against its included check digit, which is usually appended to a partial number to generate the full number. This number must pass the following test:

Counting from the rightmost digit and moving left, double the value of every second digit
For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)
Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

If the total (the checksum) ends in 0 (put another way, if the total modulo 10 is congruent to 0), then the number is valid according to the Luhn Formula; else it is not valid. Thus, 1111 is not valid (as shown above, it comes out to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as valid. You can ignore all non-numeric characters in the input string.
*/

/*
- 'appended', right-to-left, double every other dig -> modulo operator

requirements:

- after transformation, value must sum to a number who's last chr === 0; modulo 10 === 0
- GUARD for non-string inputs
- GUARD for empty strings
- GUARD for strings w/o any numbers


- inputs/outputs:
  - assuming appropriate input stringNums
    - output: true or false;
  - if invalid input
    - output: message

examples/test cases:

console.log(validate('1111')); // false
console.log(validate('8763')); // true
console.log(validate('111----1')); // ERROR message
console.log(validate('876asdf;lkj3')); // true
console.log(validate('876.....  asd3')); // true

// ERRORS
console.log(validate([])); //  input type
console.log(validate('[]')); //  input type
console.log(validate({a: 'ah'})); // input type
console.log(validate('')); // empty string
console.log(validate()); // no argument passed
console.log(validate(8763)); // wrong data type


state the question in my own words:
  ... transform an input string Number into a new string number, then sum that number and check if it meets our requirements (modulo 10)


roadmap for the passage of data:
  ... inputAsString -> array of digits
  ... [ transform array of digits ...] double and minus 9 if necessary
  ... get sum NUMBER
  ... return boolean

abstract algo + exploration:
  declare error message string

- GUARD for non-string inputs
- GUARD for input as undefined or null
- GUARD for empty strings
- GUARD for strings w/o any numbers in them

- CREATE array of digits from input (filter or match) CLEANING input
- TRANSFORM digits to meet requirements (from right to left, every other) (reverse & map)
- SUM the new array of digits (reduce)
- CHECK if this sum modulo 10 === 0;

remember to walk through examples + maybe build more test cases:

code:
 */
function validate(input) {
  const MSG = 'invalid input';
  if (typeof input !== 'string') {
    return MSG;
  }
  if (input === undefined || input === null) {
    return MSG;
  }
  if (input === '') {
    return MSG;
  }
  if (input.split('').every(chr => !chr.match(/[0-9]/))) {
    return MSG;
  }

  let digits = input.match(/[0-9]/g).reverse();

  const modifiedDigits = digits.map((dig, idx) => {
    if (idx % 2 === 0) {
      return Number(dig);
    }
    let curr = Number(dig) * 2;
    if (curr > 9) {
      curr -= 9;
    }
    return curr;
  });

  const sum = modifiedDigits.reduce((a, b) => a + b);
  return  sum % 10 === 0;
}

// HAPPY PATH
console.log(validate('1111')); // false
console.log(validate('8763')); // true
console.log(validate('111----1')); // false
console.log(validate('876asdf;lkj3')); // true
console.log(validate('876.....  asd3')); // true

// ERRORS
console.log(validate([])); //  input type
console.log(validate('[]')); //  input type
console.log(validate({a: 'ah'})); // input type
console.log(validate('')); // empty string
console.log(validate()); // no argument passed
console.log(validate(8763)); // wrong data type

// 39 MINUTES