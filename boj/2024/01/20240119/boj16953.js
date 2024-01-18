const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [A, B] = input.shift().split(" ").map(Number);
const visited = new Set();

const BFS = () => {
  const queue = [A];
  visited.add(A);

  let cnt = 0;
  while (queue.length) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const v = queue.shift();

      if (v * 2 === B || v * 10 + 1 === B) {
        return cnt + 2;
      }

      if (!visited.has(v * 2) && v * 2 < B) {
        queue.push(v * 2);
        visited.add(v * 2);
      }

      if (!visited.has(v * 10 + 1) && v * 10 + 1 < B) {
        queue.push(v * 10 + 1);
        visited.add(v * 10 + 1);
      }

      if (!queue.length) {
        return -1;
      }
    }
    cnt++;
  }
};

const result = BFS();

console.log(result);
