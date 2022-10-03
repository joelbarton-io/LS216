/*
i: two strings that represent version numbers
o: 1, -1, 0 depending on the two numbers' relationship to one another
  null if either input contains invalid character (anything that isn't a '.' or a Number); (guard clause!)

Rules:

- need  arrays of equal length before actual comparison takes place
- must contain some number value; cannot be an empty string or just a '.' without a number
- must have two version numbers to compare


Steps:

- determine if input string contains any invalid characters (return null)

- whichever input stringAsArray is longer, determines required length of other input stringAsArray
  - pushing string '0' into shorted stringAsArray until both are of equal length (SEQUENTIAL COMPARISON CAN NOW BEGIN)


Abstract algo:

- guard clause: ... validInputs helper?
  - if either input is an invalid datatype ... return null (ask a question here)
  - if either input has an invalid character ... return null
    - match(/[^0-9.]/)
  - if either input lacks a number character (0-9) ... return null

- compare lengths of inputs
  - if different lengths, add string 0 to end of shorter array
    - do this until they are of the same length

- traverse one of the stringAsArrays
  - compare the value at the respective index for each array;
    - if they are equal
      - this is the last element ... return 0
      - else ... go next

    - if left value is greater ... return 1
    - if right value is greater ... return -1

-------
*/

function invalidInputs(version1, version2) {
  if (typeof version1 !== 'string' || typeof version2 !== 'string') {
    return true;
  }
  if (version1.match(/[^0-9.]/) || version2.match(/[^0-9.]/)) {
    return true;
  }
  if (!new RegExp(/[0-9]/).test(version1) || !new RegExp(/[0-9]/).test(version2)) {
    return true
  }
  if (version1[0] === '.' || version1[version1.length - 1] === '.' || version2[0] === '.' || version2[version2.length - 1] === '.') {
    return true;
  }
  return false;
}

function compareVersions(version1, version2) {
  if (invalidInputs(version1, version2)) {
    return null;
  }

  const vers1Array = version1.split('.');
  const vers2Array = version2.split('.');

  while (vers1Array.length !== vers2Array.length) {
    if (vers1Array.length < vers2Array.length) {
      vers1Array.push('0');
    } else {
      vers2Array.push('0');
    }
  }

  for (let idx = 0; idx < vers1Array.length; idx += 1) {
    if (Number(vers1Array[idx]) === Number(vers2Array[idx])) {
      continue;
    } else if (Number(vers1Array[idx]) > Number(vers2Array[idx])) {
      return 1;
    } else if (Number(vers1Array[idx]) < Number(vers2Array[idx])) {
      return -1;
    }
  }
  return 0;
}

// happy path
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.2') === -1);
console.log(compareVersions('1.2', '3.2.3') === -1);
console.log(compareVersions('3.2.3', '3.0.0') === 1);
console.log(compareVersions('3.0.0', '4.2.3.0') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('1.0.0.0.0.0', '1') === 0);


// problematic path
console.log(compareVersions('3.0.0') === null); // wrong arg count
console.log(compareVersions('3.0.0', undefined) === null);
console.log(compareVersions('3.2.3$$$', '1.0') === null); // invalid character $
console.log(compareVersions([], {}) === null); // wrong data type detected
console.log(compareVersions('', '1.4.3') === null); // empty string
console.log(compareVersions('.', '1.3') === null); // invalid input
console.log(compareVersions('.......', '1.3') === null); // invalid input
console.log(compareVersions('1.18.2.', '13.37') === null);
console.log(compareVersions('1..', '1.0') === null);


/*
DEBRIEF        

MISSED THE CASE WHERE THERE ARE CONSECUTIVE PERIODS ... could just add another guard clause, eg.
  ... if (strAsArray.every(el => el.match(/[0-9]/))) { ... }



LS: How would you explain to a non-technical person the rules for comparing two version numbers?
Me:

  - the version numbers must be string representations of integers
    - can optionally have numbers separated by . (dots)
      - dots mustn't be at the beginning or end of an input string
      - dots cannot be consecutive; they must only be used to separate numbers

  - in order to compare, we must have valid inputs
    - a valid input is one which starts and ends with a number character
    - an invalid input is any which doesn't pass the above test
      - also, any input that is of the incorrect data-type
*/