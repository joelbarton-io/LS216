function myMap(array, func) {
  const newArr = [];
  array.forEach((element, index) => {
    newArr.push(func(element));
  });
  return array;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]