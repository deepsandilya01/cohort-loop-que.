// 16. Print numbers between two user inputs
// Input start and end using prompt() → print all between

let start = Number(prompt("Enter the starting number:"));
let end = Number(prompt("Enter the ending number:"));

console.log(`Numbers between ${start} and ${end}:`);

for (let i = start; i <= end; i++) {
  console.log(i);
}
