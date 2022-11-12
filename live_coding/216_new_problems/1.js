/*
A distinct string is a string that is present only
once in an array. ​Given an array of strings, arr,
and an integer, k, return the kth distinct string
present in arr. If there are fewer than k distinct
strings, return an empty string "".​Note that the
result string is the one encountered earliest in
the array.
*/





// console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
// //               ^1st                ^2nd (k == 2)

// console.log(distinctString(["d","b","c","b","c","a"], 1)); // "d"

// console.log(distinctString(["d","b","c","b","c","a"], 3)); // "" ['d', 'a']
//                                                   //  ^1st ^2nd ^no third (k = 3)

// console.log(distinctString(["d", "a"], 2)); // "a"

// console.log(distinctString(["d","b","c","b","c", "", "a"], 2)); // ""
//               ^1st                ^2nd (k == 2)
/*

- can we assume that the input array will always be populated by at least 1 string element? YES
- does case matter, would B and b be considered the same? (non-distinct) YES case matters so no b and B are not the same
- would an element in the array whose value is an empty string be considered a distinct string? YES
- will k always be a positive integer? (k > -1)? NO, can be non-positive integer,
- how should we handle invalid k values (error message)
- do we need to consider +/- 0 as possibility for k? YES, k can be signed zero (-)


-> i: array of string elements and a integer value k

<- o: '' || ERR || the k-th `distinct string` present in the input array

explicit rules:
- 'distinct string': a string that only appears ONCE in the input array
- If there are fewer than k distinct strings, return an empty string ""

implicit rules:
- need to find some way to preserve insertion order for object (Map)

mental model & sub-problems:

- validation of input

figure out which of the string elements in the input array are distinct, and then from this list of strings, return the
k-th element or an empty string
  - creating an map from input array for each element in the input array {'d' : 1, 'b': 2 ..., 'a': 1}
  - filtration of input array elements

steps:

GUARD against:
  - invalid inputs
    - if k is a negative integer (includes -0) -> ERR invalid k
  - sparse arrays? or anything else with arrays?

TRAVERSE input array of strings (CREATE MAP)
  for each element string:
    if prop exists in map:
      - increment that prop's value by 1
    else does not exist in map:
      - create prop and initialize value to 1

TRANSFORM map object into array of subarray entries
FILTER array of arrays by entry value (entry[1]) -> select those subarrays whose value is 1
MAP the filtered array of subarrays into an array of strings -> get the k-th element


*/
function distinctString(arr, k) {
  if (typeof k !== 'number' || k < 1) return 'invalid k';

  // return arr;
  const occurences = makeMap(arr);

  const entries = Object.entries(occurences);
  const filteredEntries = entries.filter(([,val]) => val === 1);
  const arrStrings = filteredEntries.map(([str, ]) => str);

  if (arrStrings.length < k) return '';
  return  arrStrings[k - 1]
}

function makeMap(arr) {
  return arr.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }

    return acc;
  }, {});
}


/* console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a"
//               ^1st                ^2nd (k == 2)
console.log(distinctString(["d","b","c","b","c","a"], 1)); // "d"
console.log(distinctString(["d","b","c","b","c","a"], 3)); // "" ['d', 'a']
                                                  //  ^1st ^2nd ^no third (k = 3)
console.log(distinctString(["d", "a"], 2)); // "a"
console.log(distinctString(["d","b","c","b","c", "", "a"], 2)); // ""
// ~> 40:32 */

// after the fact:
const sparse = ['a', 'b', 'b', 'c'];
sparse.length = 10;
// delete sparse[2] // changes result to: "b"
console.log(distinctString(sparse, 2)); // "c"


/*

Will we always receive precisely two arguments? If not, what should I do if an argument is omitted? What should I do if there are more than two arguments?
  - made the assumption there would be the correct # of arguments

Will the first argument always be an array? If not, what should I do?
  - given the proble description, I think it was fair to assume the first argument would be an array object so
  doing input type validation wasn't something I deemed necessary.  That being said, it was something I would have usually done
  if the problem description was more opaque.

Will the second argument always be an integer? If not, what should I do if it isn't?
  - again, the problem description gave no indication that the 2nd argument would be anything other than an int.

Will the second argument ever be 0? If so, what should I do?
  - I DID consider the case of k = zero, but didn't connect this to the fact that k starts at 1.  It would have been an easy fix though.

Will the second argument ever be negative? If so, what should I do?
  - I didn't ask that question as such, but did guard against non-positive k values

Can the array be sparse? If so, how should I handle the missing elements?
  - Didn't address this since sparse arrays are kind of dumb
Can the array contain any number of elements?
Can the array be empty? If so, what should I return in that case?
Will strings always be one character long, or can they be any length?
Will k always be a positive number greater than 0? If not, how should I handle negative numbers and 0?
Should I return an empty string if there aren't k distinct strings?
*/