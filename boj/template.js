function solution(num) {
  // 여기에 코드를 작성해주세요
}

const readline = require("node:readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line", (line) => {
  solution(line.trim());
  rl.close();
  process.exit();
});
