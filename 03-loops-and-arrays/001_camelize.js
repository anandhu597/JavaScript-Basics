/* * CHALLENGE: Camelize
 * DESCRIPTION:
 * Translate border-left-width to borderLeftWidth
 * Write the function camelize(str) that changes dash-separated words
 * into camel-cased words.
 * Examples:
 * camelize("background-color") → "backgroundColor"
 * camelize("list-style-image") → "listStyleImage"
 * camelize("-webkit-transition") → "WebkitTransition"
 */

// --- 1. RESEARCH & EXPERIMENTS ---

// split()
let names = "Bilbo, Gandalf, Nazgul";
let arr = names.split(",");
console.log(names);
console.log(arr);

for (let name of arr) {
  console.log(name);
}

// test split
arr = "background-color".split("-");
console.log(arr);

arr = "list-style-image".split("-");
console.log(arr);

// map()
arr = ["Bilbo", "Gandalf", "Nazgul"];
let lengths = arr.map((item) => item.length);
console.log(lengths);

const prices = [100, 200, 300];
console.log(prices);
const pricesWithTax = prices.map((p) => p * 1.05);
console.log(pricesWithTax);

const files = ["app.js", "index.html", "style.css"];
console.log(files);
const extensions = files.map((f) => f.split(".")[1]);
console.log(extensions);

// String methods
const originalString = "Hello world!";
const upperCaseString = originalString.toUpperCase();
console.log(originalString);
console.log(upperCaseString);

let str = "Hello World";
const char = str.charAt(1);
console.log(char);

let word = "hello";
let result = word.charAt(0).toUpperCase();
console.log(result);

result = word.charAt(0).toUpperCase() + word.slice(1);
console.log(result);

names = ["anandhu", "rahul", "suresh"];
result = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
console.log(result);

// slice / substring
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

fruits = ["Apple", "Banana", "Orange", "Mango"];
const tropical = fruits.slice(2);
console.log(tropical);

str = "javaScript";
result = str.substring(0, 4);
console.log(result);
result = str.substring(4);
console.log(result);

// --- 2. LOGIC PLAN (Pseudocode) ---
// 1. Split the string by "-"
// 2. Capitalize words after the first
// 3. Join all parts into one string

// --- 3. SOLUTION ---
function camelize(arr) {
  let splitStr = arr.split("-");
  console.log(splitStr);

  let camelizedArr = splitStr.map((item, index) => {
    if (index == 0) {
      console.log(index);
      return item;
    } else {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  });

  console.log(camelizedArr);
  let camelized = camelizedArr.join("");
  return camelized;
}

// --- 4. TESTS ---
result = camelize("background-color");
console.log(result);

result = camelize("list-style-image");
console.log(result);
