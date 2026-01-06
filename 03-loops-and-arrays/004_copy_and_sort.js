/**
 * CHALLENGE: copy and sort aray
 * DESCRIPTION: We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

 */

// --- 1. RESEARCH & EXPERIMENTS ---

//Array copying methods

//slice() - creates a shallow copy of an array arr.slice([start], [end])

let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const copy = fruits.slice();
console.log(copy);

//shallowCopy nested object

const original = [{ id: 1 }, { id: 2 }];
let shallowCopy = original.slice();

console.log(original);
shallowCopy[0].id = 23;
console.log(shallowCopy);

//Spread operator [...arr] - another way to copy

const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray);

//Array.from() - converts/copies to a new array

const str = "123455";
let res = Array.from(str);
console.log(res);

res = Array.from(str, Number);
console.log(res);

//Array sorting - How to sort arrays:

fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
fruits.sort();
console.log(fruits);

//Understanding how sort() works with strings vs numbers

//sort(fn)

let num = [1, 2, 15];

num.sort(); // ['Apple', 'Banana', 'Lemon', 'Mango', 'Orange']
console.log(num); // 1, 15, 2   The order became 1, 15, 2. Incorrect. But why?

//`To use our own sorting order, we need to supply a function as the argument of arr.sort().`;

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

result = num.sort(compare);
console.log(num);
console.log(result);

//Example

num = [1, -2, 15, 2, 0, 8];
console.log(num);

num.sort((a, b) => {
  const result = a - b;

  console.log(a + "<>" + b + "=>" + result);
  return result;
});
console.log(num);

// --- 2. LOGIC PLAN (Pseudocode) ---
/**
 * 1. Make the copy of the array using spread
 * 2. Sort the copied array using sort()
 * 3. return the new array
 */

/**
 * FUNCTION copySorted(arr)
 *  SET copy or arr
 *  SET sortedArr = arr.sort
 *  RETURN sortedArr
 * END FUNCTION
 *
 *
 */

// --- 3. SOLUTION ---
function copySorted(arr) {
  let copy = [...arr];
  return copy.sort();
}

// --- 4. TESTS ---
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)
