/*

Write a program that takes a string as input and returns a count of how many words in the string can be rearranged to
form palindromes. You may assume that input strings are at least 1 character in length and contain only alphabetic characters.
You may ignore case for the purpose of assessing possible palindromes.

ex. Processing the string “aaa bca Abab” should return the integer 2 because “aaa” is already a palindrome and “Abab” can be
rearranged to “Abba”, which is also a palindrome (case insensitive). Thus, two of the three words in the string can be made
into palindromes.

p:

'palindrome' : a string of length 1 or more which reads the same forward and backward

input: string (of length 1 or more alphabetic chars)
  - case can be 'ignored' (e.g. 'aAbb' is palindromic)

output: Number
  - the count of palindromic 'words' are present in the input string
    - what is a 'word'; left and right are spaces or start/end of string?

e:
console.log(palindome()) // print error message?
console.log(palindome('aba bab aaa acdfg a')) // 4
console.log(palindome('aba      bab aaa acdfg a')) // 4
console.log(palindome('afds')) // 0
console.log(palindome(' a ')) // 1
console.log(palindome('a')) // 1

d:
{
  create object with counts of letters
  a: 1,
  b: 2,
}

a:
standardize case for input string

break input string into 'words' as an array of words (split)
clean array for '' (filter)

if length of input string == 1 return 1

declare palCount = 0

traverse array of words
  -> check if word is a palindrome (sub routine)
    Y -> increment palCount by 1

return palCount


isPal? function: (str arg)
if word length === 1 return true

  create object which tallies the various letter counts (reduce)

oddCount = 0
traverse obj keys:
  if letter has an odd count, increment oddCount by 1

if oddCount > 1 return false
if oddCount <= 1 return true
c:

{
  a: 2,
  b: 1,
}
*/

function palindrome(input) {
  if (typeof input !== 'string') return 'ERROR';
  const lowerCasedInput = input.toLowerCase();
  const arrOfWords = lowerCasedInput.split(/\s+/).filter(word => word !== '');
  let palCount = 0;

  return arrOfWords.filter(isPal).length;
}

function isPal(candidate) {
  if (candidate.length === 1) return true;
  let oddCount = 0;

  const candidateLetters = candidate.split('');
  const tally = candidateLetters.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});

  for (const chr in tally) {
    const count = tally[chr];
    if (count % 2 === 1) oddCount += 1;
  }

  return oddCount <= 1;
}

console.log(palindrome('a')) // 1
console.log(palindrome(' a ')) // 1
console.log(palindrome('aba bab aaa acdfg a')) // 4
console.log(palindrome('aba      bab aaa acdfg a')) // 4
console.log(palindrome('afds')) // 0
console.log(palindrome()) // print error message?
