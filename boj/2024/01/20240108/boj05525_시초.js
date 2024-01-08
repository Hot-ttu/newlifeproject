const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const M = +input.shift();
const S = input.shift();

const PN = [];

for (let i = 0; i < 2 * N + 1; i++) {
  if (!(i % 2)) {
    PN.push("I");
  } else {
    PN.push("O");
  }
}

const PnString = PN.join("");

let cnt = 0;
let flag = false;
for (let i = 0; i < M; i++) {
  if (S[i] === "I") {
    let tmp = i;
    for (let j = 0; j < PnString.length; j++) {
      if (S[tmp++] !== PnString[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      cnt++;
    }
    flag = false;
  }
}

console.log(cnt);
