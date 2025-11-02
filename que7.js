// 7. Ask user’s age and check if eligible to vote
// If age >= 18 → “Eligible”, else → “Not eligible”
// number are positive or nagative
let num = prompt("Enter the age ");
// + , Number , parseInt are use string change into number

if (num === null) {
  console.error("bhai cancel enter mat kr");
} else {
  if (num.trim() === "") {
    console.error("bhai dhang se likhle ......");
  } else {
    num = Number(num.trim());
    if (isNaN(num)) {
      console.error("bhaipls number de de ");
    } else {
      if (num >= 18) {
        console.log(`${num} is “Eligible”`);
      } else {
        console.log(`${num} is “Not eligible”`);
      }
    }
  }
}

