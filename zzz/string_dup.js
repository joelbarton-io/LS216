function dup(input) {
  return input.map(removeDup);
};

function removeDup(word) {
  let resultWord = ''
  let idx = 0;

  while (word.length > idx) {
    let next = word[idx];
    if (resultWord[resultWord.length - 1] != next) {
      resultWord = resultWord + next;
    }

    idx++;
  }

  return resultWord;
}