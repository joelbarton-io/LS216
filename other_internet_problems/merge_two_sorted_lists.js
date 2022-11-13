/*
idiomatic -> a.concat(b).sort((a, b) => a - b);

splice, slice
i : two sorted (asc) lists of potentially different lengths
o : a single sorted (asc) list

using two pointers, iterate through both lists

result = [3, 5, 8, 9]
a = [5, 10, 15]
b = [3, 8, 9]

indexA 1
indexB 3

while indexA < lengthA && indexB < lengthB

    if elA === elB
        increment both indices
        push both elements into new list
    if elA > elB
        increment indexB
        push elB into new list
    if elA < elB
        increment indexA
        push elA into new list


if indexA <= lengthA        (got to the end of listA)
    push listB.slice(indexB) into result list
if indexB <= lengthB        (got to the end of listB)
    push listA.slice(indexA) into result list

*/

function solve(listA, listB) {
  if (listA.length === 0) {
    return listB;
  } else if (listB.length === 0) {
    return listA;
  }

  let indexA = 0;
  let indexB = 0;
  const result = [];

  while (indexA < listA.length && indexB < listB.length) {
    let elA = listA[indexA];
    let elB = listB[indexB];

    if (elA === elB) {
      result.push(elA, elB);
      indexA += 1;
      indexB += 1;
    } else if (elA > elB) {
      result.push(elB);
      indexB += 1;
    } else if (elA < elB) {
      result.push(elA);
      indexA += 1;
    }
  }
  let chunk;
  if (indexB === listB.length) {
    chunk = listA.slice(indexA);
  } else if (indexA === listA.length) {
    chunk = listB.slice(indexB);
  }

  result.push(...chunk);
  return result;
}
let a = [0]
let b = [0, 0]

console.log(solve(a, b));
