// ----------------Loops and Arrays-----------------//

//Looping through a collection

//The for...of loop : The basic tool for looping through a collection is the for...of loop:

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Linon"];
for (const cat of cats) {
  console.log(cat);
}

//map() and filter()

//You can use map() to do something to each item in a collection and create a new collection containing the changed items:

function toUpper(string) {
  return string.toUpperCase();
}

const upperCaseCats = cats.map(toUpper);
console.log(upperCaseCats);

//You can use filter() to test each item in a collection, and create a new collection containing only items that match:

function lCAt(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCAt);
console.log(filtered);

//Using function expressions we could rewrite the example above to be much more compact:

const filtered2 = cats.filter((cat) => cat.startsWith("L"));
console.log(filtered2);

//The standard for loop
// for (initializer; condition; final - expression) {
//   // code to run
// }

//Looping through collections with a for loop

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

//Exiting loops with break

//Skipping iterations with continue

//while and do...while

const catsName = ["Pete", "Biggles", "Jasmine"];
let myFavoiteCats = "My cats are called";
let i = 0;
while (i < catsName.length) {
  if (i === catsName.length - 1) {
    myFavoiteCats += `and ${catsName[i]}.`;
  } else {
    myFavoiteCats += ` ${catsName[i]},`;
  }
  i++;
}
// console.log(myFavoiteCats);

`The do...while loop is very similar, but provides a variation on the while structure:
initializer
do {
  // code to run

  final-expression
} while (condition)

`;

//Let's rewrite our cat listing example again to use a do...while loop:
function doWhileExp() {
  const cats = ["Pete", "Biggles", "Jasmine"];

  let myFavoriteCats = "My cats are called ";
  let i = 0;
  do {
    if (i === catsName.length - 1) {
      myFavoriteCats += `and ${catsName[i]}.`;
    } else {
      myFavoriteCats += ` ${catsName[i]},`;
    }
    i++;
  } while (i < catsName.length);

  console.log(myFavoriteCats);
}

// doWhileExp();

//------------------------------Loops: while and for----------------

//The “while” loop

function theWhileLoop() {
  let i = 0;
  while (i < 3) {
    // alert(i);
    i++;
  }

  i = 3;
  while (i) {
    // when i becomes 0, the condition becomes falsy, and the loop stops
    alert(i);
    i--;
  }
}

// theWhileLoop();

//The “for” loop

function theForLoop() {
  for (let i = 0; i < 3; i++) {
    // shows 0, then 1, then 2
    alert(i);
  }
}

// theForLoop();

//Skkipping parts

function skkipping() {
  let = 0;
  // for (; i < 3; i++) {
  //   alert(i);
  // }

  for (; i < 3; ) {
    alert(i++);
  }

  for (;;) {
    // repeats without limits :
  }
}

// skkipping();

//Breaking the loop

function breakingTheLoop() {
  let sum = 0;
  while (true) {
    let value = +prompt("Enter a number", "");
    if (!value) break;
    sum += value;
  }
  alert("Sum:" + sum);
}
// breakingTheLoop();

function continueNexIteration() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
    console.log(i);
  }
}

// continueNexIteration();

//----------------Arrays

//There are two syntaxes for creating an empty array:

`
let arr = new Array();
console.log(arr);
let arr2 = [];
console.log(arr2);`;

let fruits = ["Apple", "Orange", "Plum"];

console.log(fruits[0]); // Apple
console.log(fruits[1]); // Orange
console.log(fruits[2]); // Plum
//We can replace an element:

fruits[2] = "Pear";
//…Or add a new one to the array:

fruits[3] = "Lemon";

//An array can store elements of any type.

let mixeArr = [
  "Apple",
  { name: "John" },
  true,
  function () {
    alert("hello");
  },
];
// get the object at index 1 and then show its name

console.log(mixeArr[1].name);
// get the function at index 3 and run it
// mixeArr[3]();

//-----------------Get last elements with “at”

`
Some programming languages allow the use of negative indexes for the same purpose, like fruits[-1].

However, in JavaScript it won’t work. `;

console.log(fruits[fruits.length - 1]); //  A bit cumbersome,

`Luckily, there’s a shorter syntax: fruits.at(-1):
`;

console.log(fruits.at(-1));

//---------------------Methods pop/push, shift/unshift

`Arrays in JavaScript can work both as a queue and as a stack.
 They allow you to add/remove elements, both to/from the beginning or the end.`;

fruits = ["Apple", "Orange", "Pear"];
//Extracts the last element of the array and returns it: po

console.log(fruits);
console.log(fruits.pop());
console.log(fruits);

//Append the element to the end of the array:push

console.log(fruits.push("Pear"));
console.log(fruits);

//Methods that work with the beginning of the array:

//Extracts the first element of the array and returns it: shift

console.log(fruits);
console.log(fruits.shift());
console.log(fruits);

// Add the element to the beginning of the array: unshift

console.log(fruits.unshift("Apple"));
console.log(fruits);

//Methods push and unshift can add multiple elements at once:

fruits = ["Apple"];
console.log(fruits);

fruits.push("Orange", "Peach");

fruits.unshift("Pineapple", "Jackfruit");
console.log(fruits);

console.log(typeof fruits);

//-----------Internals

fruits = ["Banana"];

let arr = fruits; //Copy by reference (two variable  reference the same memory location )
console.log(arr === fruits);

arr.push("Pear");
console.log(fruits); // Banana, Pear - 2 items now

//------Loops
//One of the oldest ways to cycle array items is the for loop over indexes:

arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

//But for arrays there is another form of loop, for..of:
fruits = ["Apple", "Orange", "Plum"];

for (let fruit of fruits) {
  console.log(fruit);
}

//The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.

//--------A word about “length”

fruits = [];
fruits[123] = "Apple";
console.log(fruits.length);

`If we increase it manually, nothing interesting happens. But if we decrease it, the array is truncated. The process is irreversible, here’s the example:`;

arr = [1, 2, 3, 4, 5];
console.log(arr[4]);

arr.length = 2; // truncate to 2 elements
console.log(arr);

arr.length = 5;
console.log(arr[4]); // undefined: the values do not return

//------new Array()

`Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.`;

let jazBes = ["Jazz", "Blues"];
jazBes.push("Rock-and-Roll");
console.log((jazBes.length - 1) / 2);
console.log(Math.floor((jazBes.length - 1) / 2));
jazBes[Math.floor((jazBes.length - 1) / 2)] = "Classic";
console.log(jazBes);
jazBes.shift();
console.log(jazBes);
jazBes.unshift("Rap", "Rggae");
console.log(jazBes);

let samplarr2 = ["a", "b"];
samplarr2.push(function () {
  console.log(this);
});

samplarr2[2]();

//------------Sum input numbers

function sumInputNumber() {
  let arr = [];

  // do {
  //   let value = prompt("Enter a number", "");
  //   if (value === string) break;
  //   arr.push(value);
  // } while (value === string);

  while (true) {
    let value = prompt("Enter a number", "");
    if (value === "" || value === null || !isFinite(value)) break;
    arr.push(value);
  }
  console.log(arr);

  let sum = 0;
  for (let n of arr) {
    sum += n;
  }

  console.log(sum);
}

// sumInputNumber();

//------------A maximal subarray

function getMaxSubSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));

//------------------------ Array methods------------------------//

//splice

arr = ["I", "go", "home"];
console.log(arr);

delete arr[i];

console.log(arr.length);

arr = ["I", "study", "JavaScript"];
console.log(arr);

arr.splice(1, 1);
console.log(arr.length);

arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr);
console.log(arr.length);

//In the next example, we remove 3 elements and replace them with the other two:
arr.splice(0, 3, "Let's", "dance");
console.log(arr);
console.log(arr.length);

//Here we can see that splice returns the array of removed elements:
arr = ["I", "study", "JavaScript", "right", "now"];
//remove first two element
let removed = arr.splice(0, 2);
console.log(removed);

`The splice method is also able to insert the elements without any removals. 
For that, we need to set deleteCount to 0:`;

arr = ["I", "study", "JavaScript"];

//start index 2
//delete 0
//then inset "complex", "language"
arr.splice(2, 0, "complex", "language");
console.log(arr);
console.log(arr.length);

// `
// Negative indexes allowed
// Here and in other array methods, negative indexes are allowed.
// They specify the position from the end of the array, like here``-1 refers to the last element.
// "-2" refers to the second-to-last element.
// And so on. `;

arr = [1, 2, 5];
console.log(arr);
console.log(arr.length);

//start from -1 (one step from the end)
//delete 0 element
//then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log(arr);
console.log(arr.length);

//-----------slice---------------

arr = ["t", "e", "s", "t"];

console.log(arr.slice(1, 3));

console.log(arr.slice(-2));

//--------------concat----------------

let newArr;
arr = [1, 2];

newArr = arr.concat([1, 2], [3, 4]);
console.log(newArr);

newArr = arr.concat([3, 4], [5, 6]);
console.log(newArr);

arr = [1, 2];

let arrLike = {
  0: "something",
  length: 1,
};

newArr = arr.concat(arrLike);
console.log(newArr);

arr = [1, 2];

arrLike = {
  0: "something",
  [Symbol.isConcatSpreadable]: true,
  length: 2,
};

newArr = arr.concat(arrLike);
console.log(newArr);

//----------------Iterate: forEach--------------------

arr = ["Bilbo", "Gandalf", "Nazgul"];
arr.forEach((item, index, array) => {
  console.log(`${item} is at ${index} in  ${array}`);
});

//-----------------Searching in array---------------------

//indexOf/lastIndexOf and includes

arr = [1, 0, false];
result = arr.indexOf(1);
console.log(result);

result = arr.indexOf(0);
console.log(result);
result = arr.indexOf(false);
console.log(result);

result = arr.includes(1);
console.log(result);

fruits = ["Apple", "Orange", "Apple"];

console.log(fruits.indexOf("Apple"));
console.log(fruits.lastIndexOf("Apple"));

arr = [NaN];
console.log(arr.indexOf(NaN));
console.log(arr.includes(NaN));

users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
  { id: 3, name: "Mary" },
  { id: 4, name: "John" },
];
result = users.find((user) => user.id == 3);
console.log(result.name);

result = users.findIndex((user) => user.name == "John");
console.log(result);
result = users.findLastIndex((user) => user.name == "John");
console.log(result);

//filter

result = users.filter((item) => item.id < 3);
console.log(result.length);

//map

arr = ["Bilbo", "Gandalf", "Nazgul"];
result = arr.map(function (item, indx, array) {
  return item.length;
});

/**
 * 
 * 
 * In **JavaScript**, a **property** is a **value stored inside an object**.

Simple idea 👇

* **Property** → data
* **Method** → function

Example:

```js
let name = "Bilbo";

name.length   // property → 5
name.toUpperCase() // method
```

Another example:

```js
let user = {
  age: 25,      // property
  greet() {}    // method
};
```

👉 Property = **no `()`**
👉 Method = **has `()`**

 */

//sort(fn)

arr = [1, 2, 15];

arr.sort();
console.log(arr); // 1, 15, 2   The order became 1, 15, 2. Incorrect. But why?

`To use our own sorting order, we need to supply a function as the argument of arr.sort().`;

function compare(a, b) {
  if (a > b) return 1; // if the first value is greater than the second
  if (a == b) return 0; // if values are equal
  if (a < b) return -1; // if the first value is less than the second
}

result = arr.sort(compare);
console.log(arr);
console.log(result);
