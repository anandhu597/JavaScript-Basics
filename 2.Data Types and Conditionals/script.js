// ----------------Data Types and Conditionals------------------//

// Declaring strings
const string = " The revolution  will not be televised";
console.log(string);

// If you don't do this, or miss one of the quotes, you'll get an error. Try entering the following lines:
// const badString1 = This is a test;
// const badString2 = 'This is a test;
// const badString3 = This is a test';

const badString = string;
console.log(badString);

// Single quotes, double quotes, and backticks

const single = "Single quotes";
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

// Including quotes in strings

const goodQuotes1 = 'She said "I think so!"';
const goodQuotes2 = `She said "I'm not going in there!"`;
const bigmouth = "I've got no right to take my place…";
console.log(bigmouth);

// Numbers vs. strings
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"

// The Number() function converts anything passed to it into a number if it can. Try the following:

const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum + ":" + myNum);

// Conversely, the String() function converts its argument to a string. Try this:

const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2 + ":" + myString2);
