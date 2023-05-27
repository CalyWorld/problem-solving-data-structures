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
    //get the tail
    let tail = this.tail;
    //get the prev node before tail
    let newTail = tail.prev;
    //set the prev node next property to null
    newTail.next = null;
    //update the prev node to be tail
    this.tail = newTail;
    //reduce the length
    this.length--;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.head.prev = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
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
      this.length++;
    }
  }
}

const mydoubleList = new DoublyLinkedList();
mydoubleList.push(1);
mydoubleList.push(2);
mydoubleList.push(3);
// mydoubleList.push(4);
// mydoubleList.push(5);
// console.log(mydoubleList.pop());
// console.log(mydoubleList.shift());
mydoubleList.unshift(0);
console.log("my-list", mydoubleList);
