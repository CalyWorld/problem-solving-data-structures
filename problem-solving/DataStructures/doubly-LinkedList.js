class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    //get the tail
    let tail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return tail;
  }
  shift() {
    if (!this.head) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter;
    let current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        counter++;
        current = current.next;
      }
    } else {
      current = this.tail;
      let counter = this.length - 1;
      while (counter !== index) {
        counter--;
        current = current.previous;
      }
    }
    return current;
  }
  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = value;
    }
    return foundNode;
  }
  insert(index, val) {
    let newNode = new Node(val);
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length) {
      return this.push(val);
    } else if (index === 0) {
      return this.unshift(val);
    } else {
       let prevNode = this.get(index-1);
       let nextNode = prevNode.next;
       prevNode.next = newNode;
       newNode.prev = prevNode;
       newNode.next = nextNode;
       nextNode.prev = newNode;
    }
    this.length++;
  }
}

const mydoubleList = new DoublyLinkedList();
mydoubleList.push(0);
mydoubleList.push(1);
mydoubleList.push(2);
mydoubleList.push(3);
// mydoubleList.push(4);
// mydoubleList.push(5);
// console.log(mydoubleList.pop());
// console.log(mydoubleList.shift());
// console.log(mydoubleList.unshift(0));
// console.log(mydoubleList.get(3));
// console.log(mydoubleList.set(5,3));
console.log(mydoubleList.insert(1, 3));
console.log("my-list", mydoubleList);
