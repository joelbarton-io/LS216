/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.
*/
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------


input: array of 'teams' objects
output: string team name with most points || if tied, team name with largest goal difference


team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68

RULES:
  - POINT TOTAL:
    - 3 points for a 'win'
    - 0 points for a 'loss'
    - 1 point for a 'draw'
  - GOAL DIFF:
    - scored - conceded === diff

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ..."calculate the 'best' team from the supplied information, "...

roadmap: array of team objects ... [] ... string team name

exploration:

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

mental model:
  - traverse the input array of team objects
  - generate two pieces of info:
    - 1. point Total
    - 2. goal difference
    - 3. keep team name as well
  - store this information in an array of new objects (map)

  - traverse this array of new objects
    - return the team name with the highest score or highest (tied) score & largest goal difference



algo :

TRAVERSE array of teams using map (store the resulting array in a new variable
  CALCULATE the two values
    POINT TOTAL:
      - 3 points for a 'win'
      - 0 points for a 'loss'
      - 1 point for a 'draw'
    GOAL DIFF:
      - scored minus conceded
    return a new object back from the call back

DECLARE a var to compare against point total (init: -Infinity)
CREATE a result array
TRAVERSE the array produced by the map operation
  compare the various point totals of the teams
    IF current team score >= maxPoint total
      update max point total score
      push the current object into the result array
    else continue

check length of result array,
  if length is 1: return the first element.teamname and exit
  else
    return team name with max goal difference

    converting array of objects -> array of arrays (entries)
    sorting this array of arrays by their diff
    returning the team name with max diff

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/


function champions(teams) {
  let teamScores = teams.map(team => {
    return {
      name: team.name,
      points: (team.wins * 3) + (team.draws),
      diff: (team.scored - team.conceded),
    };
  });

  const maxPoints = Math.max(...teamScores.map(team => team.points));
  let winners = teamScores.filter(team => team.points === maxPoints);

  if (winners.length === 1) {
    return winners[0].name;
  }

  const winnersAsArrays = winners.map(team => Object.entries(team))
  return Object.fromEntries(winnersAsArrays.sort(([, , a], [ , , b]) => b[1] - a[1])[0]).name;
}


/* console.log(champions([
  {
    name: "Manchester City",
    wins: 30,
    loss: 6,
    draws: 2,
    scored: 102,
    conceded: 20,
  },
  {
    name: "Liverpool",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 118,
    conceded: 29,
  },
  {
    name: "Arsenal",
    wins: 30,
    loss: 0,
    draws: 8,
    scored: 87,
    conceded: 39,
  },
])) //"Arsenal" */

console.log(champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Manchester 2",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 188,
    conceded: 20,
  },
  ])) // > "Manchester United"


/* let teams =  [
  {
    name: "Manchester United",
    score: 30,
    diff: 2
  },
  {
    name: "Chelsea",
    score: 30,
    diff: 10
  }
]

console.log(teams.map(team => Object.entries(team)).sort(([, , a], [ , , b]) => b[1] - a[1]));
 */

/* Test.assertEquals(
  champions([
    {
      name: "Manchester United",
      wins: 30,
      loss: 3,
      draws: 5,
      scored: 88,
      conceded: 20,
    },
    {
      name: "Arsenal",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
    {
      name: "Chelsea",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
  ]),"Manchester United"
); */
/* Test.assertEquals(
  champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Leicester City",
      wins: 22,
      loss: 8,
      draws: 8,
      scored: 98,
      conceded: 29,
    },
  ]),"Liverpool"
);
 */
/* Test.assertEquals(
  champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 8,
      draws: 0,
      scored: 67,
      conceded: 20,
    },
    {
      name: "NewCastle United",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 118,
      conceded: 36,
    },
    {
      name: "Leicester City",
      wins: 34,
      loss: 2,
      draws: 2,
      scored: 108,
      conceded: 21,
    },
  ]),"Leicester City"
); */
/* Test.assertEquals(
  champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 6,
      draws: 2,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 28,
      loss: 2,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]),"Manchester City"
); */
Test.assertEquals(
  champions([
    {
      name: "Manchester City",
      wins: 30,
      loss: 6,
      draws: 2,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 30,
      loss: 0,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]),"Arsenal"
);
/* Test.assertEquals(
  champions([
    {
      name: "Chelsea",
      wins: 35,
      loss: 3,
      draws: 0,
      scored: 102,
      conceded: 20,
    },
    {
      name: "Liverpool",
      wins: 24,
      loss: 6,
      draws: 8,
      scored: 118,
      conceded: 29,
    },
    {
      name: "Arsenal",
      wins: 28,
      loss: 2,
      draws: 8,
      scored: 87,
      conceded: 39,
    },
  ]),"Chelsea"
); */