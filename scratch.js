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