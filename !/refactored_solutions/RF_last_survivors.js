// refactored:

function lastSurvivors(input) {
  if (input.length === 1) return input;

  const letters = input.toLowerCase().split('');
  const letterTally = tally(letters);
  let duplicateExists = hasRemainingDuplicates(letterTally); // not a huge fan of this

  while (duplicateExists) {
    let letter = duplicateExists;
    letterTally[letter] -= 2;
    const next = getNext(letter);
    letterTally[next] ? letterTally[next]++ : letterTally[next] = 1;
    duplicateExists = hasRemainingDuplicates(letterTally);
  }

  const nonZeroEntries = Object.entries(letterTally).filter(([_, count]) => count > 0);
  return nonZeroEntries.map(([chr, _]) => chr).join(''); // returns final version of string
}

function getNext(letter) { // returns the successor letter to the passed-in argument
  const Z_OFFSET = 25;
  return (letter === 'z') ? String.fromCharCode(letter.charCodeAt(0) - Z_OFFSET) : String.fromCharCode(letter.charCodeAt(0) + 1);
}

function hasRemainingDuplicates(letterTally) { // returns the first key encountered which has a value > 1, or undefined
  for (const key in letterTally) {
    if (letterTally[key] > 1) return key;
  }
}

function tally(letters) { // returns an object of the tallied chars based on the contents of `letters`
  return letters.reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
  }, {});
}

console.log(lastSurvivors('baacd'))
