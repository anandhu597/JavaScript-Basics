// ----------------Understanding Errors-----------------//

//-------------The anatomy of an error

`const a = "Hello";
const b = "World";

console.log(c);`;

// Uncaught ReferenceError: c is not defined

// ---------------- stack trace.

const a = 5;
const b = 10;

function add() {
  // return c;
}

function print() {
  add();
}

print();

// script.js:18 Uncaught ReferenceError: c is not defined
//     at add (script.js:18:3)
//     at print (script.js:22:3)
//     at script.js:25:1

//____________--Common types of errors________________

// ______Syntax error________
// function helloWorld() {
//   console.log "Hello World!"
// }

//___________Reference error
// `const a = "Hello";
// const b = "World";

// console.log(c);`
// Uncaught ReferenceError: c is not defined

//________-Type error________________
//
`an operand or argument passed to a function is incompatible with the type expected by that operator or function;
or when attempting to modify a value that cannot be changed;
or when attempting to use a value in an inappropriate way.
`;
const str1 = "Hello";

const str2 = "World";

// const message = str1.push(str2);
`script.js:56 Uncaught TypeError: str1.push is not a function`;
