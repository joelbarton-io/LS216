function solve(relations) {
  let result = new Set();
  const hashTable = {};

  for (let index in relations) {
    let value = relations[index];
    let key = JSON.stringify(value);
    hashTable[key] = value;
  }

  const hashTableKeys = Object.keys(hashTable);

  hashTableKeys.forEach((elem) => {
    let [first, last] = hashTable[elem];
    let flippedKey = JSON.stringify([last, first]);
    if (hashTable[flippedKey]) {
      result.add(first);
      result.add(last);
      delete hashTable[elem];
    }
  });

  return Array.from(new Set(result.sort((a, b) => a - b)));
}

const relations = [
  [0, 1],
  [2, 0],
  [0, 2],
  [1, 0],
];

console.log(solve(relations));
