const fs = require("fs");
const input = fs
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/juyoung/Desktop/coding/newlifeproject/boj/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const list = input.shift().split(" ").map(Number);

list.sort((a, b) => a - b);

const result = [];
const perm = [];
const Perm = (idx, depth) => {
  if (depth === M) {
    result.push([...perm]);
    return;
  }

  for (let i = idx; i < N; i++) {
    perm.push(list[i]);

    Perm(i, depth + 1);
    perm.pop();
  }
};

Perm(0, 0);
console.log(result.map((line) => line.join(" ")).join("\n"));
