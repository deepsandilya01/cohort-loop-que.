// 12. Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".

let countYes = 0;
while (true) {
  let word = prompt("Enter a word (type 'stop' to end):");
  if (word === null) {
    console.error("you enter cancel");
  } else {
    if (word === "stop") {
      break;
    } else if (word === "yes") {
      countYes++;
    }
  }
}

console.log(`You typed "yes" ${countYes} time(s).`);
