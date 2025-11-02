// number are positive or nagative
let num = prompt("Enter the number ");
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
      if (num === 0) {
        console.log(`${num} is zero`);
      } else if (num > 0) {
        console.log(`${num} is positive`);
      } else {
        console.log(`${num} is nagative`);
      }
    }
  }
}

