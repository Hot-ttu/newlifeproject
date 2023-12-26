const input = require("fs")
  .readFileSync(
    process.platform === "linux"
      ? "/dev/stdin"
      : "/Users/juyoung/Desktop/coding/newlifeproject/boj/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);

const DoNotListenList = new Set(input.slice(0, N));
const DoNotSeeList = input.slice(N);

// const DoNotListenAndSeeList = [];

// DoNotSeeList.forEach((DoNotSeePerson) => {
//   if (DoNotListenList.has(DoNotSeePerson)) {
//     DoNotListenAndSeeList.push(DoNotSeePerson);
//   }
// });

const DoNotListenAndSeeList = DoNotSeeList.filter((DoNotSeePerson) =>
  DoNotListenList.has(DoNotSeePerson)
);

DoNotListenAndSeeList.sort();

console.log(`${DoNotListenAndSeeList.length}\n${DoNotListenAndSeeList.join("\n")}`);
