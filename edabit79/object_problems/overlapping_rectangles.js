/* question:
"Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles."
*/
/* questioning (interrogate the problem & interviewer; establish the rules)
---------------------------------------------------------------

terms:
  - 'area': length * width
  - 'overlap': the space inhabited by both rectangles
input: two 'rectangles' -> (represented by coordinate pairs of two opposite angles)
output: area of overlapping space

center case:
edge case:

RULES:
  - know how to calculate areas

  - how do we know if they overlap based on the data given?
    - if FIRST x1 <= SECOND x1
    - &  FIRST x2 <= SECOND x2
    - &  SECON y2 is in the range of FIRST y1 -> y2

    then we have an overlap

---------------------------------------------------------------
*/
/* outlining (validate assumptions)
---------------------------------------------------------------

rephrase: ...""...

roadmap:

exploration:

---------------------------------------------------------------
*/
/* steps (establishing MM & flow of data from input to output)
---------------------------------------------------------------

abstract algo :
  determine which rectangle is further
  gather data from input array

revisit 'RULES' & add more test cases (as needed)

---------------------------------------------------------------
*/
/* dry run for algo; (rubber duck phase)
---------------------------------------------------------------

step through algo with examples from center and and edge cases

implement with code

---------------------------------------------------------------
*/

console.log(overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }], // w: 3, h: 4, a: 12
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]  // w: 2, h: 5, a: 10
)) // 6
