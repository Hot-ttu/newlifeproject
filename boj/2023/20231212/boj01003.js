function solution(T, testCase) {
  // 여기에 코드를 작성해주세요
  memoZero = [1, 0];
  memoOne = [0, 1];

  result = new String();

  for (let N of testCase) {
    for (let i = 2; i < N + 1; i++) {
      memoZero[i] = memoZero[i - 1] + memoZero[i - 2];
      memoOne[i] = memoOne[i - 1] + memoOne[i - 2];
    }

    result += `${memoZero[N]} ${memoOne[N]}\n`;
  }
  console.log(result);
}

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", (line) => {
  input.push(+line);
}).on("close", () => {
  const T = input[0];
  const testCase = input.slice(1);
  solution(T, testCase);
  process.exit();
});
