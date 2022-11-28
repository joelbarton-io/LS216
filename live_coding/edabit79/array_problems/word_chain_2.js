'use strict';

/* a word-chain is an array of words, where the next word is formed by either:

Changing exactly one letter from the previous word.
Adding or subtracting one letter. */
/*

?:

1) How should I handle empty strings?
2) Will the input always be an array? (of strings?)
3) What about a one element array containing one string element?
4)


in: array of strings
out: boolean or error message


rules:

  WORD-CHAIN:
    - next word MUST be formed by:
    ... changing ONE letter from previous word
                        OR
    ... adding or subtracting ONE letter

    - input can be invalid: wrong input type, wrong element type, single element array

mental model:

abstract:
  GUARD against invalid inputs

  TRAVERSE input array from 2nd element:
    COMPARE previous word to current word:
      IF (ChangeOne(prev, curr)) ||
      IF (DeleteOne(prev, curr))
        -> continue with iteration;
  END

  if no early return, return true;

-----


1. COMPARE :

  if lengths are the same:
    declare a differenceCounter
    traverse lengths checking if curr_char is different, increment differenceCounter
    return differenceCounter <= 1

  if lengths are diff:
    if lengthDiff > 1 RETURN FALSE
    if length Diff = 1:

    check to see if all chrs in shorted are present in longer (predicate)
    if yes return true
    if no return false

3. DeleteOne: (predicate)
  compare two strings to see if we can form curr from previous by deleting one character

code:
*/

function canForm(prev, curr) {
  const prevLeng = prev.length;
  const currLeng = curr.length;

  if (Math.abs(prevLeng - currLeng) > 1) return false;

  if (Math.abs(prevLeng - currLeng) === 1){
    const shortString = prevLeng < currLeng ? prev : curr;
    const longString = prevLeng < currLeng ? curr: prev;

    return shortString.split('').every(chr => longString.includes(chr));
  }

  if (prevLeng === currLeng) {
    // same length so change 1
    let diffCount = 0;

    for (let i = 0; i < prev.length; i++) {
      if (prev[i] !== curr[i]) {
        diffCount += 1;
      }
    }

    return diffCount === 1;
  }
}

function isWordChain(input) {
  const ERROR = 'invalid input';

  if (!input) return ERROR;
  if (!Array.isArray(input)) return ERROR;
  if (input.length < 2) return ERROR;
  if (input.some(el => typeof el !== 'string')) return ERROR;

  for (let i = 1; i < input.length; i++) {
    const prev = input[i - 1];
    const curr = input[i];

    if (!canForm(prev, curr)) return false;
  }

  return true;
}





console.log(isWordChain(["flew", "flaw", "flan", "flat", "fat", "rat", "rot", "tot"])); // true
console.log(isWordChain(["row", "crow", "crown", "brown", "brawn"])); // true
console.log(isWordChain(["row", "crow"])); // true
console.log(isWordChain(["row", "cow"])); // true
console.log(isWordChain(["row", "ow"])); // true
console.log(isWordChain(["roow", "oow"])); // true
console.log(isWordChain(["", "o"])); // true
console.log(isWordChain(["row", "crow"])); // true


console.log(isWordChain(["row", "o"])); // false
console.log(isWordChain(["run", "runny", "bunny"])); // false
console.log(isWordChain(["meek", "meet", "meat", "teal"])); // false


console.log(isWordChain(["row"])); // ERROR MESSAGE
console.log(isWordChain([])); // ERROR MESSAGE
console.log(isWordChain({})); // ERROR MESSAGE
console.log(isWordChain([1, 2, 3])); // ERROR MESSAGE
console.log(isWordChain({})); // ERROR MESSAGE


