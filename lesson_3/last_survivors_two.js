/*
  ## PROBLEM:
    - feels recursive, going with while though likely

    process some string until there are zero duplicate chrs

  ## RULES:
    - order of result letters is not important
    - the 'next letter' rule is circular ('zaz' -> 'aa' -> 'b')
  ## EXAMPLES/EDGE CASES:
    - case matter? ('aAc' -> 'bc' or 'aAc')
    - 'aaac' -> 'bac'
    - "zzZab" -> 'cz'
  ## INPUT: str (length 1 and Infinity )
    - String of length 1 or more, containing either upper or lowercase english chrs
    - will there ever be spaces?
  ## INTERMEDIATE:
    'aabc'
    {
      d: 1
    }
  ## OUTPUT:
    - some string which has zero duplicate characters
  ## STEPS:

  GUARD for input length of 1, return early

  STANDARDIZE case of input string ("zzzab")

  CONVERT input string into an object that tallies the various chrs occurences (reduce)

  WHILE `letterTally` obj contains a key with a value > 1, do:
    decrement that key's value by 2 and get the 'next' letter in the alphabet
      if currLetter whose value is > 1 is `z` charCodeAt(index) - 26 -> fromCharCode()

    using this letter, check if `letterTally` has a key which matches the letter
      if `letterTally` has that key, increment the value of that key by 1
      if `letterTally` doesn't have that key, add key value pair to `letterTally`

  FILTER out `letterTally entries` whose value is 0

  reconstruct string based on the remaining  keys in `letterTally` (array of arrays at this point)

  return this string

  */

function lastSurvivors(input) {
  if (input.length === 1) return input;

  const STD_CASE = input.toLowerCase().split('');
  const letterTally = STD_CASE.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});

  let key = hasRemainingDuplicates(letterTally); // this is sloppy and pretty hard to understand since we're potentially dealing with two data types (string and boolean) depending on the return value

  while (key) {
    letterTally[key] -= 2;
    const next = (key === 'z') ? String.fromCharCode(key.charCodeAt(0) - 25) : String.fromCharCode(key.charCodeAt(0) + 1);

    letterTally[next] ? letterTally[next]++ : letterTally[next] = 1;
    key = hasRemainingDuplicates(letterTally);
  }

  const arrOfValidEntries = Object.entries(letterTally);
  const nonZeroEntries = arrOfValidEntries.filter(([, count]) => count > 0);
  const res = nonZeroEntries.map(([chr,]) => chr).join('');

  return res;
}

function hasRemainingDuplicates(letterTally) { // should refactor
  let res = false;

  for (const key in letterTally) {
    if (letterTally[key] > 1) {
      res = key;
      break;
    }
  }

  return res;
}

















