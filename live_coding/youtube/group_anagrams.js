/*
## INPUT:
  - array of lowercase strings (can be empty)

## OUTPUT:
  - array of arrays containing grouped anagrams
## DATA FLOW:
  - plan to use a hash
  hash = {
    'aet': ['eat', 'tea', ],
  }

## REQUIREMENTS:
  - order doesn't matter for either the anagram groups or the indiv anagrams themselves

## EDGE CASES:
 - an empty string is valid so '' is anagram of '', '   ' is anagram of '   '
 - single element input (Example 3)

## SUMMARY:
  - produce groups of anagrams and return these groups in an array

## STEPS:

GUARD for length 1 case for input
  - return input enclosed in array literal

CREATE object named: `groups`

traverse input array of strings:
  for each string convert to array, then sort in ascending ascii convert back to string

  check if the sorted string is a key in `groups`
    if it is a key:
       push original string into the array which is that key's associated value
    otherwise:
      create property on `groups` -> groups[sortedStr] = [originalStr]  -> 'aet': ['eat', 'tea']

  get vals from `groups` and return this array of arrays


*/

var groupAnagrams = function(strs) {
  if (strs.length === 1) return [strs];
  const groups = {};

  strs.forEach(word => {
    const sortedWord = word.split('').sort().join('');

    if (groups[sortedWord]) {
      groups[sortedWord].push(word);
    } else {
      groups[sortedWord] = [word];
    }
  })

  return Object.values(groups);
};