function left(result) { // left path
  const prev = result[result.length - 1]; // fetch previous array from end of result

  if (prev.length === 1) {
    return result; // base case
  } else {
    const sum = prev[0] + prev[1];
    const next = prev.slice(2);

    next.unshift(sum); // prepend sum to next
    result.push(next);

    return left(result); // recusive case
  }
}

function right(result) { // right path
  const prev = result[result.length - 1]; // fetch previous array from end of result

  if (prev.length === 1) {
    return result; // base case
  } else {
    const sum = prev[prev.length - 1] + prev[prev.length - 2];
    const next = prev.slice(0, prev.length - 2);

    next.push(sum); // append sum to next
    result.push(next);

    return right(result); // recusive case
  }
}

function squish(initialArr, direction) {
  if (direction === 'left') {
    return left([initialArr]);
  } else if (direction === 'right') {
    return right([initialArr]);
  }
}

console.log(squish([1, 2, 3, 4, 5], "left")) // [[1, 2, 3, 4, 5], [3, 3, 4, 5], [6, 4, 5], [10, 5], [15]]
console.log(squish([1, 2, 3, 4, 5], "right")) // [[1, 2, 3, 4, 5], [1, 2, 3, 9], [1, 2, 12], [1, 14], [15]]


// function right(result, prev) { // right path
//   if (prev.length === 1) {
//     result.push(prev);
//     return result; // base case
//   } else if (result.length === 0) {
//     result.push(prev);
//     return left(result, prev); // "first" (recursive) call
//   } else {
//     const sum = prev[0] + prev[1];
//     const next = prev.slice(2);

//     next.unshift(sum);
//     result.push(next);
//     return left(result, next); // recusive case
//   }
// }