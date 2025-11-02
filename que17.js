// 17. Print only first 3 odd numbers from 1 to 20
// Use loop. Stop with break after 3 odd prints.
let count = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
    count++;
    if (count === 3) {
      break;
    }
  }
}
