let newReleases = [
  {
    'id': 0,
    'title': 'Die Hard',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/DieHard.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 654356453,
    'boxart': 'http://cdn-0.nflximg.com/images/2891/BadBoys.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
  {
    'title': 'The Chamber',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/TheChamber.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [4.0],
    'bookmark': [],
  },
  {
    'id': 675465,
    'title': 'Fracture',
    'boxart': 'http://cdn-0.nflximg.com/images/2891/Fracture.jpg',
    'uri': 'http://api.netflix.com/catalog/titles/movies/70111470',
    'rating': [5.0],
    'bookmark': [{ id:432534, time:65876586 }],
  },
];

/*
rules:
- id and title must be present
- eventual result array must only contain object elements with two properties (id and title)

abstractions: filtering + transforming

algo:
- filter initial to only contain those elements with both id and title properties
- map new object with only two properties present;
*/

function processReleaseData(data) {
  const filteredData = data.filter((obj) => {
    return (obj.id === 0 && obj.title) || (obj.id && obj.title)
  });

  return filteredData.map((obj) => ({ id: obj.id, title: obj.title }));
}

console.log(processReleaseData(newReleases));

// should return:
[{ id: 70111470, title: 'Die Hard'}, { id: 675465, title: 'Fracture' }];
