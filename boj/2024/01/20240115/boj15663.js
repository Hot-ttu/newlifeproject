const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const list = input.shift().split(" ").map(Number);
const visited = new Array(N).fill(false);

list.sort((a, b) => a - b);

const result = new Set();
let perm = [];

const Perm = (depth) => {
  if (depth === M) {
    result.add(perm.join(" "));
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) {
      continue;
    }
    perm.push(list[i]);
    visited[i] = true;
    Perm(depth + 1);
    perm.pop();
    visited[i] = false;
  }
};

Perm(0);

console.log(Array.from(result).join("\n"));
