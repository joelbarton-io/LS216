// function vowelRecognition(input) {
//   if (typeof input !== 'string') return null;

//   const hasVowels = (candidate, regex) => candidate.match(regex);
//   const regex = /[aeiou]/gi;
//   let totalCount = 0;

//   if (input.length === 0) return totalCount;
//   if (!hasVowels(input, regex)) return totalCount;

//   for (let first = 0, l = input.length; first < l; first++) {
//     for (let last = first; last < l; last++) {
//       const currSubString = input.slice(first, last + 1);
//       const foundVowels = hasVowels(currSubString, regex);
//       if (foundVowels) totalCount += foundVowels.length;
//     }
//   }

//   return totalCount;
// }

/*
get vowel count from input string

*/





const vowelCount = string => {
  const len = string.length;
  const appearances = [];

  for (let i = 0; i < len; i++) {
    if (i === 0) {
      appearances.push(len);
    } else {
      appearances.push((len - i) + appearances[i - 1] - i);
    }
  }
  return appearances.reduce((r, v, idx) => {
    if (/[aeiou]/ig.test(string[idx])) r += v;
    return r
  }, 0);
};

console.log(vowelCount('hello')) // 13

// console.log(vowelCount(1)) // ERR
// console.log(vowelCount({})) // ERR
// console.log(vowelCount()) // ERR
// console.log(vowelCount('')) // 0
// console.log(vowelCount('llll')) // 0
// console.log(vowelCount('hEllo')) // 13
// console.log(vowelCount('AAA')) // 10   a, aa, aaa, a, aa, a

/*
hello -> h, he, hel, hell, hello, e, el, ell, ello, l, ll, llo, l, lo, o . -> 13

there -> t, th, the, ther, there, h, he, her, here, e, er, ere, r, re, e -> 14
*/