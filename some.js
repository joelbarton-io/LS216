function myOwnEvery(array, func) {
  array.forEach((elem, idx, arr) => {
    if (!func(elem)) {
      return false;
    }
  });

  return true;
}

function myOwnSome(array, func) {
  let result = false;

  array.forEach((elem, idx, arr) => {
    if (func(elem)) {
      result = true;
    }

    if (!result) {
      return result;
    }
  });

  return result
}


let isAString = value => typeof value === 'string';
console.log(
  myOwnEvery(['a', 'a234', '1abc'], isAString),
  myOwnSome([1, 2, 3, [], 'a', {}], isAString),
  )
;       // true