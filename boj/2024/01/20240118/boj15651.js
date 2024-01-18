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

perm = [];
result = [];

const Perm = (depth) => {
  if (depth === M) {
    result.push([...perm]);
    return;
  }

  for (let i = 1; i <= N; i++) {
    perm.push(i);
    Perm(depth + 1);
    perm.pop();
  }
};

Perm(0);

console.log(result.map((line) => line.join(" ")).join("\n"));
