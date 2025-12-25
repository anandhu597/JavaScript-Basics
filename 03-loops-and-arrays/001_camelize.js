/**
 * Translate border-left-width to borderLeftWidth
importance: 5
Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

That is: removes all dashes, each word after dash becomes uppercased.

Examples:

camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
P.S. Hint: use split to split the string into an array, transform it and join back.
 */

//--------------Essential Array Methods:

//split() - converts a string into an array by splitting on a delimiter (like "-")
//It splits the string into an array by the given delimiter delim.  str.split(delim)

let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(",");
console.log(names);
console.log(arr);

for (let name of arr) {
  console.log(name);
}

//test-1
arr = "background-color".split("-");
console.log(arr);

arr = "list-style-image".split("-");
console.log(arr);

//map() - transforms each element of an array

//The arr.map method is one of the most useful and often used.

//It calls the function for each element of the array and returns the array of results.

arr = ["Bilbo", "Gandalf", "Nazgul"];
let lengths = arr.map((item) => item.length);
console.log(lengths);

//Eg:

const prices = [100, 200, 300];
console.log(prices);
const pricesWithTax = prices.map((p) => p * 1.05);
console.log(pricesWithTax);

// File names → Extensions
const files = ["app.js", "index.html", "style.css"];
console.log(files);

const extensions = files.map((f) => f.split(".")[1]);
console.log(extensions);

//--------------String Methods:

//toUpperCase() or charAt() + toUpperCase() - for capitalizing letters

//toUpperCase()
const originalString = "Hello world!";
const upperCaseString = originalString.toUpperCase();
console.log(originalString);
console.log(upperCaseString);

// charAt()
let str = "Hello World";
const char = str.charAt(1);
console.log(char);

//charAt() + toUpperCase()

//Eg:

let word = "hello";
let result = word.charAt(0).toUpperCase();
console.log(result);

result = word.charAt(0).toUpperCase() + word.slice(1);
console.log(result);

names = ["anandhu", "rahul", "suresh"];

result = names.map((name) => name.charAt(0).toUpperCase() + name.slice(1));
console.log(result);

//slice() or substring() - for getting parts of a string

//slice()
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1, 3);
console.log(citrus);

fruits = ["Apple", "Banana", "Orange", "Mango"];
const tropical = fruits.slice(2);
console.log(tropical);

//substring()

str = "javaScript";
result = str.substring(0, 4);
console.log(result);
result = str.substring(4);
console.log(result);

//------------------Solution-------------------

/**
 * The general approach is:

Split the string by dashes
Transform each piece (except maybe the first)
Join them back together
 */

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

result = camelize("background-color");
console.log(result);

result = camelize("list-style-image");
console.log(result);
