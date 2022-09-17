let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

/*
- modify country property to: Canada

- replace dots in band names with empty string (replaceAll())
- capitalize all words in band names (toUpperCase)
  - convert band.name prop -> array of strings
  - capitalize letter at index 0 for each element (map)
  - join into string band name again
*/
function processBands(data) {
  return data.map((band) => {
    return {
      name: processName(band.name),
      country: "Canada",
      active: band.active,
    }
  });
}

function processName(name) {
  return name.split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(' ').replace(/\./g, '');
}
console.log(processBands(bands));

// should return:
// [
//   { name: 'Sunset Rubdown', country: 'Canada', active: false },
//   { name: 'Women', country: 'Canada', active: false },
//   { name: 'A Silver Mt Zion', country: 'Canada', active: true },
// ]