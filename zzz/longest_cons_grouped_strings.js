function longestConsec(arr, k) {
  if (!arr.length || k > arr.length || k <= 0) return '';
  // arr length - k === last index from which to slice
  let i = 0;
  let chunks = [];

  // traverse arr and slice from curr idx to curr idx + k
  // join the resulting array elements by empty space and push the resulting string into an array
  while (i <= arr.length - k) {
    let chunk = arr.slice(i, i + k).join('');
    chunks.push(chunk)
    i++;
  }

  chunks.sort((a, b) => b.length - a.length);

  return chunks[0];

  // sort by length and return the first element in the sorted array
}

function longestConsec(arr, k) {
  if (!arr.length || k > arr.length || k <= 0) return '';

  let i = 0;
  let chunks = [];

  while (i <= arr.length - k) {
    let chunk = arr.slice(i, i + k).join('');
    chunks.push(chunk)
    i++;
  }

  chunks.sort((a, b) => b.length - a.length);
  return chunks[0]
}