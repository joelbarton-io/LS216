/*
## REQUIREMENTS:
  - in LOCAL NAME:
    - '.' can be ignored when building strings
    - all chrs in LOCAL NAME following'+' can be removed

## EXAMPLES/EDGE CASES:
  - '+joel@gmail.com' INVALID TEST CASE

## INPUT: array of string elements
  - each element can contain lowercase english letters, '.', '+', '@'
  - each email has exactly 1 `@`
  - local/domain names are never empty strings
## INTERMEDIATE:
## OUTPUT: Number of unique addresses which receive mail (1, 100)

## SUMMARY:
  breaking strings into sections and applying some rules to the first half of the split string element
  for first half:
    remove all periods and chop off any chrs which come after `+`

## STEPS:
  DECLARE `uniAdr` = {}; set
  TRAVERSE input array of addresses (for)

    chop tail from `@` to end (slice) save for later in `domain`
    slice from 0 upto not including `@` save in `local`

    DECLARE `newLocal`
    TRAVERSE `local`'s chrs
      if `.` skip that chr
      if `+` stop traversal
      otherwise, concat currChr in `local` to `newLocal`

    concat `newLocal` and `domain`
      - add this address to `uniAdr`


  return `uniAdr` size

*/
// emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]

/*

*/
var numUniqueEmails = function(emails) {
  const uniAdr = new Set();

  emails.forEach(address => {
    let indexOfAtSign = address.indexOf('@'); // 15
    let domain = address.slice(indexOfAtSign); // @leetcode.com
    let local = address.slice(0, indexOfAtSign); // test.email+alex
    let newLocal = '';

    for (let i = 0; i < local.length; i++) {
      let chr = local[i];

      if (chr === '.') continue;
      if (chr === '+') break;

      newLocal += chr;
    }

    uniAdr.add(newLocal + domain);
  });

  return uniAdr.size;
};































