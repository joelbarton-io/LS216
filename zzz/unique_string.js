/*
There is an array of strings. All strings contains similar letters except one. Try to find it!
Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.
It’s guaranteed that array contains more than 2 strings.

INPUT:
  - array of strings (always 3 or more strings)
  - string elements may contain spaces; they are insignificant ('    ' is == to '')
  - case doesn't matter (?); e.g. 'a' == 'A'

OUTPUT:
  - unique string || empty string

REQUIREMENTS:
  - should standardize case for all string elements

EDGE CASES:
  - no unique string present in input array
  - empty strings vs non empty string (will always be the unique (return value))

STEPS:

1. standardize case for all elements and remove spaces (map)
2. create array of set objects, transform to array of lengths (map) (size)


*/

function findUniq(words) {
  const allLowercase = words.map(word => word.toLowerCase().replaceAll(' ', ''));
  const sortedStrings = allLowercase.map(word => Array.from(new Set(word.split('').sort())).join(''));
  const tallies = sortedStrings.reduce((a, c) => {
    a[c] ? a[c]++ : a[c] = 1;
    return a;
  }, {});

  const uniqueChr = Object.entries(tallies).sort(([,a], [,b]) => a - b)[0][0];
  const indexOfUniq = sortedStrings.indexOf(uniqueChr);
  return words[indexOfUniq];
}
/* console.log(findUniq(['a    ', 'A', 'c'])) // 'c'
console.log(findUniq(['a', 'A', 'c'])) // 'c'
console.log(findUniq(['a', 'A', 'A'])) // -> empty string?
console.log(findUniq(['', '     ', 'c'])) // 'c' ?

console.log(findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ])) // 'BbBb'
console.log(findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]))  //'foo' */
console.log(findUniq([ 'silvia', 'vasili', 'victor' ]))