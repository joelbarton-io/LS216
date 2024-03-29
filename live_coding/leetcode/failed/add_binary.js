// toAdd : 0
//  '1111'
//+ '1111'
//      ^
// res   : ''

var addBinary = function (a, b) {
  let aPoint = a.length - 1;
  let bPoint = b.length - 1;
  let result = '';
  let toAdd = 0;
  let aVal;
  let bVal;

  while (aPoint >= 0 || bPoint >= 0) { // 3, 3
    let sum;

    if (aPoint < 0) {
      aVal = 0;
    }
    if (bPoint < 0) {
      bVal = 0;
    }
    if (bPoint >= 0) {
      bVal = Number(b[bPoint]);
    }
    if (aPoint >= 0) {
      aVal = Number(a[aPoint]);
    }

    sum = aVal + bVal + toAdd;
    // console.log('sum: ' + sum, 'aVal: ' + aVal, 'bVal ' + bVal, 'toAdd: ' + toAdd);
    if (sum === 2) {
      toAdd = 1;
      result = '0' + result;
    } else if (sum === 3) {
      toAdd = 1;
      result = '1' + result;
    } else {
      toAdd = 0;
      result = String(sum) + result;
    }

    aPoint--;
    bPoint--;
  }

  if (toAdd === 1) result = '1' + result;
  return result;
};
