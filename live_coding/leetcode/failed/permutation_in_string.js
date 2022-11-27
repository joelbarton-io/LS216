var checkInclusion = function (s1, s2) {
  let sorted1 = s1.split('').sort().join('');
  const chunks = [];
  let leng = s1.length;

  for (let i = 0; i < s2.length; i++) {
    const chr = s2[i];

    if (sorted1.includes(chr)) {
      let candidate = s2.slice(i, i + leng)
      if (candidate.length !== leng) continue;
      chunks.push(candidate);
    }
  }

  return chunks.some(candidate => {
    
  });
};

console.log(checkInclusion('adc', 'dcdaaa'))


/*
var checkInclusion = function(s1, s2) {
  let copyS1 = s1;

  for (let i = 0; i < s2.length; i++) {
    const currChr = s2[i];

    if (copyS1.includes(currChr)) {

      copyS1 = copyS1.replace(currChr, '');
    } else {
      copyS1 = s1;
    }

    if (copyS1.length === 0) return true;
  }

  return false;
};

*/