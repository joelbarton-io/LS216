
/*

{
  a:1,
  b: 1,
..
}
-> given a string of characters, return the character which occur LEAST often in the input string


?:
# Write a method that takes a STRING as an argument and returns
# the character that occurs LEAST often in the given string.
# If there are multiple characters with the equal lowest number
# of occurrences, then return the one that appears first in the
# string. When counting characters, consider the uppercase and
# lowercase version to be the same*.

-> i: string (includes empty strings and 'empty string')
  - any type string chr (symbols, numbers, [], empty string)
<- o: single (length 1) string chr

expl/impl rules (validate with test-cases):
- 'character' means any single string chr (including the space character)
- CASE does NOT matter; 'a' 'A' -> 2 occurences of the chr 'a'
- 'abcde' -> "FIRST MEANS first encountered moving left to right in string"

sub-problems:

- input validation
- transform the input string into all upper or lower case
- enumeration of the chrs contained in the input string {}
- sort the enumeration object's [key, value] by value (occurence counts)
- identify the minOccCount count and chr
- filter the array of subarrays for only those which have the same value as the minOccCount
- for each chr from the remaining pool of characters, compare the relative positions of their first occurence in the original input string

steps: aAAbcde -> aaabcde

GUARD against invalid inputs (non string inputs)

TRANSFORM input string into all lowercase chrs

REDUCE the input string as array of chrs into a dictionary with the chr as the key and that chrs occurence count as the value
TRANSFORM result object into array of `entries` (two element subarrays)

SORT entries array by the occurence count (ascending order)
GET first entry's occurrence count value and assign that to the variable minOccCount  -> 1

FILTER `entries` array for only those key:val subarrays which share the minOccCount val

TRANSFORM the filtered entries array to instead include the chr and indexOf where that chr was first encountered in the input string

SORT this transformed entries array in ascending order

return first element in first element
[['a', 0], ['b', 1]...]

*/

function minOccFirstSeen(input) {
  if (typeof input !== 'string') return null;
  if (input === '') return null;

  const chars = input.toLowerCase().split('');

  const enumeratedChrs = enumerate(chars);
  const entriesArray = Object.entries(enumeratedChrs);
  const sortedEntries = entriesArray.sort(([, a], [, b]) => a - b);
  const minOccCount = sortedEntries[0][1];

  const filteredEntries = sortedEntries.filter(entry => entry[1] === minOccCount);
  const chrWithFirstSeenAt = filteredEntries.map(entry => [entry[0], chars.indexOf(entry[0])])
  return chrWithFirstSeenAt.sort(([,a], [,b]) => a - b)[0][0];
}

function enumerate(arr) {
  return arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {})
}


console.log(minOccFirstSeen('aAAbcde')) // -> 'b'
console.log(minOccFirstSeen('aabbbccccdddee')) // -> 'a'
console.log(minOccFirstSeen('abcde')) // -> 'a'
console.log(minOccFirstSeen('abcde456')) // -> 'a'
console.log(minOccFirstSeen('aAA')) // -> 'a'     of count 3
console.log(minOccFirstSeen('aA  Abcd  e')) // -> 'b'
console.log(minOccFirstSeen('')) // -> '' or error
console.log(minOccFirstSeen('      ')) // -> ' '
console.log(minOccFirstSeen('%&@$abcde')) // -> '%'
