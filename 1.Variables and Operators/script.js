// ----------------Variables------------------//
let firstName = "Jone";
let secondName = "Jo";
console.log(firstName);
console.log(secondName);

//You can also re-assign variables:

let age = 25;
console.log(age);
age = 43;
console.log(age);

// Use of const
const pi = 3.14;
// pi = 10;// What will be output? this will cues error

console.log(pi);

// Numbers

console.log(3 + 2 - 76 * (1 + 1));

// ---------Assignment---------------

// 1.Add 2 numbers together! In your script, type in console.log(23 + 97). Running this should log 120.
console.log(23 + 97);

//2.Do the same thing but add 6 different numbers together.
console.log(56 + 45);
console.log(23 + 45);
console.log(34 + 67);
console.log(78 + 90);
console.log(23 + 12);
console.log(45 + 90);

// 3.Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
console.log((4 + 6 + 9) / 77);

// 4.Let’s use some variables!

//4.1 Add this statement to the script tag: let a = 10.
let a = 10;

//4.2.Below it, add console.log(a). When you run this, the browser console should log 10.
console.log(a);

//4.3.Afterwards, re-assign a with a different number value. Log a again afterwards and it should show the updated value (the previous log should still show the old value of 10 since that was before a was re-assigned).

a = 20;
console.log(a);

// 4.4.Now add to the bottom of the script let b = 7 * a.
let b = 7 * a;

//4.5.Log what b is. It should log the result of 7 multiplied by whatever you re-assigned a with.
console.log(b);
// ----------------------------------

// 6.Try this sequence:
//  6.11Declare a const variable max with the value 57.
const max = 57;

//6.2 Declare another const variable actual and assign it max - 13.
const actual = max - 13;

// 6.2.Declare another const variable percentage and assign it actual / max.
const percentage = actual / max;

// 6.3. Now if you log percentage, you should see a value in the console like 0.7719.
console.log(percentage);

//------------------Knowledge check---------------------------

// What three keywords can you use to declare new variables?----var, let , const
//Which of the three variable declarations should you avoid and why?
/*
var keyword . It holds confusing behavior that can easily lead into by
It doesn't respect code block and can be used before it't officially declaration 
giving an unexpected results.

*/

/*


*/
