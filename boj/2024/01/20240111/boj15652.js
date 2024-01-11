const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const result = [];
let perm = [];
const Perm = (idx, depth) => {
  if (depth === M) {
    result.push([...perm]);
    return;
  }

  for (let i = idx; i <= N; i++) {
    perm.push(i);
    Perm(i, depth + 1);
    perm.pop();
  }
};

Perm(1, 0);
console.log(result.map((line) => line.join(" ")).join("\n"));
