/* You were given an array of all students and some important data about them, grouped by their teacher.
Create a function that will "ungroup" every student so you can look at their details individually. */

/* understanding the problem part 1
---------------------------------------------------------------

terms: "ungroup"
requirements:
input: array of teacher objects
output: array of student objects
test cases:

---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

roadmap for P.O.D.:

in my own words...
  ...""...


---------------------------------------------------------------
*/
/* steps
---------------------------------------------------------------

mental model:

abstract algo & method exploration:

(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* testing
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function ungroup(data) {
  let result = [];
  data.forEach(el => {
    let studentData = el.data;
    studentData.forEach(student => {
      let studentObj = {};
      let studentProperties = Object.keys(student);
      studentObj.teacher = el.teacher
      studentProperties.forEach(prop => studentObj[prop] = student[prop])
      result.push(studentObj);
    });
  });
  return result;
}

let data = [{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}];

console.log(ungroup(data));
/*
[{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
 */