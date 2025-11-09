// 19. ATM Simulator – Allow 3 withdrawals
// Start with ₹1000 balance. Ask withdrawal amount 3 times.
// If enough balance → deduct
// Else → print “Insufficient balance”

let balance = 1000;
const totalWithdrawals = 3;

for (let i = 1; i <= totalWithdrawals; i++) {
  let amount = Number(prompt(`Enter withdrawal amount (${i}/3):`));

  if (amount <= balance) {
    balance -= amount;
    console.log(
      `₹${amount} withdrawn successfully. Remaining balance: ₹${balance}`
    );
  } else {
    console.log(`Insufficient balance! You have only ₹${balance}.`);
  }
}
console.log("Transaction session ended.");
console.log(`Final balance: ₹${balance}`);

