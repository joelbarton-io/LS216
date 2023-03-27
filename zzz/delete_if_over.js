/*
declare `counts` object; initialize to empty object

traverse arr elems

  check if curr el is key in `counts`
    - if not create that entry

    - if present and count[elem] is <= n
      - add elem to result array
      - increment count[elem] by 1

    - else if present and count[elem] > n
      - skip elem
*/

function deleteNth(arr,n){
  const result = [];
  const counts = {};

  arr.forEach(elem => {
    let key = String(elem);

    if (counts[key] == undefined) {
      counts[key] = 1;
      result.push(elem);
    } else { // key is present
      if (counts[key] < n) result.push(elem);
      counts[key]++;
    }
  });

  return result;
}

let arr = [20,37,20,21]
let n = 1;

console.log(deleteNth(arr, n));