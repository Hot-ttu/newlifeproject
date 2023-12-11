function solution(score) {
  // 여기에 코드를 작성해주세요
  if (score[0] === "A") {
    if (score[1] === "+") {
      console.log("4.3");
    } else if (score[1] === "0") {
      console.log("4.0");
    } else {
      console.log("3.7");
    }
  } else if (score[0] === "B") {
    if (score[1] === "+") {
      console.log("3.3");
    } else if (score[1] === "0") {
      console.log("3.0");
    } else {
      console.log("2.7");
    }
  } else if (score[0] === "C") {
    if (score[1] === "+") {
      console.log("2.3");
    } else if (score[1] === "0") {
      console.log("2.0");
    } else {
      console.log("1.7");
    }
  } else if (score[0] === "D") {
    if (score[1] === "+") {
      console.log("1.3");
    } else if (score[1] === "0") {
      console.log("1.0");
    } else {
      console.log("0.7");
    }
  } else if (score[0] === "F") {
    console.log("0.0");
  }
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
