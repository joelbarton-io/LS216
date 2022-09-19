let firstName = 'joel';
let lastName = 'barton';

let fullName = firstName + ' ' + lastName;
// console.log(firstName.concat(lastName));
// console.log(fullName.split(' '));

let language = 'JavaScript';
let idx = language.indexOf('S');
// console.log(idx);

let charCode = language.charCodeAt(idx);
// console.log(charCode);
// console.log(String.fromCharCode(charCode));
// console.log(language.lastIndexOf('a'));


let a = 'a';
let b = 'b';

// console.log(
//   a > b,
//   a > b.toUpperCase(),
// );

let aIndex = language.indexOf('a');
let vIndex = language.indexOf('v');

// console.log(
//   language.substr(aIndex, 4),
//   language.substr(vIndex, 4),
// )

// console.log(
//   language.substring(aIndex, 4),
//   language.substring(vIndex, 4),
// )

let fact1 = 'Javascript is fun';
let fact2 = 'Kids like it too';

let compoundSentence = fact1 + ' and ' + fact2.toLowerCase();
// console.log(compoundSentence);
// console.log(fact1[0], fact2[0]);

let pi = (22/7).toString();
// console.log(pi)
// console.log(pi.lastIndexOf('14'));
// console.log(pi.indexOf('14'));

let boxNumber = 356..toString() // or let boxNumber = (356).toString()
// console.log(boxNumber);

// console.log(typeof Number.parseInt(boxNumber, 10));
// console.log(typeof String(boxNumber));

const readlineSync = require('readline-sync');
const name = readlineSync.prompt('What is your name?');
// const msg = ;

if (name.endsWith('!')) {
  console.log((`hello ${name.slice(0, -1)}` + ' why are we screaming?').toUpperCase());
} else {
  console.log(`hello ${name}`);
}