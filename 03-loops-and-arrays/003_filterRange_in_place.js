/**
 * CHALLENGE: Filter range "in place"
 * DESCRIPTION: Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b.
 * The test is: a ≤ arr[i] ≤ b.
 * The function should only modify the array. It should not return anything.
 */

// --- 1. RESEARCH & EXPERIMENTS ---

//Array mutation methods

//splice() - removes or replaces elements in an array

//How to delete an element from the array? The arrays are objects, so we can try to use delete

let arr = ["I", "go", "home"];

delete arr[1];
console.log(arr); //(3) ['I', empty, 'home']
console.log(arr.length); // 3

/**
 * delete obj.key removes a value by the key.
 * It’s all it does. Fine for objects.
 * But for arrays we usually want the rest of the elements to shift and occupy the freed place.
 *
 *  arr.splice method is a Swiss army knife for arrays.
 *  It can do everything: insert, remove and replace elements.
 *
 * arr.splice(start[, deleteCount, elem1, ..., elemN])
 *
 *
 */
arr = ["I", "study", "JavaScript"];

arr.splice(1, 1); // from index 1 remove 1 element

console.log(arr); // ["I", "JavaScript"]
arr = ["I", "study", "JavaScript"];

//Here we can see that splice returns the array of removed elements:
let removed = arr.splice(1, 2);
console.log(removed);
console.log(arr);

//The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0:
arr = ["I", "study", "JavaScript"];
arr.splice(2, 0, "complex", "language");
console.log(arr);

//shift() / pop() - remove elements from the beginning/end

/**
 * arr.push(...items) – adds items to the end,
 * arr.pop() – extracts an item from the end,
 * arr.shift() – extracts an item from the beginning,
 * arr.shift() – extracts an item from the beginning,
 * arr.unshift(...items) – adds items to the beginning.
 */

// --- 2. LOGIC PLAN (Pseudocode) ---
/**
 * 1. Receive the array and the range limits a and b.
 * 2. loop through the array with index i
 * 3. remove the item which wont pass the test a ≤ arr[i] ≤ b.
 *    - Remove element at index i using splice
 *    - Decrement i to recheck current position
 * 4. Array is now modified in place with only values in range [a, b]
 */

/** 
FUNCTION filterRangeInPlace(arr, a, b)
  LOOP through array from start to end
    IF current element is outside range [a, b] THEN
      Remove current element
      Adjust index to account for removal
    END IF
  END LOOP
END FUNCTION
 */

// --- 3. SOLUTION ---
function filterRangeInPlace(arr, a, b) {
  // Your actual code goes here
  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}

// --- 4. TESTS ---
// Use the examples provided in the lesson to see if your code works.
// console.log("Test 1:", taskName(testInput));

arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]
