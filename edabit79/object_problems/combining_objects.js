// INTERESTING BEHAVIOUR WITH `myObj.hasOwnProperty(myProp)` vs myObj[myProp] in a conditional
// https://edabit.com/challenge/JyebLWZjCv5jYhrBW


/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------
questions:
1. will the various values always be valid integers
2. will the various values always be integers? (strings? or a composite datatype)

3. if not, then this is a much more challenging problem


terms:
input: two objects with at least one shared property
output: a single new object that combines the values of the shared properties in aggregate
center case:
edge case:

RULES:
- if there are 3 distinct properties across the two objects, then the returned object will have three properties
- The input objects won't have the same number of key-value pairs
- The return object MUST return the values ordered from lowest to highest so your answers can match the test answers. (sort descending in value)

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."join two user objects into a single household.  If they share a prop, then combine the respective values for that shared property (make sure not to overwrite the value of one with the other)"...


mental model/roadmap:
  2 user OBJECT
  ... OBJECT -> two arrays
  ...... build result object by iterating over the two dimensional arrays
  1 household OBJECT

exploration:

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract algo :
CREATE a result object
TRANSFORM the two user objects into arrays of their entries
JOIN these two arrays together

TRAVERSE the new combined users array
  FOR each entry
    CHECk if the result object has the prop
      IF YES -> increment the prop's value by the current value in the subarray
      IF NO -> create that property on the result object with the current value in the subarray

  TRANSFORM result object into an array of arrays
  SORT by 'value' descending order  .sort((a, b) => b[1] - a[1] )

  TRANSFORM sorted array of arrays back into object and return that object

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

result = {
  powerplant: 70000,
  rental: 22000,
  teaching: 40000,
}

joined household array = [[powerPlant: 70000], [rental: 12000],[ teaching: 40000], [rental: 10000] ]


implement with code

---------------------------------------------------------------
*/

function combine(husband, wife) {
  let result = {};
  const husArr = Object.entries(husband);
  const wifeArr = Object.entries(wife);
  const houseHoldArr = [...husArr, ...wifeArr];

  houseHoldArr.forEach(entry => {
    let prop = entry[0];
    let val = entry[1];

    if (result[prop]) {
      let existingValue = result[prop];
      result[prop] = existingValue + val;
    } else {
      result[prop] = val;
    }
  })

  let resultEntries = Object.entries(result).sort((a, b) => a[1] - b[1]);
  result = Object.fromEntries(resultEntries);
  return result;
}

/*

const user1 = {
  powerPlant: 70000,
  rental: 12000
}

const user2 = {
  teaching: 40000,
  rental: 10000
}
 */


// result object:
/* {
  powerPlant: 70000,
  teaching: 40000,
  rental: 22000   // The rental income is added together.
} */

const test1User1Income = {
  softwareDeveloping: 70000,
  rental: 10000,
};

const test1User2Income = {
  teaching: 40000,
  rental: 12000,
};


console.log(combine(test1User1Income, test1User2Income));

const test1Answer = {
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};

/*
const test2User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  rental: 10000,
};

const test2User2Income = {
  teaching: 40000,
  rental: 12000,
};

const test2Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  teaching: 40000,
  softwareDeveloping: 70000,
};



const test3User1Income = {
  softwareDeveloping: 70000,
  pizzaDeliverying: 6000,
  sellingGarlic: 6000,
  rental: 10000,
};

const test3User2Income = {
  rental: 12000,
  sellingGarlic: 32000,
};

const test3Answer = {
  pizzaDeliverying: 6000,
  rental: 22000,
  sellingGarlic: 38000,
  softwareDeveloping: 70000,
};
 */