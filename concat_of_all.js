/*
You are given a string s and an array of strings words. All the strings of words are of the same length.

A concatenated substring in `s` is a substring that contains all the strings of any permutation of words concatenated.

For example, if words = ["ab","cd","ef"], then "abcdef", "abefcd", "cdabef", "cdefab", "efabcd", and "efcdab" are all concatenated strings. "acdbef" is not a concatenated substring because it is not the concatenation of any permutation of words.
Return the starting indices of all the concatenated substrings in s. You can return the answer in any order.

["foo","bar", 'bar']

Example 1:
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]

Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.

Example 2:
Input: s = "wordgoodgoodggoodgoodoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
We return an empty array.

Example 3:
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]

Explanation: Since words.length == 3 and words[i].length == 3, the concatenated substring has to be of length 9.
The substring starting at 6 is "foobarthe". It is the concatenation of ["foo","bar","the"] which is a permutation of words.
The substring starting at 9 is "barthefoo". It is the concatenation of ["bar","the","foo"] which is a permutation of words.
The substring starting at 12 is "thefoobar". It is the concatenation of ["the","foo","bar"] which is a permutation of words.

Constraints:

1 <= s.length <= 104
1 <= words.length <= 5000
1 <= words[i].length <= 30
s and words[i] consist of lowercase English letters.
*/

/*
## PROBLEM:
## RULES:
  - all perms length must be of elem.length * words.length

## EXAMPLES/EDGE CASES:

## INPUT: two inputs:
  - `s` string
  - `words` array of strings all with the same length n

## INTERMEDIATE:
wordOccurences : {
    foo: 1,
    bar: 0,
  }

## OUTPUT:
  - array containing the starting indices where a permutation was found, initially

## SUMMARY:
  create object containing entries with elems in words as keys and an occurence count as value

## sub problems:

- doing an accounting of the various words in `words` (occ counts)

- step across `s` using a window (two pointers)

- storing the starting index of a valid permutation in some result array

## STEPS:

CREATE a copy of `s` wordsAsString

DECLARE startIdx : 0

TRAVERSE `s` with index (while) (while end < `s` length - elem.length)
  using two pointers, `start` and `end`, slice substring
  `curr`

  if (`wordsAsString` length === `s` length):
    startIdx = `start`

    if wordsAsString includes `curr`:
      replace `curr` in sCopy with '' and capture the return value thru reassigning `wordsAsString`
      increment `start` and `end` by fixed value (length of an elements in words)

    else wordsAsString does not include curr && `wordsAsString` length > 0:
      create new copy of `s`
      and reassign `startIdx` to currIdx

    if `wordsAsString` has a length of 0  :
      push startIdx into result Arr
      reassign wordsAsString to words as string
      reassign start idx to its current value plus 1
*/

const findTheSubstring = (s, words) => {
  const START_INDICES = [];
  const WORD_LENG = words[0].length;
  const WORDS_INITIAL = words.join('');
  const INIT_LENG = WORDS_INITIAL.length;

  let wordsCurrent = words.join('');

  let start = 0;
  let end = WORD_LENG;
  let startIdx;

  while (end <= s.length) {
    let curr = s.slice(start, end);
    if (wordsCurrent.length === INIT_LENG) startIdx = start;

    if (wordsCurrent.includes(curr)) {
      wordsCurrent.replace(curr, '');
      start += WORD_LENG;
      end += WORD_LENG;
    } else {
      // don't want to increment start and end
      wordsCurrent = WORDS_INITIAL;
    }

    if (wordsCurrent === '') {
      START_INDICES.push(startIdx);
      if (end === INIT_LENG - 1) break; // if end === INIT LENG - 1: we are done!

      if (end < INIT_LENG - 1) { // backtrack
        start = startIdx + WORD_LENG;
        end = start + WORD_LENG;
      }

    }

  }

  return START_INDICES;
}

console.log(findTheSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"]));

  /*
barfoofoobarthefoobarman
^-^
start         : 0
end           : 3
startIdx      : 0
res           : []
wordsAsString : the



*/
/*  is curr in wordAsString ?
        y -> replace curr in wordAsString with ''
          is wordAsString empty ?
            y -> add firstIdx to result and reset wordAsString to STRING_INITIAL


        n ->
          is wordAsString non-empty ?
            y -> reset firstIdx
          is curr in STRING_INITIAL ?
            y -> reset firstIdx
     */
// console.log(findTheSubstring("barfoothefoobarman", ["foo", "bar"]));
// Output: [6,9,12]

// https://leetcode.com/problems/substring-with-concatenation-of-all-words/description/



    // if (wordsAsString.includes(curr)) {
    //   wordsAsString = wordsAsString.replace(curr, '');
    // } else if (!wordsAsString.includes(curr) &&
    //           //  STRING_INITIAL.includes(curr) &&
    //           wordsAsString.length > 0) {
    //   wordsAsString = STRING_INITIAL;
    //   startIdx = wordsAsString.includes(curr) ? start : start + LENG;
    // }

    // if (wordsAsString === '') {
    //   START_INDICES.push(startIdx);
    //   startIdx = wordsAsString.includes(curr) ? start : start + LENG;
    //   wordsAsString = STRING_INITIAL;
    // }


/*
is curr in wordAsString ?
  y -> replace curr in wordAsString with ''
    is wordAsString empty ?
      y -> add firstIdx to result and reset wordAsString to STRING_INITIAL


  n ->
    is wordAsString non-empty ?
      y -> reset firstIdx
    is curr in STRING_INITIAL ?
      y -> reset firstIdx

  reset wordAsString to STRING_INITIAL
*/
    // if (wordsAsString.includes(curr)) {
    //   if (wordsAsString.length === STRING_INITIAL.length) startIdx = start;

    //   wordsAsString = wordsAsString.replace(curr, '');
    //   start += LENG;
    //   end += LENG;
    // } else {
    //   wordsAsString = STRING_INITIAL;
    //   if (STRING_INITIAL.includes(curr)) {
    //     startIdx = start - LENG;
    //   }
    //   start += LENG;
    //   end += LENG;
    // }

    // if (wordsAsString.length === 0) {
    //   START_INDICES.push(startIdx);
    //   wordsAsString = STRING_INITIAL;
    // }