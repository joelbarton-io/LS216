console.log(getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}))
/* ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
} */

console.log(getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}))
/* {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
} */

/*
traverse keys array

if value.marks is unique || value.marks !== uniq && value.age > otherObj.age
*/

function getObject(objs) {
  const keys = Object.keys(objs);
  const seenMarks = [];
  const markSeenBefore = (mark) => seenMarks.includes(mark);

  keys.forEach(key => {
    if (markSeenBefore(objs[key].marks)) {
      // non unique mark, meaning we need to compare it to other object's age
      console.log('seen')
    } else {
      console.log('new');
      seenMarks.push(objs[key].marks);
    }

  });

}

