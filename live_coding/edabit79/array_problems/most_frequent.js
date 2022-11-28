/* function countElement(arr, targetElement) {
  return arr.reduce((count, element) => {
    if (element === targetElement) {
      return count += 1;
    } else {
      return count;
    }
  }, 0)
}

function findFrequent(arr) {
  let sortDescByCount = arr.sort((a, b) => {
    let aCount = countElement(arr, a);
    let bCount = countElement(arr, b);

    if (aCount < bCount) {
      return 1;
    }
    if (aCount > bCount) {
      return -1;
    }
    return 0;
  })

  let mostFrequentElement = sortDescByCount[0]
  return mostFrequentElement;
} */

function hashFromArray(arr) {
  function callback(accum, cur) {
    if (accum[cur]) {
      accum[cur]++;
    } else {
      accum[cur] = 1;
    }

    return accum;
  }

  return arr.reduce(callback, {});
}

console.table(hashFromArray([undefined, undefined, 'undefined']))
