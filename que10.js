// 10. Ask user for password and print access status
// Hardcoded correct password. Compare with user input. solve in js

// Hardcoded correct password
const CORRECT_PASSWORD = "Deep123";

const userInput = prompt("Enter password:");

if (userInput === null) {
  console.log("Input cancelled.");
} else if (userInput === CORRECT_PASSWORD) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}
