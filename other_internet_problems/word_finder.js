/*
In this kata you have to extend the dictionary with a method, that returns a
list of words matching a pattern. This pattern may contain letters (lowercase)
and placeholders ("?"). A placeholder stands for exactly one arbitrary letter.
*/


/*
?:
1) would a space character in a string be considered a valid letter? NO, spaces are not valid chrs
  - input array of strings' elements don't have spaces, they only contain (lowercase) letters + '?'
2) can the elements in the input array ever contain the '?' character?
  - the elements in the input array CAN contain the `?` character, treat it like any other character.
3) can elements in the input array be empty strings?

-> i: an array of string words, some string
<- o: array containing some strings

explicit rules:
  - input pattern is always lowercase
  - '?' : serves as a wildcard character which matches any single lowercase chr in any of the words
    contained in the provided array

implicit rules:
  - '?' can also just be a normal character within the context of elements in the input array

mental model:

      we would like to select those elements in the input array (arg 2) which match the given pattern (arg 2)

sub-problems:

- input validation and guard for invalid datatypes or invalid (correctly typed) inputs
  TRANSFORM input array to guard against sparse arrays ([...inputArr].filter(el => el !== undefined))
  ENSURE arg 2 is of type string

TRAVERSE input array of elements, and for each element (filter)
  check if we can successfully match the current element with the given pattern (helper)

  if successful match:
    select this element
  otherwise:
    continue to next element in the input array

match? function: (currString, pattern) -> boolean
  if currString.length !== pattern.length, immediately return false

  TRAVERSE string elements:
    check to see if the curr character either:
      matches exactly (e.g. 'a' : 'a')
      OR
      curr chr is ?
        continue with string traversal

*/

function getMatchingWords(words, pattern) {
  if (!Array.isArray(words) || typeof pattern !== 'string') return 'invalid input!';
  if (words.length === 0) return 'empty array!';
  if (words.some(word => typeof word !== 'string' || word === '')) return 'invalid elements!';

  const cleanedInput = [...words].filter(word => word !== undefined);
  return words.filter(word => {
    return matchPattern(word, pattern)
  });
}

function matchPattern(word, pattern) {
  if (word.length !== pattern.length) return false;

  for (let i = 0; i < word.length; i++) {
    const chr = word[i];
    const patternChr = pattern[i];

    if (chr !== patternChr && patternChr !== '?') return false;
  }

  return true;
}

// const sparseArr = ['banana'];
// sparseArr.length = 3;
// var fruits = ['banana', 'apple', 'papaya', 'cherry'];

// console.log(getMatchingWords(fruits, 'lemon'))     // must return []
// console.log(getMatchingWords(fruits, 'cherr??'))   // must return []
// console.log(getMatchingWords(fruits, '?a?a?a'))    // must return ['banana', 'papaya']
// console.log(getMatchingWords(fruits, '??????'))    // must return ['banana', 'papaya', 'cherry']
// console.log(getMatchingWords(sparseArr, 'ban??a'))  // ['banana]
// console.log(getMatchingWords(fruits, 'ap le'))      // []
// console.log(getMatchingWords(fruits, '?a?a?a'))    // must return ['banana', 'papaya']

// var otherFruits = ['banan?', 'apple', 'papaya'];
// console.log(getMatchingWords(otherFruits, '?a?a??'));    // must return ['banan?', 'papaya']

// console.log(getMatchingWords([], 'lemon'));         // ERROR message
// console.log(getMatchingWords([1, 'hello'], 'lemon'));         // ERROR message

// console.log(getMatchingWords('lemon', ['lemon']));  // ERROR message
// var empty = ['   ', '', '     '];
// console.log(getMatchingWords(empty, '???')) // ['   ']



