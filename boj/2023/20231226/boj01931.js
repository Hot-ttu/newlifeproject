const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const meetings = input.map((num) => num.split(" ").map(Number));
// meetings.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));
meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);

let endTime = 0;
let count = 0;
meetings.forEach((meeting) => {
  if (meeting[0] >= endTime) {
    endTime = meeting[1];
    count++;
  }
});

console.log(count);
