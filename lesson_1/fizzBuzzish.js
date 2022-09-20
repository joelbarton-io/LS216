function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

function multiplesOfThreeOrFive(values) {
  return myFilter(values, isMultipleOfThreeOrFive);
}

function myFilter(array, func) {
  let result = [];

  array.forEach(value => {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

console.log(multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]));  // [ 3, 5, 18, 15 ]
