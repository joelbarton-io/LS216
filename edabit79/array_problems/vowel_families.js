
/*

?:
1) will the input always be an array?
2) will the array elements always be string values?
3) do we have to worry about sparse arrays or arrays with object properties?
4) can the array be empty? how should we handle this situation?


input: array of 'words'
  - words will only contain lowercase letters
  - words CAN contain whitespaces
  -
output: a array of word(s)



rules of the problem (validate with test-cases):

  - FREQ does NOT matter (there can be any # of some vowel in either of the words)



identify sub-problems:

get targetVowels
get excludedVowels

filter input array of words based on these two match groups


steps:

GET targetVowels from first word
  - if return value is `null` return empty array

GET excludedVowels from first word:
ITERATE thru target 'aeiou' vowels to check for excluded ones
  - SELECT FOR those vowels which are not included in the targetVowels array


SELECT every word which contains ONLY the targetVowels (exlusionary)
  - DOES the curr word have ALL the targetVowels?
  - DOES the curr word have NO excludedVowels?

RETURN array of selected values


*/
function sameVowelGroup(input) {
  if (!Array.isArray(input)) return 'invalid input';
  if (input.length === 0) return [];

  const vowelsRegex = /[aeiou]/g;
  const vowelsArray = ['a', 'e', 'i', 'o', 'u'];

  const targetVowels = input[0].match(vowelsRegex);
  if (targetVowels == null) return [];

  const targetRegex = new RegExp(`[${targetVowels.join('')}]`, 'g');
  const excludedVowels = vowelsArray.filter(vowel => !input[0].includes(vowel));
  const excludedRegex = new RegExp(`[${excludedVowels.join('')}]`, 'g');

  return input.filter(word => {
    return hasTarget(word, targetRegex) && lacksExcluded(word, excludedRegex);
  });
}

function hasTarget(word, regex) {
  return word.match(regex);
}

function lacksExcluded(word, regex) {
  return !word.match(regex);
}



console.log(sameVowelGroup(["toe", "ocelot", "maniac"])) // ➞ ["toe", "ocelot"]
console.log(sameVowelGroup(["many", "carriage", "emit", "apricot", "animal"]))// ➞ ["many"]
console.log(sameVowelGroup(["hoops", "chuff", "bot", "bottom"]))// ➞ ["hoops", "bot", "bottom"]
console.log(sameVowelGroup(["xxx", "hoops", "chuff", "bot", "bottom"])) // ERR

// ~> 40:00; kinda struggled with some syntax stuff, not too happy
