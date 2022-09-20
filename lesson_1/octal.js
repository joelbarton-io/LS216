/*
input: number as string to convert
output: octal number as string result

abstractions: split to arr; reverse.  reduce individual elements to one number



*/
function octalToDecimal(numberString) {
  const arrayOfDigits = numberString.split('').reverse();

  return arrayOfDigits.map((strNum, idx) => {
    return Number(strNum) * (8 ** idx);
  }).reverse().reduce((accum, curr) => accum + curr);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9
console.log(octalToDecimal('130'));         // 88
