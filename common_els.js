// two sorted arrays containing unique integers, find common elements
// linear search approach

function findCommonHashTable(one, two) {
  for (let i = 0; i < two.length; i++) {

    let target = two[i];
    let result = linearSearch(i, target, one);

    i = result;
  }
}

function linearSearch(startingIdx, target, one) { // three outcomes: found, not found, can't be found
  for (let i = startingIdx; i < one.length; i++) {
    let candidate = one[i];

    if (target === candidate) {
      console.log(target);
      return i;
    } else if (target < candidate) {
      return i;
    }
  }
}

let two = [17, 35, 39, 40, 55, 58, 60];
//          ^

let one = [13, 27, 35, 40, 49, 55, 59];
//          ^

// findCommonHashTable(one, two);

linearSearch(0, 17, two);