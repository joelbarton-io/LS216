
function firstNonRepeatingLetter(input) {
  console.log(input);
  /*
  ## PROBLEM:
    return first non-repeating letter from the string input or an empty string

  ## RULES:
    - case matters!
    - upper and lowercase letters are considered the SAME character but we have to preserve case of first occurence!

  ## EXAMPLES/EDGE CASES:
    - empty string
    - all repeating
    - no repeating characters


  ## INPUT:
    - string input (length 0 -> ?)
    - upper and lowercase letters, should we expect symbol/number characters?

  ## INTERMEDIATE:
  input: "streSs"
          ^
  `chrOcc` = {
      't' : 1,
      'r' : 1',
      'e' : 1,
    } -> [['t' : 1], ['r' : 2'], ['e' : 3]]

  ## OUTPUT:
    - string letter or empty string or error message

  ## SUMMARY:

  ## STEPS:
  GUARD for non-string input
  GUARD for empty string input (length < 2)

  DECL `chrOcc` object

  TRAVERSE input string's chrs with for loop
    check if that character exists as a key in `chrOcc` object (either upper/lowercase)
      and if it does, increment that value,
    otherwise:
      add key: value pair to `chrOcc`

  with `chrOcc`
    - check that it has an property with a value > 1 : if not, then return empty string
    filter object for only those keys which have value of 1
    - check that there is a property with a value === 1

  Based on this new array of characters:
    - create array of arrays with first indexof that chr as value and chr as key
  */

  if (typeof input !== 'string') return 'invalid input type!';
  if (input.length === 0) return '';
  if (input.length === 1) return input;

  const chrOcc = makeOccObj(input);
  let hasRepeating = false;

  for (let key of Object.keys(chrOcc)) {
    if (chrOcc[key] > 1) hasRepeating = true;
  }

  if (!hasRepeating) return '';

  const chrOccArr = Object.entries(chrOcc);
  const onlyOnce = chrOccArr.filter(([_,count]) => count === 1);

  if (onlyOnce.length === 0) return '';

  return onlyOnce.map(([chr, _]) => {
    return [chr, input.indexOf(chr)];
  }).sort(([,a], [,b]) => a - b)[0][0];
}
function makeOccObj(input) {
  const chrOcc = {};

  for (let i = 0; i < input.length; i++) {
    let chr = input[i];

    if (chrOcc[chr.toLowerCase()]) {
      chrOcc[chr.toLowerCase()]++;
    } else if (chrOcc[chr.toUpperCase()]) {
      chrOcc[chr.toUpperCase()]++;
    } else {
      chrOcc[chr] = 1;
    }
  }

  return chrOcc;
}
