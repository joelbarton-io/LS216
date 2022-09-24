function isBalanced(str) {
  let counter = 0;
  const arr = str.split('');

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === '(') {
      counter += 1;
    } else if (arr[idx] === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?)'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

