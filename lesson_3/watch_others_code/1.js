/* Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special characters such as spaces, dash, dot, and parentheses that should be ignored. */

/* requirements:
  - ignore all non-digit characters
  - inputs of the wrong length of numbers RETURN 10 zeros
    - 10 is the correct length,
      - UNLESS first number is a 1
      - then ignore first number and just use the other 10
  -
i:
  - string that contains numbers which are a phone Number

o:
  - a cleaned string representing the number

problem: transform a dirty string phonenumber into a valid phone number or a default string rep number

DS: strInput ... [iteration op] ... strOutput

steps:
  - guard against non-string inputs
  - guard length 0 strings; return default
  - guard for when there are no nums in the input

  - filter out non-int chars (numbers only)
  - get length of nums_only ds
  - if length is more than 11 or less than 10, return default value

  - right length:
    - if length 11
      - check if first number is 1
        - if it is 1, slice from 1th index and join
        - if it is not 1, return default
    - length = 10
      join and return
*/

function cleanNumber(input) {
  const DEFAULT = '0000000000';
  if (typeof input !== 'string') {
    return DEFAULT;
  }
  if (input === '') {
    return DEFAULT;
  }
  if (input.split('').every(el => !/[0-9]/.test(el))) {
    return DEFAULT;
  }

  const justNums = input.match(/[0-9]/g);
  const leng = justNums.length;

  if (![10, 11].includes(leng)) {
    return DEFAULT;
  }

  if (leng === 11) {
    if (justNums[0] === '1') {
      return justNums.join('').slice(1);
    }
    return DEFAULT;
  }

  return justNums.join('');
}

console.log(cleanNumber('0123456789')) // '0123456789'
console.log(cleanNumber('012-34....x56,,,789')) // '0123456789'
console.log(cleanNumber('312 2iiii21 ***4----*466'))
console.log(cleanNumber('12345678901'))
console.log(cleanNumber('23456789012'))
console.log(cleanNumber('01asdfalskdjf789...    ')) // '000 000 0000'
console.log(cleanNumber('123456123456789456123')) // '000 000 0000'
console.log(cleanNumber([])) // '000 000 0000'
console.log(cleanNumber(1234567890)) // '000 000 0000'
console.log(cleanNumber(null)) // '000 000 0000'
console.log(cleanNumber('')) // '000 000 0000'
console.log(cleanNumber('          ')) // '000 000 0000'
console.log(cleanNumber('asdfj;-=*')) // '000 000 0000'
