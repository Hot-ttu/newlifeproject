const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const exp = input;

let numStart = 0;
let tmpSum = 0;
let sum = 0;
let minusTog = false;
for (let i = 0; i <= exp.length; i++) {
  if (exp.charAt(i) === "-" || i === exp.length) {
    if (minusTog) {
      tmpSum += Number(exp.slice(numStart, i));
      sum -= tmpSum;
      numStart = i + 1;
      tmpSum = 0;
    } else {
      tmpSum += Number(exp.slice(numStart, i));
      sum += tmpSum;
      minusTog = true;
      numStart = i + 1;
      tmpSum = 0;
    }
  } else if (exp.charAt(i) === "+") {
    tmpSum += Number(exp.slice(numStart, i));
    numStart = i + 1;
  }
}

console.log(sum);
