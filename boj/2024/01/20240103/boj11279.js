const fs = require("fs");
const input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const command = input.map(Number);

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIdx = (parentIdx) => parentIdx * 2 + 1;
  getRightChildIdx = (parentIdx) => parentIdx * 2 + 2;
  getParentIdx = (childIdx) => Math.floor((childIdx - 1) / 2);

  size = () => this.heap.length;

  swap = (idx1, idx2) => {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  };

  peek = () => this.heap[0];

  add = (num) => {
    this.heap.push(num);
    this.bubbleUp();
  };

  bubbleUp = () => {
    let idx = this.heap.length - 1;
    let parentIdx = this.getParentIdx(idx);

    while (this.heap[parentIdx] && this.heap[idx] > this.heap[parentIdx]) {
      this.swap(idx, parentIdx);
      idx = parentIdx;
      parentIdx = this.getParentIdx(idx);
    }
  };

  poll = () => {
    if (this.size() <= 0) {
      return 0;
    }

    if (this.size() === 1) {
      return this.heap.pop();
    }

    const num = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return num;
  };

  bubbleDown = () => {
    let idx = 0;
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);

    while (
      (this.heap[leftChildIdx] && this.heap[leftChildIdx] > this.heap[idx]) ||
      (this.heap[rightChildIdx] && this.heap[rightChildIdx] > this.heap[idx])
    ) {
      let biggerIdx = leftChildIdx;
      if (
        this.heap[rightChildIdx] &&
        this.heap[rightChildIdx] > this.heap[biggerIdx]
      ) {
        biggerIdx = rightChildIdx;
      }

      this.swap(idx, biggerIdx);
      idx = biggerIdx;
      leftChildIdx = this.getLeftChildIdx(idx);
      rightChildIdx = this.getRightChildIdx(idx);
    }
  };
}

const maxHeap = new MaxHeap();
const result = [];

command.forEach((com) => {
  if (com === 0) {
    result.push(maxHeap.poll());
  } else {
    maxHeap.add(com);
  }
});

console.log(result.join("\n"));
