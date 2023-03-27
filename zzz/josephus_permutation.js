function josephus (savages, k) {
  let idx = 0;
  const suicideOrder = [];

  while (savages.length) {
    let leng = savages.length;
    idx += k - 1;
    if (idx >= leng) idx %= leng;

    suicideOrder.push(savages.splice(idx, 1)[0])
  }

  return suicideOrder;
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3));

/*
function josephus (savages, k) {
  // only increment the counter when a savage is temporarily spared
  // can we used delete? this would produce a sparse array, would that work?

  // alternatively, should we modify the length of the array?  this would mean that we are always incrementing the counter
  let idx = 0;
  const result = [];

  while (savages.length) {
    const l = savages.length;
    if (l === 1) {
      result.push(savages.pop());
      return result;
    }
    idx += k - 1;

    if (idx >= l) idx = idx % l;
    result.push(savages.splice(idx, 1)[0])
  }
}

console.log(josephus([1, 2, 3, 4, 5, 6, 7], 3)); */