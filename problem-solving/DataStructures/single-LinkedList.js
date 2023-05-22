class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  //add node to end of linked list
  push(val) {
    let newNode = new Node(val);
    //if the list is empty
    if (!this.head) {
      //we assign the node to head so head will have val and next property
      this.head = newNode;
      //we assign the tail to the node which will have the same val and next property of head
      this.tail = this.head;
    } else {
      //since this.tail is pointing to the head, we get the next property in this.head and point to the next node
      this.tail.next = newNode;
      //updates the tail with the newNode
      this.tail = newNode;
    }
    //updatesnumber of items in the list
    this.length++;
    //returns the current list;
    return this;
  }
  //return the node from the end of the linked list
  pop() {
    //if there is no list
    if (!this.head) return undefined;
    //set the current to the head node that is created already
    let current = this.head;
    //set the newTail to be the currentNode which is the head Node
    let newTail = current;
    //if there is a node in the next property for the head node
    while (current.next) {
      //we assign the node to be the new tail
      newTail = current;
      //we move to the next node in the next property in our current
      current = current.next;
    }
    //update the second to last node to be our tail since we plan to remove the last node.
    this.tail = newTail;
    //set the next property to be null because are removing the node property in the next property of tail
    this.tail.next = null;
    //reduce the number of items in list
    this.length--;
    //if lenght  = 0, we reset the head and tail to be null
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    //return the last node
    return current;
  }
}

let first = new SinglyLinkedList();
first.push(5);
first.push(6);
first.push(7);
console.log(first.pop());
console.log(first);
