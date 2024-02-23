/**
 * BFS 문제였다. 답을 참고하여 풀었는데 이해 안 되는점이 있다.
 * 이해 안 되는 점 1: 0을 더하니깐 우선순위를 주는 것까진 이해하겠는데 왜 if문 조차도 앞에서 해줘야 되는지 모르겠다.
 * 이해 안 되는 점 2: time을 쓰지 않고 visited 값을 조작하여 하고 싶었는데 시간초과가 계속 떠서 실패했다.
 */
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

const [N, K] = input.shift().split(" ").map(Number);

const BFS = (start) => {
  const queue = [[start, 0]];

  const visited = new Array(100001).fill(false);

  while (queue.length) {
    const [v, time] = queue.shift();
    if (v === K) {
      console.log(time);
      return;
    }

    if (!visited[v * 2] && 0 <= v * 2 && v * 2 <= 100000) {
      queue.unshift([2 * v, time]);
      visited[2 * v] = true;
    }

    if (!visited[v - 1] && 0 <= v - 1 && v - 1 <= 100000) {
      queue.push([v - 1, time + 1]);
      visited[v - 1] = true;
    }

    if (!visited[v + 1] && 0 <= v + 1 && v + 1 <= 100000) {
      queue.push([v + 1, time + 1]);
      visited[v + 1] = true;
    }
  }
};

BFS(N);
