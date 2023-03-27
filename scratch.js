// let map = new Map();
// let arr = ['a', 'b', 'c', 'd', 'e'];

// arr.forEach((el, i) => map.set(el, i))


// // for (let [key, val] of map) {
// //   console.log(key, val);
// // }

// map.set(undefined, 'is undefined')
// const myFunction = () => "function's return value";
// map.set(myFunction, myFunction());
// console.log(map.get(myFunction));
// map.set('new val');
// console.log(map);

var isValid = function (s) {
  let stack = ''; // '('

  for (let i = 0; i < s.length; i++) {
    console.log(stack);
    let curr = s[i];
    if (curr === '(' || curr === '[' || curr === '{') {
      stack += curr;
      continue;
    }

    let last = stack.slice(-1);

    if (curr === ')' && last === '(') {
      stack = stack.slice(0, stack.length - 1);
    } else if (curr === ']' && last === ']') {
      stack = stack.slice(0, stack.length - 1);
    } else if (curr === '}' && last === '}') {
      stack = stack.slice(0, stack.length - 1);
    } else {
      return false;
    }
  }
  console.log(stack);
  return stack.length === 0;
};

const input = "()[]{}";
console.log(isValid(input)) // false
