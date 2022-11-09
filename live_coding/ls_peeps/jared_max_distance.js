/* function convert(num, index, arr) {
  // console.log(num, index, arr);
  return String(num * arr.length ** index);
}

const transformedArray = [1, 2, 3].map(convert);
console.log(transformedArray);
 */


function maxDistance(input) {
  const arrOfStrings = input.split("");
  const claimed = arrOfStrings.map((spot) => spot === "1");
  const distances = [];

  for (let i = 0; i < claimed.length; i++) {
    const spot = claimed[i];

    if (spot) {
      distances.push(0);
      console.log('taken')
      continue;
    };

    let indexFromLeft = claimed.slice(0, i).lastIndexOf(false);
    let indexFromRight = claimed.slice(i + 1).indexOf(false);

    if (indexFromLeft !== -1) {
      console.log(i, indexFromLeft, 'left');
    }

    if (indexFromRight !== -1) {
      console.log(i, indexFromRight + 1, 'right');
    }
  }

  return distances;
}

console.log(maxDistance("001001")); // [2, 1, 0, 1, 1 0]




// [false, false, true, false, false, true]
// ->
//    [ false, false, true ] X [ false, true ]
// i:    0      1      2    3     4      5

// l: 0
// r: 4

// i: 3

//    [ 2, 1, 0, 1, 1, 0 ]
