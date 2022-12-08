var findSubstring = function (s, words) {
  const INDICES = [];

  const wordsTally = words.reduce((acc, curr) => {
    acc[curr] = (acc[curr] + 1) || 1;
    return acc;
  }, new Map());

  const wordsTallyAsJSON = JSON.stringify(Object.entries(wordsTally).sort());
  const wordLength = words[0].length;
  const wordArrayLength = wordLength * words.length;

  for (let i = 0; i < s.length - wordArrayLength + 1; i++) {
    const word = s.slice(i, i + wordArrayLength);
    const map = new Map();

    for (let j = 0; j < wordArrayLength; j += wordLength) {
      const subWord = word.slice(j, j + wordLength);

      if (wordsTally[subWord]) {
        map[subWord] = (map[subWord] + 1) || 1;
        continue;
      }
      break;
    }

    const mapAsJSON = JSON.stringify(Object.entries(map).sort());
    if (mapAsJSON === wordsTallyAsJSON) INDICES.push(i);
  }

  return INDICES;
};

console.log(findSubstring("barfoothefoobarman", ["foo","bar"]));
