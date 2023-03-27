/*
Write a function, primeNumberPrinter,
that prints all prime numbers present
as substrings in a given string.

1) can we always assume that the input is in fact a STRING?
2) will the input string always be of length > 0
  - will the input string always have some string integers?
3) will the input string ever have signed integer? Yes, but negative numbers are never primes
4)
*/
// primeNumberPrinter("")); // []
// primeNumberPrinter("a04bc-2k13d")); // [2, 13]
// primeNumberPrinter("a4.3bc2k13d")); // [2, 3, 13]
// primeNumberPrinter("aa;sldkfjzxcv.weor")); // []
// primeNumberPrinter("a4bc2k13d")); // [2, 13]
// primeNumberPrinter("a4bc2k130d")); // [2]
// primeNumberPrinter("a4bc2k13Infinity")); // [2, 13]
// primeNumberPrinter("a4bc2k13NaN")); // [2, 13]
// primeNumberPrinter("a4bc2k130")); // [2]
// primeNumberPrinter("097")); // [97]

/*

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
- primes start at 2

INPUT:
- string (can be empty)
  - can also contain no "number" string characters
OUTPUT: an array (sorted in ascending? or in order of when they were encountered?) of prime numbers

DATA FLOW:
string -> array of substrings -> array of numbers which are prime


REQUIREMENTS:
  PRIME NUMBER: any number that is only divisible by itself and 1 (not including 1)
  - never negative
  - must be integers

  - if curr chr in string is a number chr we want to extract it for later unless the next chr is also a num chr
    - if this is the case, we want to build that number up until the next chr is Not a number chr

EDGE CASES:
  - empty input string
  - 'empty' input string
  - input string without any number characters
  - input string with Special number types (NaN, infinity, etc..)

  - octal numbers?

SUMMARY:
- generate a list of all the number substrings (with match)
- based on this list, determine which elements as numbers are prime


STEPS:

GUARD against: invalid input type
EARLY return for empty input string
  - ''
  - '   '
  - 'asdfjkl;qweuriop'

EXTRACT number substrings from input string (match)

return filter substrings by if they are prime or not

if is prime funtion: (string num)
  convert input into a number
  get range of numbers from 1 upto not including input as number
    number % curDiv === 0 return false
    else true
  if number is greater than 1 and the number is only divisible by itself and 1, then it's a prime number and
  should be returned from the helper

*/
/*
function primeNumberPrinter(input) {
  const regex = /[0-9]+/g;
  if (typeof input !== 'string') return 'invalid input type';
  if (!input.match(/[0-9]/g)) return [];

  const nums = input.match(regex);

  const allPrimes = [];


  // return nums.filter(isPrime).map(Number);
}

function processCandidate(stringNum) {
  if (isPrime(stringNum)) return [Number(stringNum)];

  const candidates = [];
  for (let i = 0; i < stringNum.length; i++) {
    for (let j = i + 1; j < stringNum.length; j++) {
      candidates.push(stringNum.slice(i, j))
    }
  }
  console.log(candidates);


}

function isPrime(strNum) {
  const candidate = Number(strNum);
  for (let div = 2; div < candidate; div++) {
    if (candidate % div === 0) return false;
  }
  return true;
}

console.table(primeNumberPrinter("")); // []
console.table(primeNumberPrinter("aa;sldkfjzxcv.weor")); // []
console.log(primeNumberPrinter("a04bc-2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4.3bc2k13d")); // [3, 2, 13]
console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4bc2k130d")); // [2]
console.log(primeNumberPrinter("a4bc2k13Infinity")); // [2, 13]
console.log(primeNumberPrinter("a4bc2k13NaN")); // [2, 13]
console.log(primeNumberPrinter("a4bc2k130")); // [2]
console.log(primeNumberPrinter("097")); // [97]
*/