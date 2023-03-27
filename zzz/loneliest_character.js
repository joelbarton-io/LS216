function loneliest(str) {
  if (!str.match(/\s/g)) return str.split('');

  const arr = [];
  let trimmed = str.trim();

  for (let i in trimmed) {
    let c = trimmed[i];

    if (c === ' ') {
      (typeof arr[arr.length - 1] !== 'number') ? arr.push(1) : arr[arr.length - 1]++;
    } else {
      arr.push(c);
    }
  }


  const tallied = {};

  for (let i in arr) {
    if (typeof arr[i] === 'number') {
      continue;
    }

    let idx = Number(i);

    if (idx === 0) { // FIRST
      if (typeof arr[idx + 1] === 'number') {
        tallied[arr[i]] = arr[idx + 1];
      } else {
        tallied[arr[i]] = 1;
      }

    } else if (idx + 1 === arr.length) { // LAST
      if (typeof arr[idx - 1] === 'number') {
        tallied[arr[i]] = arr[idx - 1];
      } else {
        tallied[arr[i]] = 1;
      }
    } else { // MIDDLE
      let toAdd = 0;

      if (typeof arr[idx - 1] === 'number') {
        toAdd += arr[idx - 1];
      }
      if (typeof arr[idx + 1] === 'number') {
        toAdd += arr[idx + 1];
      }
      tallied[arr[i]] = toAdd;
    }
  }

  let sorted = Object.entries(tallied).sort(([,a], [,b]) => b - a);
  let max = sorted[0][1];

  return sorted.filter(el => el[1] === max).map(el => el[0]);
}

console.log(loneliest('a b   c'));

// ['a', 1, 'b', 3, 'c']

// 'a b   c'
//  ^


// Write a function which accepts a string and returns an array of character(s) that have the most spaces to their right and left.
// "a b  c"                        -->  ["b"]
