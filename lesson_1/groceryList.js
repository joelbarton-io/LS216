function buyFruit(arr) {
  const result = [];

  arr.forEach(prod => {
    for (let count = 0; count < prod[1]; count++) {
      result.push(prod[0]);
    }
  });
  return result;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
