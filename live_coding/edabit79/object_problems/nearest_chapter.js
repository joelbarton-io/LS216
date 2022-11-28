/* Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.*/

/* understanding the problem part 1
---------------------------------------------------------------

terms: "equidistant" -> values the same for two chapters to the target page #

requirements:
  - chapter start is the value we are comparing our target against
  - All page numbers in the dictionary will be valid integers.
  - Return the higher page number if ever two pages are equidistant (see last test case).
input: object containing chapter key-value pairs & a target page number
output: the key of the chapter whose page range is closest to the target page number

test cases:

---------------------------------------------------------------
*/
/* understanding the problem part 2
---------------------------------------------------------------

roadmap for P.O.D.:
  OBJECT
  - transform OBJ -> ARRAY[1] of entries
  STRING

in my own words...
  ..."locate and return the name of the chapter whose 'title page' (the page where that chapter starts) is closest to the target page"...

---------------------------------------------------------------
*/
/* steps
---------------------------------------------------------------

mental model:
  need to calculate the ABSOLUTE difference between chapter 'chapter title page number' value and the target page number

abstract algo & method exploration:

DECLARE a variable to store the min diff and a variable to store the index
TRANSFORM input object into an array of subarrays
TRAVERSE array of entries (with index)
  CALCULATE diff
  CHECK if min diff > curr diff
    if yes, replace min diff with curr diff
    and store index of curr diff

  CHECK if min diff === curr diff
    IF equal, then replace min diff value with curr diff

return the value of the chapter title at the appropriate index
(revisit 'requirements' & as add more test cases as needed)
---------------------------------------------------------------
*/
/* testing
---------------------------------------------------------------

step through with 3 examples

implement with code
---------------------------------------------------------------
*/

function nearestChapter(chapters, targetPage) {

  let minDiff = Infinity;
  let chptIndex;
  let chptEntries = Object.entries(chapters);

  chptEntries.forEach((chpt, currIndex) => {

    let currPageNum = chpt[1];
    let diff = Math.abs(targetPage - currPageNum);

    if (diff < minDiff) {
      minDiff = diff;
      chptIndex = currIndex;
    } else if (diff === minDiff && currIndex > chptIndex) {
      minDiff = diff;
      chptIndex = currIndex;
    }
  });

  return chptEntries[chptIndex][0];
}

console.log(nearestChapter({
  "Chapter 1" : 1, // 1 - 14
  "Chapter 2" : 15, // 15 - 36
  "Chapter 3" : 37 // 37 -> Infinity
}, 10)) // ➞ "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,  // 1 - 61
  "Strange Developments" : 62, // 62 - 193
  "The End?" : 194, // 194 - 459
  "The True Ending" : 460 // 460 - Infinity
}, 200)) // ➞ "The End?"

/* [new beg, 1] [stra devicePixelRatio, 62] [the end, 194] [the true, 460] */

console.log(nearestChapter({
  "Chapter 1a" : 1, // 1 - 4
  "Chapter 1b" : 5 // 5 - Infinity
}, 3)) // ➞ "Chapter 1b"

// ~> 27:30