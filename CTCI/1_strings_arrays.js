/* 1.1 Is unique:
Implement an algorithm to determine if a string has all unique characters.

function isUnique (string) { // boolean return
  const HASH_TABLE = {};

  for (let i = 0; i < string.length; i++) {
    let key = string[i];
    if (key in HASH_TABLE) return false;
    HASH_TABLE[key] = true;
  }

  return true;
}
unique('abcdefghi')

What if you cannot use additional data structures? (no hashtable)


function isUnique(string) { // no additional ds
  let seen = '';

  for (let i = 0; i < string.length; i++) {
    let re = new RegExp(string[i]);
    console.log(re)
    if (seen.match(re)) return false;

    seen = seen.concat(string[i]);
  }

  return true;
}

Gayle's solution:

function =

*/
/* 1.2 Check permutation.

Given two strings, write a method to decide if one is a permutation of the other.

assumptions: always same length, case does matter

A = 'acb'
B = 'cab'

function checkPermutation(a, b) {
  if (a.length != b.length) return false;

  return a.split('').sort().join('') === b.split('').sort().join('');
}

What if they're different lengths? -> should do a recursive, dynamic solution with these at some point!

*/
/* 1.3 URLify
Write a method to replace all spaces in a string with "%20".
You may assume that the string has a fish in space at the end, to hold the additional characters,
and that you were given the quote, true" length of the string.

function url(input) {
  const SPACE = '%20';
  const RESULT = input.trim().split('');

  for (let i = 0; i < RESULT.length; i++) {
    let chr = RESULT[i];

    if (chr === ' ') {
      RESULT[i] = SPACE;
    }
  }

  return RESULT.join('');
}


console.log(url('Mr John Smith    ') === "Mr%20John%20Smith")
*/
/* 1.4 Palindrome Permutation (pg. 91)

if the provided string's chrs can be arranged into a palindrome (quality 1)
if there are multiple permutations of a palindrome given the string chars

special case: input string is of length 1 (immediately false)

min 3 letter chrs in string

abc -> not palindrome (3 odd counts)

even length:
- abba, baab
- bacdab (can only ONE odd count)

odd length
tat -> is pal, but no other permutations

aaaabbbb -> {a: 4, b: 4}
aabbbbaa, bbaaaabb, baabbaab

aabb -> {a: 2, b: 2}
abba, baab

aaa


tacocat -> { t: 2, a: 2, c: 2, o: 1 }

atcocta

function palindromePermuation(input) {
  let clean = input.toLowerCase().match(/[a-z]/g) || [];

  if (clean.length < 3) return false; // potentially a pal, but no permutations

  const tally = (a, c) => {
    (c in a) ? a[c]++ : a[c] = 1;
    return a;
  }

  const TBL = clean.reduce(tally, {});
  let oddCount = 0;

  for (let key of Object.keys(TBL)) {
    if (TBL[key] % 2 === 1) oddCount++;
    if (oddCount > 1) return false;
  }

  return true;
}

let phrase = 'Taco Cat!';
console.log(palindromePermuation(phrase));
*/
/* 1.5 One Away

check length diff (this will guard for some early returns, determine course of action)
1. if length diff > 1 -> false
2. if length diff === 1 -> insert or delete (no replace)
3. if length diff === 0 -> replace only

turn the two strings into chr_arrays

start simple; check each condition
1. insert
  - find index and chr needed to make the strings the 'same'
2. delete
  - find the index and chr to remove to make the strings the 'same'


3. replace
  - find 'missing' chr
  - find the index of the odd one out character, change out

maintain some 'diff count'
diffCount = 1
idx_A = 3
idx_B = 2
A ="pale"
     ^
B ="ple"
     ^


function oneAway(from, to) {
  let lengDiff = Math.abs(from.length - to.length);
  if (lengDiff > 1) return false;

  if (lengDiff === 1) { // insert or delete
    return insertOrDelete(from, to) === 1;
  } else { // replace
    let res = replace(from, to)
    return res === 0 || res === 1;
  }
}

function replace(from, to) {
  let diffCount = 0;
  let idx = 0;
  while (diffCount < 2 && idx < to.length) {
    if (from[idx] !== to[idx]) {
      diffCount++;
    }
    idx++;
  }
  return diffCount;
}

function insertOrDelete(from, to) {
  let diffCount = 0;
  let to_idx = 0
  let from_idx = 0;

  while (diffCount < 2 && (to_idx < to.length || from_idx < from.length)) { // had an issue with the right side condition not being combined as an expression
    if (from[from_idx] === to[to_idx]) {
      from_idx++;
      to_idx++;
    } else {
      diffCount++;
      // changes index of longer string
      (to.length > from.length) ? to_idx++ : from_idx++; // this was tricky to figure out initially
    }
  }
  return diffCount;
}

console.log(oneAway('pale', 'ple'));   // one delete
console.log(oneAway('pales', 'pale')); // one insert
console.log(oneAway('pale', 'bale'));  // one replace
console.log(oneAway('pale', 'pale'));  // identical
console.log(oneAway('pale', 'bake'));  // too diff
console.log(oneAway('pale', ''));      // string lengths diff too large

key takeaways:
  - always attempt to understand the meaning of operations, what are we seeking to know?
  - it's always a trade off between maintainability and simplicity and readability and modularization

}
*/
/* 1.6 String Compression

one pass building a single string

two pointers?
one counter?

count = 1
counts = []
temp = "a"

curr = "a";

aabccccaaad
 ^

function compress(string) {
  let temp = string[0];
  let count = 1;
  const COUNTS = [];

  for (let i = 1; i < string.length; i++) {
    let curr = string[i];

    if (curr === temp.slice(-1)) {
      count++;
    } else {
      temp = temp.concat(curr);
      COUNTS.push(count);
      count = 1;
    }

    if (i === string.length - 1) {
      COUNTS.push(count);
    }
  }

  let newString = COUNTS.map((count, i) => temp[i] + count).join('');
  return (newString.length >= string.length) ? string : newString;
}


initial solution didn't account for:
  1. the fact that both a) being at the end of the string and b) having two non-equal consec
  elements are terms for when we should concatenate to `temp` and zeroing out `count`
  2. had unnecessary additional space

final solution:

function compress(string) {
  let temp = ""
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    count++;

    if (string[i] != string[i + 1] || i + 1 === string.length) {
      temp += string[i] + count; // O(logn) or O(n) operation
      count = 0;
    }

    if (temp.length >= string.length) {
      return string;
    }
  }

  return temp;
}

console.log(compress("abcdefg"));
*/
/* 1.7 Rotate Matrix (tricky! got stuck)

questions:
  - rotating 90 degress clockwise or anti-clockwise? (going to assume clockwise)
  -
[
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1],
  [0, 0, 1, 1]
]

can it be done in place? (e.g. mutating the original array)
*/
/* 1.8 Zero Matrix (easy)

traverse each individual matrix row O(n * m)

if el is zero, keep row and column idx in two separate arrays

then traverse rows

traverse columns

[
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
]

mutates to...

[
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [1, 0, 1, 1],
  [1, 0, 1, 1]
]
function zeroMatrix(matrix) {
  const ROW_I = {}
  const COL_I = {};

  matrix.forEach((row, rowIdx) => {
    row.forEach((el, colIdx) => {
      if (el === 0) {
        ROW_I[rowIdx] = true;
        COL_I[colIdx] = true;
      }
    });
  });

  // fill out rows
  matrix = matrix.map((row, rowIdx) => {
    return (rowIdx in ROW_I) ? row.map(_ => 0) : row;
  });

  // fill out cols
  matrix.forEach((row, rowIdx) => {
    row.forEach((el, colIdx) => {
      if (colIdx in COL_I) {
        matrix[rowIdx][colIdx] = 0;
      }
    });
  });

  return matrix;
}

const matrix = [
  [1, 0, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

console.log(zeroMatrix(matrix));
*/
/* 1.9 String Rotation


only checking if the entirety of TWO is a substring of ONE

requirements:
- limited to a SINGLE call to the imaginary method isSubtring()

intuitions:
- TWO's length must be <= ONE's length

function stringRotation(one, two) {
  if (two.length > one.length) return false;
  let oneFrag = '';
  let removeIdx;

  for (let i = 0; i < one.length; i++) {
    if (two.includes(oneFrag)) {
      oneFrag += one[i]

    } else {
      removeIdx = i - 1;
      oneFrag = oneFrag.slice(0, oneFrag.length - 1)
      break;
    }
  }

  if (two.indexOf(oneFrag) === two.lastIndexOf(oneFrag)) {
    two = oneFrag + two.slice(0, two.length - removeIdx);

    return isSubstring(one, two)
  } else {
    return "i'm not sure what happens here...";
  }
}

function isSubstring(one, two) {
  return [one, two];
  return one === two;
}

function optimalRotate(one, two) {
  return isSubstring(one + one, two);
}

let two = 'erbottlewat'
let one = 'waterbottle'

console.log(optimalRotate(one, two));



two = 'erbottlewat'

oneFrag = 'wa'
one = 'waterbottle'
          ^
I FEEL SO DUMB!
*/
