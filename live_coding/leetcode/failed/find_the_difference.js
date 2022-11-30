/*
## EXAMPLES/EDGE CASES:
  - where `s` is an empty string
  - where there are duplicate characters present in `s` or `t`

## INPUT: two strings `s` and `t`
  - `s`'s length can be 0 ('')
  - `t`'s length is always 1 greater than `s`'s length
  - consist of lowercase English letters.

## INTERMEDIATE:
// s = "abcde"
// t = "abcdee"
//.         ^



  {
    a: '0',
    b: 0,
    c: 0,
    d: 0,
    e: 0,
  }

## OUTPUT:
  - the added chr in str `t` -> 1 chr

## SUMMARY:
  - we want to find the additional character in `t` which was not present in `s`

## STEPS:

GUARD for when `s` is length 0 -> return `t`'s value

TRAVERSE chrs of `s` and create a dictionary of the characters with the respective occurence counts represented as numbers


TRAVERSE chrs of `t` and check to see if :
  chr is present in `occurences`:
    if present:
      if value > 0:
        decrement chr's value
      if value is === 0:
        return curr chr in `t`

*/

var findTheDifference = function(s, t) {
  for (let i = 0; i < s.length; i++) {
    t = t.replace(s[i], '');
  }
  return t;



  // if (s.length === 0) return t;

  // const sOcc = {};

  // for (let i = 0; i < s.length; i++) {
  //   const currChr = s[i];

  //   if (sOcc[currChr]) {
  //     sOcc[currChr]++;
  //   } else {
  //     sOcc[currChr] = 1;
  //   }
  // }

  // for (let j = 0; j < t.length; j++) {
  //   const chr = t[j];

  //   if (sOcc[chr] === undefined || sOcc[chr] === 0) return chr;

  //   if (sOcc[chr]) {
  //     sOcc[chr]--;
  //   }
  // }
};



console.log(findTheDifference('abcde','abcdee'))