/**
 * 예전에 스터디에서 설명을 들었던 문제지만 안 풀어져 있어서 풀게 되었다.
 * DFS를 이용해 ㅗㅓㅏㅜ 모양을 제외한 모든 경우의 수를 체크할 수 있단 것을
 * 알고 있어서 예외 경우만 조합을 이용해 풀려했지만 시간초과로 실패하였다.
 *
 * ㅗ, ㅓ, ㅏ, ㅜ를 DFS를 할 때, 2번째 칸에서 3번째 칸으로 가지 않고,
 * 제자리 DFS를 진행하여서 고려할 수 있음을 깨닫고 문제를 풀 수 있었다.
 */
const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const paper = input.map((line) => line.split(" ").map(Number));
let visited = Array.from({ length: N }, () => new Array(M).fill(false));

const dirs = [
  [-1, 0],
  [0, -1],
  [0, 1],
  [1, 0],
];

let maxSum = 0;
const DFS = (x, y, depth, sum) => {
  if (depth === 3) {
    if (sum > maxSum) {
      maxSum = sum;
    }
    return;
  }

  visited[x][y] = true;

  dirs.forEach((dir) => {
    const nx = x + dir[0];
    const ny = y + dir[1];

    if (!(nx >= 0 && nx < N && ny >= 0 && ny < M && !visited[nx][ny])) {
      return;
    }

    DFS(nx, ny, depth + 1, sum + paper[nx][ny]);
    visited[nx][ny] = false;

    if (depth === 1) {
      visited[nx][ny] = true;
      DFS(x, y, depth + 1, sum + paper[nx][ny]);
      visited[nx][ny] = false;
    }
  });
};

paper.forEach((line, i) => {
  line.forEach((num, j) => {
    DFS(i, j, 0, num);
    visited[i][j] = false;
  });
});

console.log(maxSum);
