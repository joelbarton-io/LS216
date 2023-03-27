function persistence(num) {
  if (String(num).length === 1) return 0;
  let returnValue = 0

  // check length
  while (String(num).length > 1) {

    // convert number to string then array of digits
    let arrOfDigits = String(num).split('').map(Number);

    // reduce array to number
    num = arrOfDigits.reduce((a, b) => a * b);
    returnValue++;
  }

  return returnValue;
}