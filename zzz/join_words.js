const join = (arr) => {
  // returns: two element array [joined-words, min overlap value]

  // declare `overlaps` init []
  const overlaps = [];
  let left = 0;
  let right = 1;

  // traverse input array elements with two pointers: `left` and `right`
  while (right < arr.length) {
    // check if right edge of `left` can match left edge of `right` (helper)
    const info = compare(arr[left], arr[right]);

    // push overlap length into `overlaps`
    overlaps.push(info.pop())

    // set current `right` string to new combined word inside of `arr`
    arr[right] = info.pop();

    left++;
    right++;
  }

  const minOverlap = Math.min(...overlaps) || 0;

  return [arr[arr.length - 1], minOverlap];

  // if `overlaps` length is 0, the min overlap is also zero
}

function compare(left, right) {
  // returns a number and the combined word
  let startingLeftIdx = 0;

  while (startingLeftIdx < left.length) {
    // starting with the entire `left` word check if it matches beginning of `right` start
    let leftChunk = left.slice(startingLeftIdx);

    // get `left`'s length, store in variable
    let leftChunkLeng = leftChunk.length;
    let rightChunk = right.slice(0, leftChunkLeng);

    // if a positive match is found, need to remember the starting index of `left` and the ending index of `right` chunks
    if (leftChunk === rightChunk) { // overlap detected
      // console.log(leftChunk, rightChunk, startingLeftIdx);

      // using these indices, create the combined word and based on the length of `left` the overlap length
      const overlappedWords = left.slice(0, startingLeftIdx).concat(right);
      return [overlappedWords, leftChunkLeng]; // working
    }
    // move starting index of `left` slice by +1
    startingLeftIdx++;
  }

  // if no match is found after looping, return [left + right, 0]
  return [left + right, 0];
}

// console.log(compare('oven', 'envier'));
console.log(join(["oven", "envier", "erase", "serious"])) //["ovenvieraserious", 2]
console.log(join(["move", "over", "very"])) //["movery", 3]
console.log(join(["to", "ops", "psy", "syllable"])) //["topsyllable", 1]
console.log(join(["aaa", "bbb", "ccc", "ddd"])) //["aaabbbcccddd", 0]