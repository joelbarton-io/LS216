




function productPair(inputArr, k) {
  if (k < 1) return null;
  if (!Array.isArray(inputArr)) return null;
  if (inputArr == null || inputArr.length === 0) return null;

  inputArr.sort((a, b) => Math.abs(a) - Math.abs(b));
  const uppers = inputArr.slice(inputArr.length - k);
  let minusCount = 0;

  for (let i = 0; i < uppers.length; i++) {
    const elem = uppers[i];
    if (elem < 0) minusCount++;
  }
  const isOdd = (minusCount) => !(minusCount % 2 === 0);
  const uppersCopy = uppers.slice(0);

  const lowers = inputArr.slice(0, inputArr.length - k);

  if (isOdd(minusCount)) {

   if (uppersCopy.some(num => num >= 0)) {
    let smallestPos = uppersCopy.filter(num => num >= 0)[0];
    let biggestPos = lowers.filter(num => num >= 0).slice(-1)[0];

    let smallestNeg = uppersCopy.filter(num => num <= -0)[0];
    let biggestNeg = lowers.filter(num => num <= -0).slice(-1)[0];

    if ((smallestPos * biggestPos) > (smallestNeg * biggestNeg)) {
      let smallestNegIdx = uppersCopy.indexOf(smallestNeg);
      uppersCopy[smallestNegIdx] = biggestPos;

    } else {
      let smallestPosIdx = uppersCopy.indexOf(smallestPos);
      uppersCopy[smallestPosIdx] = biggestNeg;
    }
   } else {
    let smallestNeg = uppersCopy.filter(num => num <= -0)[0];
    let biggestPos = lowers.filter(num => num >= 0).slice(-1)[0];
    let smallestNegIdx = uppersCopy.indexOf(smallestNeg);
    uppersCopy[smallestNegIdx] = biggestPos;
   }

  }
  const max = uppersCopy.reduce((a, c) => a * c);
  return max;
}


// console.table(productPair([1, -2, -3, 4, -6, 7], 2)) // [28, ?]
// console.table(productPair([0, -1, 1], 2)) // [0 || -0,  -1]
// console.table(productPair([-5, -3, -2], 2)) // [15, 6]
console.table(productPair([-5, -3, -2], 3)) // [15, 15]
// console.table(productPair([-5, -3, -2, 1], 2)) // [15, 6]


/*
function maxProductSubarrayOfSizeK(A, n, k)
{
    // sorting given input array
    A.sort(function(a, b){return a - b});

    // variable to store final product of
    // all element of sub-sequence of size k
    let product = 1;
    let i;

    // CASE I
    // If max element is 0 and
    // k is odd then max product will be 0
    if (A[n - 1] == 0 && k % 2 != 0)
        return 0;

    // CASE II
    // If all elements are negative and
    // k is odd then max product will be
    // product of rightmost-subarray of size k
    if (A[n - 1] <= 0 && k % 2 != 0) {
        for (i = n - 1; i >= n - k; i--)
            product *= A[i];
        return product;
    }

    // else
    // i is current left pointer index
    i = 0;

    // j is current right pointer index
    let j = n - 1;

    // CASE III
    // if k is odd and rightmost element in
    // sorted array is positive then it
    // must come in subsequence
    // Multiplying A[j] with product and
    // correspondingly changing j
    if (k % 2 != 0) {
        product *= A[j];
        j--;
        k--;
    }

    // CASE IV
    // Now k is even
    // Now we deal with pairs
    // Each time a pair is multiplied to
    // product i.e.. two elements are added to
    // subsequence each time  Effectively k becomes half
    // Hence, k >>= 1 means k /= 2
    k >>= 1;

    // Now finding k corresponding pairs
    // to get maximum possible value of product
    for (let itr = 0; itr < k; itr++) {

        // product from left pointers
        let left_product = A[i] * A[i + 1];

        // product from right pointers
        let right_product = A[j] * A[j - 1];

        // Taking the max product from two choices
        // Correspondingly changing the pointer's position
        if (left_product > right_product) {
            product *= left_product;
            i += 2;
        }
        else {
            product *= right_product;
            j -= 2;
        }
    }

    // Finally return product
    return product;
} */




/*

*/