// 11. Allow only 3 attempts to enter correct password
// If user gets it right early, stop. If not → “Account locked”
const correctPassword = "12345";
let attempts = 3;

while (attempts > 0) {
  let userInput = prompt("Enter your password:");
  
  if (userInput === correctPassword) {
    console.log("Access granted");
    break;

  } else {
    attempts--;
    if (attempts > 0) {
      console.log(`Wrong password! You have ${attempts} attempt(s) left.`);

    } else {
      console.log("Account locked 🔒");
      
    }
  }
}
