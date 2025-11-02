// 14. Sum of all odd numbers from 1 to 30
// Add only odd numbers. Print final sum.

let sumOdd = 0;
for(let i = 1; i <= 30; i++){
    if(i%2 !== 0){
        sumOdd += i;
    }
}
console.log(`Sum of total odd number ${sumOdd} .`)