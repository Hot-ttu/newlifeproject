const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const graph = Array.from({ length: N + 1 }, () => new Array());
const visited = new Array(N + 1).fill(false);
const result = [0];

input.forEach((line) => {
  const [A, B] = line.split(" ").map(Number);

  graph[A].push(B);
  graph[B].push(A);
});

const BFS = (start) => {
  const queue = [start];
  visited[start] = true;

  while (queue.length) {
    const vertex = queue.shift();

    graph[vertex].forEach((oppo) => {
      if (!visited[oppo]) {
        result[oppo - 1] = vertex;
        queue.push(oppo);
        visited[oppo] = true;
      }
    });
  }
};

BFS(1);

console.log(result.slice(1).join("\n"));
