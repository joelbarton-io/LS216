
function pickPeaks(numbers) {
  const result = {
    pos:  [],
    peaks: [],

  };
  let mountain = [];
  let startMountIdx;

  if (numbers.length < 3) return result;

// startMountIdx : 3
// [1,2,2,2]
// [2,1,3,1,2,2,2,2]
//              ^-^
  for (let i = 1; i < numbers.length; i++) {
    let left = numbers[i - 1]; // 3
    let right = numbers[i];    // 1

    if (left <= right) {
      if (startMountIdx === undefined) startMountIdx = i - 1;
      mountain.push(left);

    } else if (left > right && mountain.length > 0) {
      mountain.push(left); // peak
      let peak = Math.max(...mountain); // 3
      let mountainPeakIndex = mountain.indexOf(peak); // 1
      let peakPosition = startMountIdx + mountainPeakIndex; // 2
      result.peaks.push(peak);
      result.pos.push(peakPosition);
      mountain = [];
      startMountIdx = undefined;
    }
  }

  return result;
}