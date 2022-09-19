/*
run through input string, producing all substrings
remove all non-palindomic elements
remove all single chr elements

return resulting array of palindromes
*/

function palindromes(str) {
  const ALL_SUBSTRINGS = substrings(str);

  return ALL_SUBSTRINGS.filter((candidate) => {
    return (candidate === candidate.split('').reverse().join('') && candidate.length > 1);
  });
}

function leadingSubstrings(str) {
  return str.split('').map((_, idx) => {
    return str.slice(0, idx + 1);
  });
}

function substrings(str) {
  const RESULT = [];
  let count = 0

  str.split('').forEach((_) => {
    RESULT.push(...leadingSubstrings(str.slice(count)))
    count += 1
  })

  return RESULT;
}

// console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

// console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  // "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  // "-madam-", "madam", "ada", "oo" ]

// console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]