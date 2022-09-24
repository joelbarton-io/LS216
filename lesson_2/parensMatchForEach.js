function isBalanced(str) {
  let counter = 0;
  let broken = false;
  
  str.split('').forEach(chr => {
    if (chr === '(') {
      counter += 1;
    } else if (chr === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      broken = true;
    }
  });

  if (broken) return false;
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

