/* understanding the problem part 1
---------------------------------------------------------------
questions:
  1) will the input string always just be letters and a single word? (no non-alphabetical characters) Assuming YES
  2)

input : word string

output : boolean

test cases :

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // invalid input
console.log(isBlockWord('&$^'));       // invalid input
console.log(isBlockWord(12345));       // invalid input
console.log(isBlockWord([]));       // invalid input

requirements :
  - case insensitive; make all input letters uppercase?
---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

roadmap for P.O.D. :

in my own words...
  ...""...


---------------------------------------------------------------
*/
/* steps
---------------------------------------------------------------

mental model :

- array of string 'blocks' (binary letter groups)

abstract algo & method exploration :

DECLARE blocks object; initialize to dictionary of pairs
ITERATE over input string checking if the blocks object contains the value
  IF present, DELETE that property
  IF NOT, return false

return true;


(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* testing
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function isBlockWord(word) {
  if (typeof word !== 'string') {
    return 'invalid input type';
  }

  if (word.length === 0) {
    return 'cannot be empty string';
  }

  word = word.toUpperCase()

  if (word.split('').some(chr => chr.match(/[^A-Z]/))) {
    return 'invalid character present';
  }

  const blocks = {
    BO: true, XK: true, DQ: true, CP: true, NA: true,
    GT: true, RE: true, FS: true, JW: true, HU: true,
    VI: true, LY: true, ZM: true,
  };

  for (let i = 0; i < word.length; i++) {

    const letter = word[i];
    const myRegexp = new RegExp(letter);
    const toDelete = Object.keys(blocks).find(el => el.match(myRegexp));

    if (toDelete === undefined) {
      return false;
    }

    delete blocks[toDelete];
  }

  return true;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true
console.log(isBlockWord(''));       // invalid input
console.log(isBlockWord('&$^'));       // invalid input
console.log(isBlockWord(12345));       // invalid input
console.log(isBlockWord([]));       // invalid input

// 39:30
