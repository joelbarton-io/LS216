//
function myReduce(array, func, initialValue) {
  let accum = initialValue || array[0]; // initialize accum

  array.forEach((curr) => { // iterate over elements; initialize curr
    accum = func(accum, curr) // invoke callback with args; assign acc the return value of the invocation of the callback
  });

  return accum; // return accum
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(
  myReduce([5, 12, 15, 1, 6], sum, 10),
  myReduce([5, 12, 15, 1, 6], smallest),
);

function longestWord(words) {
  return myReduce(words, longest);
}

function longest(result, currentWord) {
  return currentWord.length >= result.length ? currentWord : result;
}

console.log(longestWord(['abc', 'launch', 'targets', '']));
      // "targets"