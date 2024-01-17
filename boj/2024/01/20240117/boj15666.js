const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const visited = new Array(9).fill(false);

const list = input.shift().split(" ").map(Number);

list.sort((a, b) => a - b);

let perm = [];
let result = new Set();

const Perm = (idx, depth) => {
  if (depth === M) {
    result.add([...perm].join(" "));
    return;
  }

  for (let i = idx; i < N; i++) {
    perm.push(list[i]);
    Perm(i, depth + 1);
    perm.pop();
  }
};

Perm(0, 0);

console.log(Array.from(result).join("\n"));
