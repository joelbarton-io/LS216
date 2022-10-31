/*

?:
1) will the input always only contain positive integers? Yes
2) from 0-9 only? - no
3) will the input always be string? - no
4) can the input be only an empty string with spaces? - yes
5) will there always be only one number present in each string?
  - No, there can be multiple numbers in a word, take the first occurence
6) can the input have the incorrect numbers?
7) are 'words' separated by a single space? YES
8) for a valid case, should the numbers in the words form a consecutive ascending chain? NO, can be invalid chain
9) can the numbers be negatives? NO
input: str
output: rearranged string without any numbers in it unless those numbers are the sole chr in the 'word'



rules of the problem (validate with test-cases):
- input can be an empty string, or a string with no words, or not a string at all
- words can contain multiple numbers, should always choose first number encountered
- if a word has no alphabetical chrs but contains a number, place the number where it should be if that 'word' had letters
- numbers should be consecutive, ascending; if not then the input is invalid

shape of the problem:

string ->
... validate input (correct type, has chrs)
... clean input (leading/trailing whitespace)
... traverse string as array of 'words'
... check if it contains a number
new string

identify sub-problems: (this step takes too long)

VALIDATION & CLEANING of input
CHECKING that each 'word' has a number contained in it
CREATE a hash with the number as the value and the cleanedWord as the key
TRANSFORM the input into a new string with the words in the correct order





steps:

GUARD against:
  - invalid inputs ({}, non-strings, etc)
  - 'empty' strings and empty strings
  - sentences with 'words' that don't contain some integer value in them
  - sentences with all number words are invalid

CLEAN input string

CREATE hash object
TRAVERSE input string as array of 'words'
  populate hash object with clean_word : number value

TRAVERSE sorted values of wordsHash
  check that each consecutive number is one greater than the previous
    if not, invalid!

from WordsHash, create array of arrays,
sort by number value,
map the array of arrays into an array of words,
join into result string

*/


function rearrange(input) {
  const ERR = 'invalid input';
  if (typeof input !== 'string') return ERR;

  let cleanInput = input.trim(/ /, '');
  if (cleanInput.length === 0 || cleanInput.trim(/ /, '').length === 0) return 'empty string';
  if (!cleanInput.split(' ').every(word => word.match(/[a-z]+/i))) return ERR; // every word must contain a letter
  if (!cleanInput.split(' ').every(word => word.match(/[\d]+/))) return ERR; // every word must contain a number

  const wordsHash = makeHash(cleanInput);
  const sortedEntries = Object.entries(wordsHash).sort(([,a], [,b]) => a - b);

  if (!allConsecutiveAscending(sortedEntries)) return ERR;
  return sortedEntries.map(arr => arr[0].replace(/\d+/, '')).join(' ');
}

function allConsecutiveAscending(sortedEntries) {
  for (let i = 1; i < sortedEntries.length; i++) {
    const prevNum = Number(sortedEntries[i - 1][1]);
    const currNum = Number(sortedEntries[i][1]);
    if (prevNum + 1 !== currNum) return false;
  }

  return true;
}

function makeHash(cleanInput) {
  return cleanInput.split(' ').reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = curr.match(/\d+/)[0];
      return acc;
    }
  }, {});
}

/* console.log(rearrange("is2 Thi1s T4est 3a"));// ➞ "This is a Test"
console.log(rearrange("    as1d     "));// ➞ 'asd'
console.log(rearrange("is2 Thi1s2 T4es0t 3a"));// ➞ "This is a Test"
console.log(rearrange("is2 Thi1s T5est 3a"));// ➞ ERROR
console.log(rearrange("is1 Thi1s T1est 1a"));// ➞ ERROR
console.log(rearrange(""));// ➞ ''
console.log(rearrange("         "));// ➞ ''
console.log(rearrange([]));// ➞ ERROR
console.log(rearrange({}));// ➞ ERROR
console.log(rearrange());// ➞ ERROR
console.log(rearrange("2 1 4 3"));// ➞ ERROR
console.log(rearrange("2a 1 4 c3"));// ➞ ERROR
console.log(rearrange("is Thi1s T2est a"));// ➞ ERROR

 */
console.log(rearrange("4of Fo1r pe6ople g3ood th5e the2"))
// ~> 50:30