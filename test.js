'enable strict';

function mutualPairs(arrayOfArrays) {
  return 'hi';
  arrayOfArrays = returnUniqueArray(arrayOfArrays);
  let results = [];

  arrayOfArrays.forEach((elemenPair, index) => {


    let restOfArray = arrayOfArrays.slice(index + 1);

    let pairExists = includesPair(restOfArray, elemenPair.slice(0).reverse())

    console.log(pairExists);

    if (pairExists) {
      results.push(elemenPair);
    }
  });


}


function returnUniqueArray(array) {
  let result = [];
  array.forEach((element) => {
    if (!result.includes(element)) result.push(element)
  });

  return result;
}

function includesPair(array, elementPair) {
  return array.some((element) => {
    return (element[0] === elementPair[0] &&
    element[1] === elementPair[1])
  });
}




console.log(mutualPairs([[0, 2], [2, 0], [1, 3]]))// => [[0, 2]]
console.log(mutualPairs[[0, 2], [1, 0], [1, 3]]) //=> []
console.log(mutualPairs[[0, 'string'], ['string', 0], [1, 3]]) //=> [[0, 'string']]
console.log(mutualPairs[[0, 2], [2, 0], [1, 0], [0, 1]])// => [[0, 2], [1, 0]];
console.log(mutualPairs[['string', 'second'], [1, 0], [0, 1] ['second', 'string']]) //=> [['string', 'second'], [1, 0]]
console.log(mutualPairs[[1, 0], [1, 0]]) //=> [[]]