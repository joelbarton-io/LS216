// const { leadingSubstrings } = require('./leadingSubstring.js');

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => {
    return str.slice(0, idx + 1);
  });
}


console.log(typeof leadingSubstrings)
function substrings(str) {
  const RESULT = [];
  let count = 0

  str.split('').forEach((_) => {
    RESULT.push(...leadingSubstrings(str.slice(count)))
    count += 1
  })

  return RESULT;
}

console.log(substrings('abcde'));

// returns
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]