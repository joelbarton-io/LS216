/*


?:
1) will the input always be a string?
2) will the string always only contain letter characters? (eg: &$@ not allowed?)
3)

in: str
  - can be non-string typed input
  - can contain symbol chrs
  - can be an empty string

out: array of substrings
  - output for each fn must be an array of unique substrings that satisfy rules


rules:
- input counts as a potential substring

mental model:

- Validate input string

- Perform nested iteration to produce all possible substrings from input string (including input string itself)

- ensure array values are unique

- Filter the resulting elements by problem constraint

-

abstract:
GUARD against invalid input and the case of an empty input string

CREATE empty array (storage)

TRAVERSE string (i...end)
  TRAVERSE string (i+1...end)
    Add current slice of string to empty array

CREATE Set from storage -> convert back to array

FILTER newStorage to select elements that start and end with a vowel

return this array sorted in ascending lexicographical order

code:
*/

function getVowelSubstrings(str) {
  const storage = [];
  if (typeof str !== 'string') return 'invalid input';
  if (str.length === 0) return storage;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      storage.push(str.slice(i, j + 1));
    }
  }

  const uniques = Array.from(new Set(storage));

  return uniques.filter(elem => {
    return (elem[0].match(/[aeiou]/i) && elem[elem.length - 1].match(/[aeiou]/i));
  }).sort();
}

function getConsonantSubstrings(str) {
  const storage = [];
  if (typeof str !== 'string') return 'invalid input';
  if (str.length === 0) return storage;

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      storage.push(str.slice(i, j + 1));
    }
  }

  const uniques = Array.from(new Set(storage));

  return uniques.filter(elem => {
    return(elem[0].match(/[^aeiou]/i) && elem[elem.length - 1].match(/[^aeiou]/i))
  }).sort();
}


/* console.log(getVowelSubstrings('abcde')); // ['a', 'abcde', 'e']
console.log(getVowelSubstrings('aeaea')); // ['a', 'ae', 'eae', 'ea', 'e']
console.log(getVowelSubstrings('abode')); // ['a', 'abo', 'abcde', 'ode', 'e']
console.log(getVowelSubstrings('aeiou')); // ['a', 'e', 'i', 'o', 'u', 'ae' ....  'aei' ...'eiou' ]
console.log(getVowelSubstrings('&a%i')); // ['a', 'i', 'a%i']
console.log(getVowelSubstrings('a')); // ['a']
console.log(getVowelSubstrings('')); // [] */

console.log(getConsonantSubstrings("aviation")); //["n", "t", "tion", "v", "viat", "viation"]

console.log(getConsonantSubstrings("motor")); //["m", "mot", "motor", "r", "t", "tor"]