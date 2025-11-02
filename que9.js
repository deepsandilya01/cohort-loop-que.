// 9. Count how many numbers between 1 and 15 are greater than 8
// Loop and count conditionally.
let count = 0;
for (let i = 1; i <= 15; i++){
    if(i > 8){
        count++;
        console.log(i);
    }
}
console.log(`total number is ${count}`);