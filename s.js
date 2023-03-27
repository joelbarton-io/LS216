var singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;

  return bs(left, right, nums);
};

function bs(left, right, nums) {
  let mid = (right - left) / 2;
  console.log(mid);

  // found the uniq element
  if (nums[mid - 1] != nums[mid] && nums[mid + 1] != nums[mid]) return nums[mid];

  if (nums[mid - 1] === nums[mid]) { // mid val matches left val
    console.log('search-> ', 'left: ', left, 'right: ', right, 'mid: ', mid);
    let lengthIsOdd = ((mid - 1) - left) % 2 === 1;
    return (lengthIsOdd) ? bs(left, mid, nums) : bs(mid, right, nums);

  } else if (nums[mid + 1] === nums[mid]) { // mid val matches right val

    let lengthIsOdd = (right - (mid + 1)) % 2 === 1;
    return (lengthIsOdd) ? bs(mid, right, nums) : bs(left, mid, nums);
  }

}

// console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8]));
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));

// function isPrime(strNum) {
//   const candidate = Number(strNum);
//   for (let div = 2; div < candidate; div += 1) {
//     if (candidate % div === 0) return false;
//   }
//   return true;
// }
// const p = (...input) => console.log(...input);

// function primeNumberPrinter(input) {
//   const regex = /[0-9]+/g;
//   if (!input.match(/[0-9]/g)) return [];
//   const nums = input.match(regex);
//   const result = [];

//   nums.forEach(num => {
//     let [primes, leftOver] = processCandidate(num);
//     result.push(...primes);

//     while (leftOver) {
//       let [primes, leftOver] = processCandidate(num);
//       result.push(...primes);
//     }
//   });


//   p(result);
// }


// function processCandidate(stringNum) {
//   const primes = [];
//   let leftOver;

//   for (let i = stringNum.length; i > 0; i--) {
//     let substrNum = stringNum.slice(0, i);
//     leftOver = stringNum.slice(i);

//     if (isPrime(substrNum)) {
//       primes.push(Number(substrNum));
//       break;
//     }
//   }

//   return [primes, leftOver];
// }
// // p(processCandidate('112345'))

// primeNumberPrinter('12345 11 30 asdf 13')



// let map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);
// map.set('d', 4);
// map.set('e', 5);

// map.forEach((val, key, m) => {
//   console.log(key);
//   m.set(String(key).charCodeAt(0), val)
// });

// console.log(map.size, map);
// Write a function that removes the last vowel in each word in a str.

/*
initialize result string to empty string

initialize temp to empty

initialize a counter

traverse input string's chars with a while loop
  if next is a separation chr or undefined and temp has length
    then process 'word' and append temp to result
    reset temp to empty string
  if the next element is a separation chr, need to operate on temp and then reset

*/

// given this prompt:
// "Write a function that removes the last vowel in each word in a str."

// and the below Javascript code:

// function removeLastVowel(...input) {
//   let result = input.map(process);
//   return (result.length === 1) ? result[0] : result;
// }

// function indexOfLastVowel(word) {
//   for (let i = word.length - 1; i >= 0; i--) {
//     if (word[i].match(/[aeiou]/i)) return i;
//   }
//   return -1;
// }

// function remove(word) {
//   let vowelIdx = indexOfLastVowel(word);
//   if (vowelIdx === -1) return word;
//   return word.slice(0, vowelIdx) + word.slice(vowelIdx + 1);
// }

// function process(str) {
//   let result = '';
//   let temp = '';
//   for (let i = 0; i < str.length; i++) {
//     let chr = str[i];
//     if (chr.match(/[a-z0-9]+/gi)) {
//       temp += chr;
//     } else {
//       result += remove(temp) + chr;
//       temp = '';
//     }
//   }
//   if (temp.length) result += remove(temp);
//   return result;
// }

// function process(str) {
//   let result = '';
//   let temp = '';
//   let i = 0;

//   while (str[i]) {
//     if (str[i].match(/[a-z0-9]+/gi)) { // word chr
//       temp += str[i];
//     } else if (str[i].match(/[^a-z0-9]+/gi) && temp.length) { // cur chr is seperator
//       result += remove(temp);
//       temp = '';
//       result += str[i];
//     } else if (str[i].match(/[^a-z0-9]+/gi)) {
//       result += str[i];
//     } else if (str[i + 1] === undefined && temp.length) {
//       result += remove(temp);
//     }
//     i++;
//   }
//   return result;
// }

// can you fix any redundant code?

// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
// console.log(removeLastVowel("  Those who dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
// // case insensitive
// console.log(removeLastVowel("Those whO dare to fail miserably can achieve greatly.")); // Thos wh dar t fal miserbly cn achiev gretly."
// // arg * 2
// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.", 'Those')); // [Thos wh dar t fal miserbly cn achiev gretly.", 'Thos']
// // expanded spaces
// console.log(removeLastVowel("Those who dare  to fail miserably  can achieve greatly.")); // Thos wh dar  t fal miserbly  cn achiev gretly."
// console.log(removeLastVowel("  Those who dare to fail miserably can achieve greatly.")); // __Thos wh dar t fal miserbly cn achiev gretly."
// // special chrs
// console.log(removeLastVowel("  ###`. &&&& 123 le")); // "  ###`. &&&& 123 l"
// console.log(removeLastVowel("bade&elephante")) // bad&elephant
// console.log(removeLastVowel("123e&elephante")) // 123&elephant    -> 123e elephante
// // 'empty string
// console.log(removeLastVowel("")); // ""
// console.log(removeLastVowel("    ")); // "    "
// // no vowels
// console.log(removeLastVowel("zzzzzz")); // "zzzzzz"
// // no words
// console.log(removeLastVowel("  ###`. &&&&")); // "  ###`. &&&&"

// console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly.  & ")); // __Thos wh dar t fal miserbly cn achiev gretly."


// // all vowels
// console.log(removeLastVowel("a e i o u A E I")); // "       " (x7 spaces)

// // happy path
// console.log(removeLastVowel("Those")); // Thos."
