/**
 * CHALLENGE: Filter range
 * DESCRIPTION: Write a function filterRange(arr, a, b) that gets an array arr,
 * looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
 */

// --- 1. RESEARCH & EXPERIMENTS ---

//Essential Array Method:
//filter() to filter  many, we can use arr.filter(fn).

// let results = arr.filter(function (item, index, array) {
// if true item is pushed to results and the iteration continues
// returns empty array if nothing found
// });

let numbers = [10, 20, 30, 40];
let filtered = numbers.filter((n) => n > 25);
console.log("Original stays same:", numbers); // [10, 20, 30, 40]
console.log("New array created:", filtered); // [30, 40]

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
 * 1. Receive the array 'arr' and the range limits 'a' and 'b'.
 * 2. Use .filter() to look at every 'item'.
 * 3. Keep the item if it is >= a AND <= b.
 * 4. Return the new filtered array.
 */

/**
 * FUNCTION filterRangefilterRange
 *   RETURN   arr.FILTER(item => item >= a AND item <= b)
 * END FUNCTION
 *
 */

// --- 3. SOLUTION ---
function filterRangeInPlace(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}

// --- 4. TESTS ---
let arr = [5, 3, 8, 1];

let result = filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(result);
console.log(arr); // [3, 1]
