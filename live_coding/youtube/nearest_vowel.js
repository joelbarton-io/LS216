/*
Given a letter, created a function which returns the nearest vowel to the letter.
If two vowels are equidistant to the given letter, return the earlier vowel.

- All letters will be given in lowercase.
- There will be no alphabet wrapping involved, meaning the closest vowel to "z" should return "u", not "a".

abcdefghijklmnopqrstuvwxyz

1) will the input always be guaranteed to be a single string chr? -> YES, input type and appropriate length are guaranteed
2) can the input every be the wrong type? How would we handle this situation? ->
3) what if input letter is a vowel itself? should we return the input letter or return the closest other vowel?
*/


/*
## INPUT: a letter
  - will letter always be a single character? or can it have multiple characters? how would we handle multichr input string?
## OUTPUT:
  - string closest vowel
## DATA FLOW:
  - string -> string
## REQUIREMENTS:
  - no alphabet wrapping, so the alphabet can be thought of as a one directional entity
  - if two vowels are equidistant to input letter, return the 'earlier' vowel
  - if input is vowel, return nearest vowel which is not the input letter

## EDGE CASES:
  - given letter is itself a vowel
  - given 'z', can only look left
  - given 'a', can only look right

## SUMMARY:
  - find the closest vowel to a given input chr (itself a vowel or consonant)
  - return that closest vowel

## STEPS:

GUARD for:
  - invalid input (datatype)
  - invalid input (length)

DECLARE an alphabet string abcdefghijklmnopqrstuvwxyz

get left and right groups from alphabet based on the index of the input string chr within alphabet string

if left is '':
  ignore left side
if right is '':
  ignore right side

search for vowels in left string and get the last element in the returned array unless the return value is null
search for vowels in right string and get first lement in returned array unless the return value is null

get abs diff between chr code for input letter and chr code for found vowel (if found)
  do this for both sides and return the smaller chr with the shorter distance
  or, if the distances are equal, return the one with the smaller chr code

*/
console.log(closestVowel('c')) // 'a', the pair of 'a' and 'e' are both equally close to our given input.
console.log(closestVowel('b')) // 'a'
console.log(closestVowel('o')) // 'i' input is vowel & closest vowel(s) are equidistant
console.log(closestVowel('z')) // 'u' no wrapping
console.log(closestVowel('a')) // 'e'

function closestVowel(l) {
  if (typeof l !== 'string') return 'invalid input type';
  if (l.length !== 1) return 'invalid input length';

  const alph = 'abcdefghijklmnopqrstuvwxyz';
  const lIndex = alph.indexOf(l);

  const leftSide = alph.slice(0, lIndex)
  const rightSide = alph.slice(lIndex + 1);

  if (leftSide !== '' && rightSide !== '') {
    const vowelsLeft = leftSide.match(/[aeiou]/g);
    const closestLeft = vowelsLeft[vowelsLeft.length -1];

    const vowelsRight = rightSide.match(/[aeiou]/g);
    const closestRight = vowelsRight[0];

    const leftDiff = Math.abs(closestLeft.charCodeAt(0) - l.charCodeAt(0))
    const rightDiff = Math.abs(closestRight.charCodeAt(0) - l.charCodeAt(0))

    if (leftDiff === rightDiff) {
      return closestLeft;
    } else if (leftDiff < rightDiff) {
      return closestLeft;
    } else if (leftDiff > rightDiff) {
      return closestRight;
    }
  } else if (leftSide === '') { // if 'a'
    const vowelsRight = rightSide.match(/[aeiou]/g);
    const closestRight = vowelsRight[0];
    return closestRight
  } else if (rightSide === '') { // if 'z'
    const vowelsLeft = leftSide.match(/[aeiou]/g);
    const closestLeft = vowelsLeft[vowelsLeft.length -1];
    return closestLeft;
  }
}

// 'abcdefghijklmnopqrstuvwxyz'
// input = 'l'
// left = 'abcdefghijk'
// right = 'mnopqrstuvwxyz'

// vowelsLeft = left.match(/[aeiou]/g);
// closestVowel = vowelsLeft[vowelsLeft.length - 1];
// console.log(closestVowel.charCodeAt(0), input.charCodeAt(0))

