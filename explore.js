let map = new Map([['a', 1], ['b', 2], ['c', 3]]);

function double(val, key, map) {
  map.set(key, val * 2);
}

map.forEach(double);

for (let [key, val] of map) { console.log('key:', key, 'val:', val) };
