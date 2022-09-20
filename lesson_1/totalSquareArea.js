let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

// abstraction: reduction -> reduce method
// array of arrays -> single number

// function totalArea(arrOfRectangles) {
//   let result = arrOfRectangles.reduce((accum, current) => {
//     if (Array.isArray(accum)) {
//       return (accum[0] * accum[1]) + (current[0] * current[1]);
//     }
//     return accum +  (current[0] * current[1]);
//   });

//   return result;
// }

// console.log(totalArea(rectangles));

// filter input array to only include squares;
// map filtered array to one-dim array;
// reduce to sum of square areas;

function totalSquareArea(arr) {
  const squares = arr.filter((arr) => arr[0] === arr[1]);
  const areas = squares.map((array) => array[0] * array[1]);
  return areas.reduce((accum, curr) => accum + curr);
}

console.log(totalSquareArea(rectangles));    // 121