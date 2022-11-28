/*
BIOPSY:

DIDN'T INITIALLY CONSIDER THE CASE WHERE BOTH STRINGS CONTAIN A DUPLICATE VALUE OF A CHR (REACHED FOR SET TOO EARLY)
*/


/*
Given two strings, that may or may not be of the same length, determine the minimum number of
character deletions required to make an anagram. Any characters can be deleted from either of the strings.
 */
/*

?:
1. does case matter for 'sameness' of characters? (e.g.: does 'a' === 'A' in this problem?)

2. is an empty string an anagram to another empty string?
in: two string inputs
  - either can technically be an empty
  - may or may not be of equal length

out: integer value


rules:
  - case insensitive for anagrams!
  - empty string is anagram to empty string
  - watch for duplicate string values when writing algo


mental model:
- first: determine if the two strings have any characters in common (set)
- identify those characters
- find the difference between SHAREDdChrs string and each input string
- return the combined differences

abstract:

GUARD against:
  - invalid inputs
    - wrong type

IF either input string is empty
  return the length of the other out of the function
IF BOTH are empty, return 0



Determine if the two strings have any SHAREDd characters
DECLARE empty array:  [SHAREDdChrs]

  create one dictionaries with stringTwo's chrs as keys and occurrence count as value

  TRAVERSE the chrs of stringOne
    for each chr:
      check if that character is a) present in strTwoDic and b) has a value greater than 0

        if present: add chr to SHAREDdChrs array
        else, continue


  - if not
    - return the combined lengths of the input strings from the function

  - if yes:
    - identify SHAREDd characters and store them in a set object

  based on this set object's size ...
    calculate the mininum # of deletions required across both strings


code:
*/

function makeDictionary(str) {
  return str.split('').reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
}

function difference(SHARED, strOne, strTwo) {
  const strOneDiff = strOne.length - SHARED.length;
  const strTwoDiff = strTwo.length - SHARED.length;
  return strOneDiff + strTwoDiff;
}

function makeAnagram(strOne, strTwo) {
  if (typeof strOne !== 'string' || typeof strTwo !== 'string') return 'Invalid input';
  if (strOne.length === 0 && strTwo.length === 0) return 0;
  if (strOne.length === 0) return strTwo.length;
  if (strTwo.length === 0) return strOne.length;

  strOne = strOne.toLowerCase();
  strTwo = strTwo.toLowerCase(); // reassigning can be kind of risky with problems like this, might just use new variables?
  const SHARED = [];
  const strTwoDict = makeDictionary(strTwo);

  for (let i = 0; i < strOne.length; i++) {
    const curr = strOne[i];
    if (strTwoDict[curr] && strTwoDict[curr] > 0) {
      SHARED.push(curr);
      strTwoDict[curr]--;
    }
  }

  return difference(SHARED, strOne, strTwo);
}

console.log(makeAnagram("cde", "abc")); //➞ 4
console.log(makeAnagram("fcrxzwscanmligyxyvym", "jxwtrhvujlmrpdoqbisbwhmgpmeoke")); //➞ 30
console.log(makeAnagram("showman", "woman")); //➞ 2
console.log(makeAnagram("DDDDe", "dddd")); //➞ 1
console.log(makeAnagram("dddde", "dddd")); //➞ 1
console.log(makeAnagram("d", "dddd")); //➞ 3

console.log(makeAnagram("", "dddd")); //➞ 4
console.log(makeAnagram("", " ")); //➞ 1
console.log(makeAnagram("", "")); //➞ 0
console.log(makeAnagram('', '', '')); //➞ 0

console.log(makeAnagram([], {})); //➞ Invalid
console.log(makeAnagram('', {})); //➞ Invalid
console.log(makeAnagram()); //➞ Invalid


/*
-> 'aabc', 'aafg'

SHAREDd = ['a', 'a']
{
  'a' : 0,
  'f' : 1,
  'g' : 1,
}
SHAREDD : 'a'
*/


// ~> 40:13