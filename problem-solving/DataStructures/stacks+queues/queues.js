class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  dequeue() {
    if (!this.first) return null;
    const firstElement = this.first;
    const nextElement = this.first.next;
    this.first = nextElement;
    if (this.first === this.last) {
      this.last = null;
    }
    this.size--;
  }
}

const myQueue = new Queue();
myQueue.enqueue(0);
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(4);

myQueue.dequeue();
myQueue.dequeue();
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();

console.log(myQueue);
