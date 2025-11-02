// 15. Keep asking number until user enters an even number
// Use while loop. Stop only if input is even.
// 15. Keep asking for a number until the user enters an even number

let number;

while (true) {
  number = prompt("Enter a number:");

  if (number === null) {
    console.error("bhai cancel enter mat kr");
  } else {
    if (number.trim() === "") {
      console.error("bhai dhang se likhle ......");
    } else {
      number = Number(number.trim());
      if (isNaN(number)) {
        console.error("bhaipls number de de ");
      } else {
        number = Number(number);

        if (number % 2 === 0) {
          console.log(`✅ You entered an even number: ${number}`);
          break;
        } else {
          console.log(`❌ ${number} is odd. Try again!`);
        }
      }
    }
  }
}
