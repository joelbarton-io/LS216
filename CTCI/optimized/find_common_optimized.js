// two sorted arrays containing unique integers, find common elements
// linear search approach

function findCommonLinearSearch(one, two) {
  let prevj = 0; 

  for (let i = 0; i < two.length; i++) {
    let target = two[i];

    for (let j = prevj; j < one.length; j++) {
      const curr = one[j];

       if (target === curr) {
        console.log(target);
        prevj = j;
        break;
      } else if (target < curr) {
        prevj = j;
        break;
      }
    }
  }
}

let two = [17, 35, 39, 40, 55, 58, 60];
let one = [13, 27, 35, 40, 49, 55, 59];

findCommonLinearSearch(one, two);
