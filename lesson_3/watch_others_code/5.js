/* understanding the problem part 1
---------------------------------------------------------------

terms:
  - 'rail': a row in our cipher

requirements:
  - the spaces in the input string are NOT present in result object
  - Preserve case

input: a string message & a rail count

output: an array of rails (strings)

---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

roadmap for P.O.D.:
  -> STRING
    ...
  <- ARRAY of rails (strings)
in my own words...
  ..."transform a string input into an array of strings"...


---------------------------------------------------------------
*/
/* steps
---------------------------------------------------------------

mental model:
  - need to keep track of current index and the current "depth" value (which rail are we at?)
  -
abstract algo & method exploration:

PROCESS string input
DECLARE result array with rails # of empty strings present
DECLARE depth value;

FOREACH el in the cleaned string input... (with index)
  IF index === 0; set descending to true;
  IF index === rail count - 1; set descending to false;

  perform some concatenation operation on each element in the rails array
    IF currIdx === depthValue; concatonate current letter to curr element
    ELSE; concatenate '.' to curr element

  IF depth value is === to maxDepth (rail count)
    DECREMENT depthValue
  IF depth is === min (0)
    INCREMENT depthValue


return result object

(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* testing
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

/*
Commentary:

DECLARE `msg` & initialize to a new string with spaces removed from input string `message`;
DECLARE `rails` & initialize to an array of length === 'railCount' (the second argument) filled with empty strings `''`;
DECLARE `depth` & initialize to `0`;

DECLARE `maxDepth` & initialize to `railCount - 1`;
DECLARE `descending` & initialize to `true`; we are using this variable's value as a sort of toggle to "switch directions" as we ITERATE through the letters of our `message` string

ITERATE over the length of the string `msg` with a `for` loop;

declare `currLetter` & initialize to the string at index `i` in `msg`;
IF we have reached the max depth or zero, alter the value of `descending` in accordance the current value of `depth`;

reassign `rails` to the return value of invoking `appendLetter`;
  IF the index of the current element in `rails` is equal to the current `depth`
    reassign the value of the current `rail` to itself concatenated with the value of `currLetter`;
  otherwise, simply reassign the value of the current `rail` to itself concatenated with `'.'`;

increment or decrement depth, based on the provided condition;
*/
function cipher(message, railCount = 3) {
  const msg = message.replaceAll(' ', '');
  let rails = new Array(railCount).fill('');
  let depth = 0;

  let maxDepth = railCount - 1;
  let descending = true;

  for (let i = 0; i < msg.length; i++) {
    let currLetter = msg[i];

    if (depth === 0) {
      descending = true;
    } else if (depth === maxDepth) {
      descending = false;
    }

    rails = appendLetter(currLetter, rails, depth);
    depth = (descending && depth !== maxDepth) ? (depth + 1) : (depth - 1);
  }

  return rails;
}

function appendLetter(chr, rails, depth) {
  return rails.map((rail, idx) => (idx === depth) ? (rail += chr) : (rail += '.'))
}

console.log(cipher('WE ARE DISCOVERED FLEE AT ONCE', 3));
/*
0| ['W . . . E . . . C . . . R . . . L . . . T . . . E',
1|  '. E . R . D . S . O . E . E . F . E . A . O . C .',
2|  '. . A . . . I . . . V . . . D . . . E . . . N . .']
 */