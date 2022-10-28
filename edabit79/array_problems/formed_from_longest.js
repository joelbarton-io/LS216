/* function canForm(input) {
  const longest = input.sort((a, b) => b.length - a.length)[0];

  return input.every(word => {
    return word.split('').every(chr => longest.includes(chr));
  });
}
 */

// cannot use a letter more than once version:

function canForm(input) {
  const longest = input.slice().sort((a, b) => b.length - a.length)[0]; // mutates a copy

  const dictionary = longest.split('').reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  for (const elem of input) { // not in order!
    const dict = JSON.parse(JSON.stringify(dictionary));
    const characters = elem.split('');

    if (!characters.every(chr => {
      if (dict[chr] && dict[chr] !== 0) {
        dict[chr]--;
        return true;
      } else {
        return false;
      }
    })) return false;
  }
  return true;
}
/*
for every word in input array...

check if every letter in each individual word is contained in the longest

returns boolean
*/

console.log(canForm(["monument", "momento", "moment", "tome"]));
console.log(canForm(["mast", "manifest", "met", "faaaan"])) //➞ false
console.log(canForm(["mast", "manifest", "met", "fan"])) //➞ true
console.log(canForm(["may", "master", "same", "reams"])) //➞ false
console.log(canForm(["may", "same", "reams", "mastery"])) //➞ true

