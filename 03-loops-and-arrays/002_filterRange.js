/**
 * CHALLENGE: Filter range
 * DESCRIPTION: Write a function filterRange(arr, a, b) that gets an array arr,
 * looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
 */

// --- 1. RESEARCH & EXPERIMENTS ---
// Use this space to test small snippets of the methods you found in the docs.
// Example: console.log("Test: ", "apple-pie".split("-"));

//Essential Array Method:
//filter() to filter  many, we can use arr.filter(fn).

`let results = arr.filter(function (item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
});`;

// Examples

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

let sumUsers = users.filter((item) => item.id < 3);
console.log(sumUsers);

// --- 2. LOGIC PLAN (Pseudocode) ---
/**
 * 1. [First step in plain English]
 * 2. [Next step...]
 * 3. [Final transformation/return]
 */
//
`
FUNCTION filterRangefilterRange

  RETURN   arr.FILTER(item => item >= a AND item <= b)

END FUNCTION

`;

// --- 3. SOLUTION ---
function filterRangeInPlace(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// --- 4. TESTS ---
let arr = [5, 3, 8, 1];

let result = filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(result);
console.log(arr); // [3, 1]
