/*
Create a function that identifies the very first item that has recurred in the string argument passed.
It returns the identified item with the index where it first appeared and the very next index where it
resurfaced -- entirely as an object; or as an empty object if the passed argument is either null,
undefined, empty string, or no recurring item exists.
/*

/*


input: string (can be others like either null, undefined, empty string)
output: object (can be empty if invalid input)

questions/clarifications:
- does case matter? NO!  case insensitive!

- "item" means 1 chr, correct? -> YES (to make it harder it could be strings of greater lengths)

core path rules:
- input can be non string or empty string
- the returned object has one property { recurringChr : [firstSeenIndex, nextSeenIndex] } || {}
- it's possible that no recurring characters exist, in this case we return an empty object
- case insensitive!


mental model:
- Given an input.
- check that it is a valid input

- traverse the valid string input with index of current character
- determine the "First recurring character" and store the indices of the first and next occurence of that chr
- return result

abstract algo :


dry run:


{
  a: 0, // does exist!
  b: 1
  c: 2,
  d: 3,
  e: 4,
}

-> { a: [0, 5] }
*/

/*
GUARD against:
  - non string inputs
  - empty string input

STANDARDIZE case of input string
CREATE empty object : REC_CHR_IDX

TRAVERSE input string chrs with index (for...)
  foreach chr :

    CHECK if REC_CHR_IDX[chr] exists

    if it does exist, then we've found our first recurring chr

      - return out with obj { curr_chr: [ Number(REC_CHR_IDX[chr]]), curr_index ] }

    else, curr chr is first occurrence of that chr so add this chr and index to REC_CHR_IDX
      - REC_CHR_IDX[chr] = String(curr_index);

  if get to end of string iteration and no return yet, return empty obj

 */

function recurIndex(input) {
  const REC_CHR_IDX = {};
  if (typeof input !== 'string') return REC_CHR_IDX;
  if (input.length === 0) return REC_CHR_IDX;

  const stdrInput = input.toLowerCase(); // standardizing input string's case

  for (let currIdx = 0; currIdx < stdrInput.length; currIdx++) {
    const chr = stdrInput[currIdx];


    if (REC_CHR_IDX[chr]) {
      const result = {};
      result[chr] = [ Number(REC_CHR_IDX[chr]), currIdx ];
      return result;
    } else {
      REC_CHR_IDX[chr] = String(currIdx);
    }
  }

  return {};
}



  console.log(recurIndex('abcdea')) // { a: [0, 5] }
  console.log(recurIndex('Abcdea')) // { a: [0, 5] }
  console.log(recurIndex('aba')) // { a: [0, 2] }
  console.log(recurIndex('abcdefgbaaa')) // { b: [1, 7] }
  console.log(recurIndex('acdefgbaaa')) // { a: [0, 7] }
  console.log(recurIndex('aBcdEfg'))  // {} (bc no recurring item)


  console.log(recurIndex(''))  // {}
  console.log(recurIndex([]))
  console.log(recurIndex(null))
  console.log(recurIndex(undefined))
  console.log(recurIndex({}))
  console.log(recurIndex())

  // ~> 34:52
