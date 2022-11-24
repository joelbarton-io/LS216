/*

## INPUT:
  - array of string elements
## OUTPUT:
  - either '' or the longest shared prefix
## DATA FLOW:
## RULES:
  - input elements will always be lowercase english letters
  - 'longest common prefix' can never be longer than the shortest word in input array
## EDGE CASES:
  - single element array
    ['hi']
  - empty string element
    ['hi', '', 'hill', 'hillbilly']


## SUMMARY:
## STEPS:

GUARD for:
  - input array length 1
  - input array elems being ''
  RETURN input[0] || ''

DECLARE currLongestPrefix = ''

GET shortest element in input array (sorting by length)

GET length of shortest element, use this num as end condition for outer loop
  as soon as curr el at currIdx is !== currChr in shortestWord
    break and return currLongestPrefix
  if every currEl is === currChr in shortestWord:
    add currEl to currLongestPrefix

return currLongestPrefix;

*/

var longestCommonPrefix = function(strs) {
  if (strs.length === 1) return strs[0];
  if (strs.some(word => word === '')) return '';

  let currLongestPrefix = '';

  const shortest = strs.sort((a, b) => a.length - b.length)[0];
  const end = shortest.length;

  for (let i = 0; i < end; i++) {
    const currChr = shortest[i];

    if (strs.every(word => word[i] === currChr)) {
      currLongestPrefix += currChr;
    } else {
      return currLongestPrefix
    }
  }
  return currLongestPrefix
};





















