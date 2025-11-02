// 18. Ask user 5 numbers. Count how many are positive
// Use loop + condition + counter.

let count = 0;
for (let i = 1; i <= 5; i++) {
  let num = +prompt("Enter the number: ");
  if (num > 0) {
    count++;
  }
}
console.log(`You entered ${count} positive number(s).`);
