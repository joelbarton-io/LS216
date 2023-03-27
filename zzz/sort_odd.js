function sortArray(array) {
  /*
    sort a copy of input array

    filter sorted copy for only odd values and reverse

    traverse original array elements

      if curr el is odd, replace with popped off value from filtered sorted array
      else leave
  */
  // console.log('input:', array)
  let isOdd = el => Math.abs(el % 2 ) === 1;
  let copy = array.slice().sort((a, b) => a - b).filter(isOdd).reverse(); // default sort uses lexographic comparison

  return array.map(el => {
    return isOdd(el) ? copy.pop() : el;
  });
}

console.log(sortArray([ 9, -1, 1, 11, 110, 17, 0 ]));


// mutation?
// great coverage for input types
// I really liked your comments when writing test cases
// do you need to preserve the original indices of the odd numbers?