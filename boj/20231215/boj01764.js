const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const DoNotListenList = new Set(input.slice(0, N));
const DoNotSeeList = new Set(input.slice(N));

const DoNotListenAndSeeList = [];

DoNotSeeList.forEach((DoNotSeePerson) => {
  if (DoNotListenList.has(DoNotSeePerson)) {
    DoNotListenAndSeeList.push(DoNotSeePerson);
  }
});

DoNotListenAndSeeList.sort();

console.log(`${DoNotListenAndSeeList.length}\n${DoNotListenAndSeeList.join("\n")}`);
