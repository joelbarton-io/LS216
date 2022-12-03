'use strict';

/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */


/* obj = { a: 1, b: 2, c: 3, d: undefined, undefined: true };

if (obj.hasOwnProperty(undefined)) {
  console.log('found');
} else {
  console.log('missing');
}

console.table(Object.keys(obj));
 */

/* const arr = ['head', 'heal', 'teal', 'tell', 'tall', 'tail'];

let ladder = ''

arr.forEach(word => {
  if (ladder !== '') {
    ladder += '-'
  }

  ladder += word
})

console.log(ladder)  // expect: head-heal-teal-tell-tall-tail */

/*

// Picks n random elements from an array,
// and returns a new array with those elements.
function random(array, n) {
  if (n === undefined) {
    n = 1;
  }

  const elements = array.slice();
  const randomElements = [];

  while (n > 0 && elements.length > 0) {
    const randomIndex = Math.floor(Math.random() * elements.length);
    const randomElement = elements[randomIndex];

    randomElements.push(randomElement);
    elements.splice(randomIndex, 1);
    n--;
  }
  return randomElements; // arr ->
}

// Ingredients

const ingredients = ['rice', 'green bell pepper', 'mushrooms', 'carrot', 'kebab',
  'spinach', 'soy bean sprouts', 'mashed potatoes', 'corn', 'cucumber', 'peas'];

const spices = ['peri peri', 'cinnamon', 'nutmeg', 'cardamom', 'ground ginger',
  'poppy seed', 'cumin'];

const extras = ['peanuts', 'sesame seeds', 'egg', 'wasabi', 'soy sauce'];

// Name

const adjective  = ['Delicious', 'Hot', 'Exotic', 'Creative', 'Festive', 'Dark'];
const firstNoun  = ['Power', 'After Work', 'Holiday', 'Disco', 'Late Night'];
const secondNoun = ['Mix', 'Delight', 'Bowl', 'Chunk', 'Surprise', 'Bliss'];

// Generate!

const dishName = random(adjective).concat(random(firstNoun), random(secondNoun));
const dish = random(ingredients, 3).concat(random(spices, 2), random(extras, 1));

console.log(`How about: ${dishName.join(' ')}`);
console.log(`You need: ${dish.join(', ')}`);
 */

/* const todos = ['wash car', 'exercise', 'buy groceries', 'balance budget',
             'call plumber', 'feed fido', 'get gas',  'organize closet'];

function addTask(task) {
  if (todos.includes(task)) {
    console.log('That task is already on the list.');
  } else {
    todos.push(task);
  }
}

function completeTasks(n = 1) {
  let tasksComplete = 0;

  while (todos.length > 0 && tasksComplete < n) {
    console.log(`${todos[0]} complete!`);
    // delete todos[0]; using delete creates a sparse array of constant length, instead we should shift off the front element
    todos.shift();
    tasksComplete++;
  }

  if (todos.length === 0) {
    console.log('All tasks complete!');
  } else {
    console.log(`${tasksComplete} tasks completed; ${todos.length} remaining.`);
  }
}

function displayTaskList() {
  console.log(`ToDo list (${todos.length} tasks):`)
  console.log('---------------------');

  for (let i = 0; i < todos.length; i++) {
    console.log(`-- ${todos[i]}`);
  }
}

// Utilizing our task manager

addTask('oil change');
addTask('dentist');
addTask('homework');

// console.table(todos);
completeTasks(3);
displayTaskList(); */



/* function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5)); */






/*
const arrOfArrs = [['one'], ['two'], ['three'], ['four']];

for (const subArr of arrOfArrs) {
  console.log(subArr);
}

const arr = ['one', 'two', 'three', 'four'];

for (const elem of arr) {
  console.log(elem);
} */


/* function canForm(input) {
  const longest = input.sort((a, b) => b.length - a.length)[0];

  return input.every(word => {
    return word.split('').every(chr => longest.includes(chr));
  });
}
 */

// cannot use a letter more than once version:





/* let firstName = 'Joel';
let lastName = 'Barton';
let fullName = firstName.concat(' ', lastName);

let language = 'Javascript';
// let language = '_a_a___a__';

let idx = language.lastIndexOf('a', 2);
console.log(language.lastIndexOf('a', 4));
console.log(language.lastIndexOf('a', 7));

let chrCode = language.charCodeAt(idx);
let strFromCode = String.fromCharCode(chrCode);
let indexLastA = language.lastIndexOf('a');

let a = 'a';
let b = 'b';
b = b.toUpperCase();

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');


let fact1 = 'Javascript is fun';
let fact2 = 'Kids like it too';

let compound = fact1.concat(' and ', fact2.toLowerCase());

// console.log(fact1[0], fact2.charAt(0));

let pi = (22/7).toString();
let boxNumber = typeof String(Number.parseInt(356..toString()));

console.log(boxNumber);

let str = 's sand cats cast Mississippi S KANSAS';


console.log(str.match(/[$]/));

*/
/*
let regx1 = /[:word:]/g;
let regx2 = /[\[:alpha\]]/g;
let regx3 = /[a-z]/gi; */
// let anyFullLineEndingWith = /^.*\?$/gm;

// let wordAtEndOfLine = /\S+$/gmi;


/* let text = "111a 222e 333i 444o 555u 111v 222w 333x 444y 555z"

let info = text.match(myRegExp);

if (info) {
  console.log(info)
}
 */
/*
const arr = [5, 4, 3, 3, 6];
const num = 2;

const allPairs = (arr, num) => {
  const res = [];
  if (num === 0){
    return [[]];
  }
  const subResult = allPairs(arr, num - 1);

  for (let el of arr){
    for (let sub of subResult){
      res.push([el].concat(sub));
    }
  }

  return res;
}
console.log(all

  let myRegExp = /(\b\d{3}[aeiou]\b)/gi;
   */


/*
need:
-
*/

// console.log(
//   null && false && true,
//   'hi' && -1 && []
// );
// // => 'hi'
// // => true







/*
2,
4, 6,
8, 10, 12,
14, 16, 18, 20,
?

2 + (row_number * 1)


*/


/*
Given an array of N integers, construct a product array
of the same size such that the i-th element of the product
array is equal to the product of all the elements from
the input array except for the i-th element.
*/


/*
?:


-> i: array of ints of length n

<- o: new array object of integer products of length n

expl/impl rules (validate with test-cases):
- input is always an array of (+/-) integers including zero and negative zero
- the i-th element in the product array is the product of all elements contained in the input array
  not inclusive of the i-th element in the input array

sub-problems:

traverse the input array of integers and gather all the elements to the left and right of the current element (at current index)

calculate product of gathered elements and push that product into result array

steps:
GUARD for empty array and sparse arrays

DECLARE product array as an empty array

TRAVERSE input array of elements with a normal for loop (with i)
  for left of curr element:
    slice from 0 upto the current index
  for right of curr element:
    slice from curr + 1 up to the end of the array (input array's length)

  concat these two array objects and find product
  push product into result array

input arr -> [-1, 2, 3, 4]
product arr -> []
i : 3

*/
/*
GUARD for empty array and sparse arrays

DECLARE product array as an empty array
DECLARE left product initialized to 1
DECLARE right product initialized to the product of the elements in the input array:
  forward from index 1 to the end of the array

TRAVERSE input array of elements
  REASSIGN rightProduct to the result of dividing itself by the absolute value of the current element
    - IF the current element is zero or negative zero, divide rightProduct by 1
  PUSH product into result array
  REASSIGN leftProduct to the result of multiplying itself by the current element

*/
// function makeProductArray(input) {
//   if (input.length === 0) return [];
//   if (typeof input[0] !== 'number') return 'invalid input';

//   let leftProduct = 1;
//   let rightProduct = input.slice(1, input.length).reduce((a, c) => a * c);
//   const products = [];

//   for (let i = 0, leng = input.length; i < leng; i++) {
//     if (i === 0) {
//       products.push(rightProduct);
//     } else if (i === leng - 1) {
//       leftProduct = leftProduct * input[i - 1];
//       products.push(leftProduct);
//     } else {
//       rightProduct = rightProduct / (input[i] || 1);
//       leftProduct = leftProduct * input[i - 1];
//       products.push(rightProduct * leftProduct);
//     }
//   }

//   /*
//   if at first element:
//     push right into products

//   if at last element:
//     reassign left to itself * the element to its left
//     push left into products

//   else:
//     reassign right to itself divided by the current element
//     reassign left to itself * the previous element
//     push the value of left * right into products

//   */
//   return products;
// }

// console.log(makeProductArray([-1,1,0,-3,3])) // [0,0,9,0,0]

// const sparseArray = [];
// sparseArray.length = 10;
// console.log(makeProductArray(sparseArray)) // err or 0
// console.log(makeProductArray([])) // err or 0
// console.log(makeProductArray([1, -1])) // [-1, 1]
// console.log(makeProductArray([-1, 1])) // [1, -1]
// console.log(makeProductArray([-1, 2, 3, 4, -5])) // [-120, 60, 40, 30, -24]
// console.log(makeProductArray([-1, 2, 3, 4, 5])) // [120, -60, -40, -30, -24]
// console.log(makeProductArray([-1, 2, 3, 4])) // [24, -12, -8, -6]
// console.log(makeProductArray([0, 2, 3, 4])) // [24, 0, 0, 0]
// console.log(makeProductArray([-0, 2, 3, 4])) // [24, -0, -0, -0]
// console.log(makeProductArray([1, 2, 3, 4])) // [24, 12, 8, 6]


// function vowelCount(input) {
//   const substrings = [];
//   let counter = 0;
//   let result = 0;

//   for (let i = 0; i < input.length; i++) {
//     const chr = input[i];
//     if (counter === input.length) {
//       substrings.push(chr);
//     } else {
//       substrings.push(input.slice(i, counter));
//     }
//     counter++;
//   }

//   substrings.forEach(substring => {
//     const vowels = substring.match(/[aeiou]/gi);
//     if (vowels) {
//       result += vowels.length;
//     }
//   })
//   return substrings;
// }

// console.log(vowelCount('hello')) // 13

/*
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
  // return appearances;

  return appearances.reduce((r, v, idx) => {
    if (/[aeiou]/ig.test(string[idx])) r += v;
    return r
  }, 0);
};
 */

// function intersection(arrs) {
//   const result = [];

//   for (let i = 0; i < arrs[0].length; i++) {
//     const val = arrs[0][i];
//     if (arrs[1].includes(val) && arrs[2].includes(val)) result.push(val);
//   }

//   return result;
// }

// function intersection(arrs) {
//   return arrs[0].reduce((acc, curr) => {
//     if (arrs[1].includes(curr) && arrs[2].includes(curr)) {
//       acc.push(curr);
//     }
//     return acc;
//   }, [])
// }


// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


// function union(arrays) {
//   const result = [];

//   arrays.forEach(arr => {
//     result.push(...arr);
//   });

//   return result.reduce((acc, curr) => {
//     if (!acc.includes(curr)) acc.push(curr);
//     return acc;
//   }, []);
// }
// // Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]


// function goodKeys(obj, cb) {
//   const keys = Object.keys(obj);
//   const result = [];

//   for (const key of keys) {
//     const val = obj[key];
//     if (cb(val)) {
//       result.push(key);
//     }
//   }

//   return result;
// }

// // Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']



// const maxProfit = (prices) => {
//   if (prices.length < 2) return 0; // doesn't account for sparse arrays

//   for (let i = 0; i < prices.length - 1; i++) {
//     let left = prices[i];
//     let right = prices[i + 1];

//     console.log(left, right)

//   }

// let profit = 0;
// const getMax = (prices) => Math.max(...prices);
// let min = Infinity;
// let max = getMax(prices.slice(1));

// while (prices.length > 1) {
//   let tempShifted = prices.shift();

//   if (tempShifted < min) min = tempShifted;

//   if (min === max) max = getMax(prices);

//   if (min >= max) continue;

//   let tempProfit = max - min;

//   if (tempProfit > profit) profit = tempProfit;
// }


// };


// console.log(maxProfit([2,1,2,0,1]))



// const binarySearchMatrix = (matrix, target) => {
//   let flatMatrix = matrix.flat();
//   let idx = Math.floor((flatMatrix.length / 2));
//   let cur = flatMatrix[idx];
//   if (target > flatMatrix.slice(-1)[0] || target < flatMatrix[0]) return false;

//   while (flatMatrix.length > 0) {


//     if (cur === target) return true;

//     if (cur < target) {
//       flatMatrix = flatMatrix.slice(idx + 1);
//       idx = Math.floor((flatMatrix.length / 2));
//       cur = flatMatrix[idx];
//     } else if (cur > target) {
//       flatMatrix = flatMatrix.slice(0, idx);
//       idx = Math.floor((flatMatrix.length / 2));
//       cur = flatMatrix[idx];
//     }
//   }

//   return false;
// }

// const a = [[1,3,5,7,9],[10,11,16,20,22],[23,30,34,50,54]]

// console.log(binarySearchMatrix(a, 7));


// function longestRun(input) {

//   if (!Array.isArray(input)) return 'invalid input';
//   if (input.length === 0) return 1;
//   if (input[0] === undefined) return 1;

//   return ascending(input);

// }

// function ascending(input) {
//   const lengths = [];
//   let currRunLeng = 1;
//   const consecutiveAscending = (left, right) => left + 1 === right;

//   for (let i = 1; i < input.length; i++) {
//     let left = input[i - 1];
//     let right = input[i];

//     if (consecutiveAscending(left, right)) {
//       currRunLeng++;
//     } else {
//       lengths.push(currRunLeng);
//       currRunLeng = 1;
//     }
//   }
//   return lengths;
// }

// const consecutiveDescending = (left, right) => left - 1 === right;


// console.log(longestRun([1, 2, 3, 5, 6, 7, 8, 9])); // ➞ 5
// // console.log(longestRun([3, 2, 1, 5, 6, 7, 100, 9])) // ➞ 3
// // console.log(longestRun([1, 2, 3, 5, 6, 7, 100, 9])) // ➞ 3
// // console.log(longestRun([1, 3, 3, 5, 100, 7, 100, 9])) // ➞ 1

// // console.log(longestRun([])) // ➞ 1
// // const sparse = [];
// // sparse.length = 5;
// // console.log(longestRun(sparse)) // 1


// var rearrangeArray = function(nums) {
//   nums.sort((a, b) => a - b);
//   let leftHalf = nums.splice(0, nums.length / 2).reverse();
//   let result = [];
//   while (nums.length > 0 || leftHalf.length > 0) {
//     if (nums.length !== 0) result.push(nums.pop())
//     if (leftHalf.length !== 0) result.push(leftHalf.pop())
//   }
//   return result;
// };

// console.log(rearrangeArray([15,7,13,6,3,11,14,1,20]));

// function blockPushing(arr, num) {
//   while (num > 0) {
//     for (let idx in arr) {
//       let elem = arr[idx];
//       if (elem === '>') {
//         push(arr, idx);
//       }
//     }
//     num -= 1;
//   }
//   return arr;
// }

// function push(arr, idx) {
//   if (arr[idx + 1] && arr[idx + 1] === '-') {
//     arr[idx + 1] = '>';
//     arr[idx] = '-';
//     return arr;
//   } else if (arr[idx + 1] && (arr[idx + 1] === '#' || arr[idx + 1] === '>')) {
//     if (arr[idx + 2] && arr[idx + 2] === '-') {
//       arr[idx + 2] = arr[idx + 1];
//       arr[idx + 1] = '>';
//       arr[idx] = '-';
//       return arr;
//     } else if (arr[idx + 2] && arr[idx + 2] !== '-') {
//       if (arr.slice(idx + 2).includes('-')) {
//         arr[idx + 2 + arr.slice(idx + 2).indexOf('-')] = arr[idx + 1];
//         arr[idx + 1] = '>';
//         arr[idx] = '-';
//         return arr;
//       }
//     }
//   }
//   return arr;
// }

// console.log(blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1));// ['-', '-', '>', '#', '#', '-', '-', '-']
// console.log(blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10))// ['-', '-', '-', '>', '#', '#', '#']
// console.log(blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2))// ['-', '-', '>', '-', '>', '#', '#', '-']
// console.log(blockPushing(['>', '>', '>', '-'], 3))// ['-', '>', '>', '>']
// console.log(blockPushing(['>', '-', '#', '-', '-', '>', '#', '-', '-' ], 2))// ['-', '-', '>', '#', '-','-','-', '>', '#']
// console.log(blockPushing(['-', '>', '#', '-', '#', '-', '-', '-'], 1))//, ['-', '-', '>', '#', '#', '-', '-', '-'])
// console.log(blockPushing(['>', '#', '-', '#', '-', '-', '#'], 10))// ['-', '-', '-', '>', '#', '#', '#'])
// console.log(blockPushing(['>', '-', '>', '#', '-', '-', '#', '-'], 2))// ['-', '-', '>', '-', '>', '#', '#', '-'])
// console.log(blockPushing(['>', '>', '>'], 3))// ['>', '>', '>'])
// console.log(blockPushing(['>'], 4))// ['>'])
// console.log(blockPushing(['-'], 2))// ['-'])
// console.log(blockPushing(['#'], 10))// ['#'])
// console.log(blockPushing(['#', '-', '#', '#'], 53))// ['#', '-', '#', '#'])
// console.log(blockPushing(['#', '-', '-', '>', '-', '-'], 3))// ['#', '-', '-', '-', '-', '>'])
// console.log(blockPushing(['#', '>', '#', '-', '-', '>', '>', '-', '#', '-', '-'], 2))//['#', '-', '-', '>', '#', '-', '-', '>', '>', '#', '-'])




// toAdd : 0
//  '1111'
//+ '1111'
//      ^
// res   : ''

// var addBinary = function(a, b) {
//   let aPoint = a.length - 1;
//   let bPoint = b.length - 1;
//   let result = '';
//   let toAdd  = 0;
//   let aVal;
//   let bVal;

//   while (aPoint >= 0 || bPoint >= 0) { // 3, 3
//     let sum;

//     if (aPoint < 0) {
//       aVal = 0;
//     }
//     if (bPoint < 0) {
//       bVal = 0;
//     }
//     if (bPoint >= 0) {
//       bVal = Number(b[bPoint]);
//     }
//     if (aPoint >= 0) {
//       aVal = Number(a[aPoint]);
//     }

//     sum = aVal + bVal + toAdd;
//     // console.log('sum: ' + sum, 'aVal: ' + aVal, 'bVal ' + bVal, 'toAdd: ' + toAdd);
//     if (sum === 2) {
//       toAdd = 1;
//       result = '0' + result;
//     } else if (sum === 3){
//       toAdd = 1;
//       result = '1' + result;
//     } else {
//       toAdd = 0;
//       result = String(sum) + result;
//     }

//     aPoint--;
//     bPoint--;
//   }

//   if (toAdd === 1) result = '1' + result;
//   return result;
// };

// console.log(addBinary("100", "110010"));

// //  110110'
// //    "100"
// // "110010"
// //     ^



// function pickPeaks(numbers) {
//   const result = {
//     pos:  [],
//     peaks: [],

//   };
//   let mountain = [];
//   let startMountIdx;

//   if (numbers.length < 3) return result;

// // startMountIdx : 3
// // []
// // [2,1,3,2,2,2,2,1]
// //        ^-^
//   for (let i = 1; i < numbers.length; i++) {
//     let left = numbers[i - 1]; // 3
//     let right = numbers[i];    // 1
// /*slack

// if (left < right) :
//     if startMountIndex === undefined startMountIndex = i - 1
// else if (left == right && mountain.length > 0):
// */
//     if (left < right) {
//       if (startMountIdx === undefined) startMountIdx = i - 1;
//       mountain.push(left);
//     } else if (left == right && mountain.length > 0) {
//       mountain.push(left);
//     } else if (left > right && mountain.length > 0) {
//       mountain.push(left); // peak
//       let peak = Math.max(...mountain); // 3
//       let mountainPeakIndex = mountain.indexOf(peak); // 1
//       let peakPosition = startMountIdx + mountainPeakIndex; // 2
//       result.peaks.push(peak);
//       result.pos.push(peakPosition);
//       mountain = [];
//       startMountIdx = undefined;
//     }
//   }

//   return result;
// }

// console.log(pickPeaks([2,1,3,2,2,2,2,1]));

/*
{
  '1':  [7, 0],
  '3':  [5, 4],
  '4':  [4, 1],
  '7':  [1, 3],
  '8':  [0, 2],
  '15': [-7, 5],
}


*/
// [1, 4, 8, 7, 3, 15], 8

/* {
  '1':  7
  '3':  5,
  '4':  4,
  '7':  1,
  '8':  0,
  '15': -7
} */

// function sumPairs(nums, target) {
//   if (nums.length < 2) return undefined;
//   let set = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     let toAdd = target - nums[i];
//     if (set.size > 0 && set.has(toAdd)) {
//       return [toAdd, nums[i]];
//     }
//     set.add(nums[i]);
//   }

//   return undefined;
// }

// var sumPairs=function(ints, s){
//   if (ints.length < 2) return undefined; //not enough numbers for pair.
//   let intSet = new Set()
//   intSet.add(ints[0]);

//   for (let i=1; i < ints.length; ++i){
//     let needed = s-ints[i];
//     if (intSet.has(needed)){//check if we have already seen the number needed to complete the pair.
//       return [needed,ints[i]];
//     }
//     intSet.add(ints[i]);//if not insert the number in set and continue.
//   }
//   return undefined;//No answer found
// }
// console.log(sumPairs([10, 5, 2, 3, 7, 5],         10));


function incrementString (string) {
  let digts = string.match(/[\d]*$/g);
  if (digts === null) return string.concat('1');

  let chars = makeChars(string);
  let digtsAsString = String(Number(digts.join('')) + 1);


  if (digts[0].length > digtsAsString.length) {
    let zerosToAdd = digts[0].length - digtsAsString.length;

    while (zerosToAdd > 0) {
      digtsAsString = '0' + digtsAsString;
      zerosToAdd--;
    }
  }

  return chars + digtsAsString
}

function makeChars(string) {
  let countOfNumsAtEnd = 0

  for (let i = string.length - 1; i >= 0; i--) {
    let chr = string[i];
    if (chr.match(/\D/)) break;
    if (chr.match(/\d/)) countOfNumsAtEnd++;
  }

  return string.slice(0, string.length - countOfNumsAtEnd);
}




console.log(incrementString("fo99obar99"))