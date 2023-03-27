/*
The goal of this Kata is to write a function that will receive an array of strings as its single argument,
then the strings are each processed and sorted (in desending order) based on the length of the single longest
sub-string of contiguous vowels ( aeiouAEIOU ) that may be contained within the string. The strings may contain
letters, numbers, special characters, uppercase, lowercase, whitespace, and there may be (often will be) multiple
sub-strings of contiguous vowels. We are only interested in the single longest sub-string of vowels within each string, in the input array.

Write a function that will receive an array of strings as its single argument and sort the string elements (in desending order) based on the length of the single longest sub-string of contiguous vowels that may be contained within the string.

Example:

str1 = "what a beautiful day today"
str2 = "it's okay, but very breezy"

When the strings are sorted, str1 will be first as its longest sub-string of contiguous vowels "eau" is of length 3,
while str2 has as its longest sub-string of contiguous vowels "ee", which is of length 2.

If two or more strings in the array have maximum sub-strings of the same length, then the strings should remain in the order in which they were found in the orginal array.

sortStringsByVowels(["aa","eee","oo","iiii"]),["iiii","eee","aa","oo"]);
sortStringsByVowels(["a","e","ii","ooo","u"]),["ooo","ii","a","e","u"]);
sortStringsByVowels( ["ioue","ee","uoiea"]) , ["uoiea", "ioue","ee"]);

Input:
  array of strings
  - empty/sparse?
  - array of strings

  strings
  - letters, numbers, special characters, upper/lower, whitespace, etc.

requirements:
  - if two strings have same max vowel substring length, should stay where they are in original array
  - does this mean we mutate the input array? (sort in place)
  - vowels of both cases should be considered so ('____aAe___' -> length 3)


steps:

get a copy of input array, store in variable

transform elements in array to make more readable (replace method)

replace all '_' chrs with a single space split string using this ->  .split(/[_]+/g)

transform previous line's array into array of lengths; get max length

traverse input array, sort by length

*/

function sortStringsByVowels(input) {
  const result = [];
  const readableStrings = replaceNonVowels(input.slice());
  const arrayOfLengths = calculateSubStringLengths(readableStrings)
  arrayOfLengths.forEach((el, idx) => result.push([input[idx], el]));

  return sortByLength(result);
}

function sortByLength(result) { // sort subarrays by length (second element in subarray)
  return result.sort(([, a], [, b]) => b - a).map(arr => arr[0]);
}

function calculateSubStringLengths(readableStrings) { // split string by '_', get max length from those vowel substrings
  return readableStrings.map(str => {
    return Math.max(...str.split(/[_]+/g).map(str => {
      return str.length;
    }));
  });
}

function replaceNonVowels(copy) { // standardizing string appearance to highlight vowels only
  return copy.map(str => str.replace(/[^aeiou]/gi, '_'));
}
//["aa","eee","oo","iiii"]
//  ^
//   .replace(/[^aeiou]/gi, '_')

console.log(sortStringsByVowels(["uijijeoj", "lkjlkjww2", "iiutrqy"]), ["iiutrqy", "uijijeoj", "lkjlkjww2"]);


// original solution:

// function sortStringsByVowels(strings) {
//   const results = [];
//   const copy = strings.slice();

//   const readableStrings = copy.map(str => str.replace(/[^aeiou]/gi, '_'))
//   const arrayOfLengths = readableStrings.map(str => Math.max(...str.split(/[_]+/g).map(str => str.length)));

//   arrayOfLengths.forEach((el, idx) => results.push([strings[idx], el]));

//   return results.sort(([,a], [,b]) => b - a).map(arr => arr[0]);
// }