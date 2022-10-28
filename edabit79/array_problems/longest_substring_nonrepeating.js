/* Write a function that returns the longest non-repeating substring for a string input.
Notes
If multiple substrings tie in length, return the one which occurs first.
Bonus: Can you solve this problem in linear time?
 */
/*

traversal ->
  a   b   c   d   a



[a, ab, b, abc, bc, c ]

iterate over string

need a counter
*/
/*

?:


in:
out:


rules:
  - if there is a tie for longest, non-repeating, choose first

mental model:


abstract:

traverse input string from index 0
  declare a list
  while current is not included in sublist

code:
*/

function longestNonrepeatingSubstring(str) {
  let result = '';

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let subStr = str.slice(i, j + 1);

      if (
        (new Set(subStr.split('')).size === subStr.length) &&
        (subStr.length > result.length)
        ) {
          result = subStr;
      }
    }
  }
  return result;
}

//   a  b  c  a  b  c  b  b

console.log(longestNonrepeatingSubstring("abcabcbb")); // ➞ "abc"
console.log(longestNonrepeatingSubstring("aaaaaa")); // ➞ "a"
console.log(longestNonrepeatingSubstring("abcde")); // ➞ "abcde"
console.log(longestNonrepeatingSubstring("abcda")); // ➞ "abcd"