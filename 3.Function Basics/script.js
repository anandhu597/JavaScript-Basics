// ----------------Function Basics-----------------//

// Functions javaScript info

//___________Function Declaration
function showMessage() {
  //   alert("Hellow Everyone");
}
//instance
showMessage();

//_______________Local variables

function showMess() {
  let message = "Hell, I'm JavaScript!";
  //   alert(message);
}

showMess();

//alert( message ); // <-- Error! The variable is local to the function

//______________Outer variables

let userName = "John";
function greatUser() {
  let message = "Hello," + userName;
  alert(message);
}
// greatUser();

//The function has full access to the outer variable. It can modify it as well.

let userN = "John";
function showM() {
  userN = "Subash";
  let message = "Hello," + userN;
  alert(message);
}
// alert(userN);
// showM();
// alert(userN);

//______________If a same-named variable is declared inside the function then it shadows the outer one.

let shadowVar = "John";
function exampleShadowing() {
  let shadowVar = "Nibu";
  let message = "Hello," + shadowVar;

  alert(message);
}
// alert(shadowVar);
// exampleShadowing();
// alert(shadowVar);

//______________Parameters

function parametersExample() {
  function showMessage(from, text) {
    alert(from + ":" + text);
  }
  showMessage("Ann", "Hello!");
  showMessage("Ann", "what's up ?");
}
// parametersExample();

// Here’s one more example: we have a variable from and pass it to the function. Please note: the function changes from, but the change is not seen outside, because a function always gets a copy of the value:

function parametersExample2() {
  function showMessage(from, text) {
    alert(from + ":" + text);
  }

  let from = "Ann";
  showMessage(from, "Hello!");
  showMessage(from, "what's up ?");
  showMessage(from);
  //The value from is from is the same the function modified a local copy
  alert(from);
}
// parametersExample2();

//______________

//______________Default values

function defaulValueExp() {
  function showMessage(from, text = "no text given") {
    alert(from + ":" + text);
  }
  showMessage("Ann");
}

// defaulValueExp();

function defaulValueExpWithAnotherFuntion() {
  function sendGreeting(name, message = getDefaultMessag()) {
    alert(`${name} : ${message}`);
  }

  function getDefaultMessag() {
    console.log("getDefaultMessage() was called!");
    return "Hello! Hope you're having a great day!";
  }

  sendGreeting("Alice", "Good Morning!");
  sendGreeting("Bob");
}
// defaulValueExpWithAnotherFuntion();

//_______________Default parameters in old JavaScript code

function defaulValueExpOldJs() {
  function showMessage(from, text) {
    if (text === undefined) {
      text = "no text given";
    }
    alert(from + ": " + text);
  }

  //Or using the || operator;
  function showMessage(from, text) {
    text = text || "noo text given";
  }

  showMessage("Ann");
}
// defaulValueExpOldJs();

// ___________Alternative default parameters

function alternativeDefaultParameters() {
  function showMessage(text) {
    // ...

    // if (text === undefined) {
    //   // if the parameter is missing
    //   text = "empty message";
    // }

    //…Or we could use the || operator:

    text = text || "empty";

    alert(text);
  }

  showMessage(); // empty message

  // `
  // Modern JavaScript engines support the nullish coalescing operator ??, it’s better
  //  when most falsy values, such as 0, should be considered “normal”:`;

  function showCount(count) {
    alert(count ?? "unknown");
  }

  showCount(0);
  showCount(null);
  showCount();
}

// alternativeDefaultParameters();

//____________Returning a value

function sum(a, b) {
  return a + b;
}

let result = sum(2, 4);
// alert(result);

// There may be many occurrences of return in a single function. For instance:
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Do you have permission from your parents ?");
  }
}

// let age = prompt("How old are you?", 18);
// if (checkAge(age)) {
//   alert("Access Grantd");
// } else {
//   alert("Access denied");
// }

function showMovie(age) {
  if (!checkAge(age)) {
    return;
  }

  alert("Showing you the movie"); // (*)
  // ...
}
// showMovie(18);

function checkAge2(age) {
  // if (age > 18) {
  //   return true;
  // } else {
  //   return confirm("Did parents allow you?");
  // }
  //Using a question mark operator ?
  // age > 18 ? true : confirm("Did parents allow you?");
  // Using OR ||
  age = age > 18 || confirm("Did parents allow you?");
}
// checkAge2(13);

// Write a function min(a,b) which returns the least of two numbers a and b.

function min(a, b) {
  // if (a > b) {
  //   return b;
  // } else {
  //   return a;
  // }

  return a < b ? a : b;
}

// let num1 = prompt("Enter first number:");
// let num2 = prompt("Enter second number:");
// alert(min(num1, num2));

// Function pow(x,n)

`Function pow(x,n)
importance: 4
Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

Run the demo

P.S. In this task the function should support only natural values of n: integers up from 1.`;

function pow(x, n) {
  for (let i = 1; i < n; i++) {
    x = x * n;
  }
  return x;
}
// let x = prompt("Enter first X:");
// let n = prompt("Enter second n:");
// if (n < 1) {
//   alert(`Power ${n} is not supported, use a positive integer`);
// } else {
//   alert(pow(x, n));
// }

//___________________Function expressions___________________________

// The syntax that we used before is called a Function Declaration:

function sayHi() {
  alert("Hello");
}
`There is another syntax for creating a function that is called a Function Expression.
`;

// let sayHi = function () {
//   alert("Hello");
// };
function sayHi() {
  alert("Hello");
}

// alert(sayHi); // shows the function code
function sayHi() {
  // (1) create
  alert("Hello");
}

// let func = sayHi; // (2) copy

// func(); // Hello     // (3) run the copy (it works)!
// sayHi(); // Hello    //     this still works too (why wouldn't it)
// let sayHi = function () {
//   // (1) create
//   alert("Hello");
// };

let func = sayHi; //(2)
// ...

// ---------------------Callback functions---------------------

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

function showOk() {
  alert("You agreed");
}

function showCancel() {
  alert("You canceled the execution.");
}

// ask("Do you agree ?", showOk, showCancel);

function anonymoues() {
  function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }

  ask(
    "Do you agree?",
    function () {
      alert("You agreed.");
    },
    function () {
      alert("You canceled the execution.");
    }
  );
}

//------------Arrow functions, the basics________________

let fuc = (arg1, arg2, argN) => XPathExpression;

//---concrete example

let sum1 = (a, b) => a + b;
// alert(sum(2, 4));

let double = (n) => n * 2;

// alert(double(5));

let sayHi2 = () => alert("Hello");
// sayHi();

// let aga = prompt("What is your age?", 18);
// let welcome = aga < 18 ? () => alert("Hello") : () => alert("Greetings!");

// welcome();

let sum4 = (a, b) => {
  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

// alert(sum4(1, 2)); // 3

// ______________Rewrite with arrow functions_______________

`function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);`;

let ask2 = (question, yes, no) => (confirm(question) ? yes() : no());

// ask2(
//   "do you agree",
//   () => alert("You agreed."),
//   () => alert("You canceled the execution.")
// );

// ---------------Test Questions------------------
`Write a function called add7 that takes one number and returns that number + 7.
add7(10) should return 17`;

function add7(n) {
  return n + 7;
}

console.log(add7(4));

`Write a function called multiply that takes 2 numbers and returns their product.
multiply(3, 2) should return 6`;

function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 3));

`Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
capitalize("abcd") should return "Abcd"
capitalize("ABCD") should return "Abcd"
capitalize("aBcD") should return "Abcd"`;

function capitalize(str) {
  if (!str) return "";

  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// console.log(capitalize("joby"));

`Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"`;

function lastLetter(str) {
  return str[str.length - 1];
}

console.log(lastLetter("anandhu"));
