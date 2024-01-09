const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();

const GMatrix = input.map((line) => line.split(" ").map(Number));
const resultMatrix = Array.from({ length: N }, () => new Array(N).fill(0));

const BFS = (start) => {
  const queue = [start];

  while (queue.length) {
    const vertex = queue.shift();

    GMatrix[vertex].forEach((v, idx) => {
      if (v === 1 && resultMatrix[start][idx] === 0) {
        queue.push(idx);
        resultMatrix[start][idx] = 1;
      }
    });
  }
};

for (let i = 0; i < N; i++) {
  BFS(i);
}
console.log(resultMatrix.map((line) => line.join(" ")).join("\n"));
