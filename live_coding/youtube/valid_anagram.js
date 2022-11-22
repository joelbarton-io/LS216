var isAnagram = function(original, candidate) { // bool
  if (original.length !== candidate.length) return false;
  const letters = {};

  for (let i = 0; i < original.length; i++) {
    let chr = original[i];
    if (letters[chr]) {
      letters[chr]++;
    } else {
      letters[chr] = 1;
    }
  }

  for (let i = 0; i < candidate.length; i++) {
    const chr = candidate[i];
    if (!letters[chr]) return false;
    letters[chr]--;
  }

  return true;
};

console.log(isAnagram('anagram', 'margana'));