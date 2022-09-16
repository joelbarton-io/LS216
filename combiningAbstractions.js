function mostCommonFirstLetter(arr) {
  let firsts = arr.map((word) => word[0]);

  let dictionary = {};

  firsts.forEach((letter) => {
    if (dictionary.hasOwnProperty(letter)) {
      dictionary[letter] += 1;
    } else {
      dictionary[letter] = 1;
    }
  });


  return Object.keys(dictionary).reduce((acc, curr) => {
    if (dictionary[acc] < dictionary[curr]) {
      return curr;
    } else {
      return acc;
    }
  });
}

let names = ['Heather', 'Gisella', 'Katsuki', 'Hua', 'Katy', 'Kathleen', 'Otakar'];

console.log(
  mostCommonFirstLetter(names),
);