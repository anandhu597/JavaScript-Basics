// ----------------Problem Solving-----------------//

// When a user inputs a number
let answer = parseInt(
  prompt("Pleas Enter the number you would like to FizzBuzz up to :")
);

// Loop from 1 to the entered number

for (let i = 1; i <= answer; i++) {
  // If the current number is divisible by 3 and 5 then print "FizzBuzz"

  if (answer % 3 === 0 && answer % 5 === 0) {
    console.log("FizzBuzz");
  }
  // If the current number is divisible by 3 then print "Fizz"
  else if (answer % 3 === 0) {
    console.log("Fizz");
  }
  // If the current number is divisible by 5 then print "Buzz"
  else if (answer % 5 === 0) {
    console.log("Buzz");
  }
  // Otherwise print the current number
  else {
    console.log(i);
  }
}
