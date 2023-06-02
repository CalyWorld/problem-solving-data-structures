// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     //add node to end of linked list
//     push(val){
//         let newNode = new Node(val);
//         //if the list is empty
//         if(!this.head){
//             //we assign the node to head so head will have val and next property
//             this.head = newNode;
//             //we assign the tail to the node which will have the same val and next property of head
//             this.tail = this.head;
//         }else{
//             //since this.tail is pointing to the head, we get the next property in this.head and point to the next node
//             this.tail.next = newNode;
//             //updates the tail with the newNode
//             this.tail = newNode;
//         }
//         //updatesnumber of items in the list
//          this.length++;
//         //returns the current list;
//          return this;
//     }
//     //return the node from the end of the linked list
//     pop(){
//         //if there is no list
//         if(!this.head) return undefined;
//         //set the current to the head node that is created already
//         let current = this.head;
//         //set the newTail to be the currentNode which is the head Node
//         let newTail = current;
//         //if there is a node in the next property for the head node
//         while(current.next){
//             //we assign the node to be the new tail
//             newTail = current;
//             //we move to the next node in the next property in our current
//             current = current.next
//         }
//         //update the second to last node to be our tail since we plan to remove the last node.
//         this.tail = newTail;
//         //set the next property to be null because are removing the node property in the next property of tail
//         this.tail.next = null;
//         //reduce the number of items in list
//         this.length --;
//         //return the last node
//         return current;

//     }
// }

// let collection1 = new SinglyLinkedList();
// let collection2 = new SinglyLinkedList();

// collection1.push({ name: 'Alice', age: 25 });
// collection1.push({ name: 'Bob', age: 30 });
// collection1.push({ name: 'Charlie', age: 35 });
// collection2.push({ name: 'Charlie', age: 35 });
// // console.log(collection.pop());
// console.log("firstCollection", collection1);
// console.log("secondCollection", collection2);
class Node {
  constructor(id, name, collection) {
    this.id = id;
    this.name = name;
    this.collection = collection;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(id, name, collection) {
    let newNode = new Node(id, name, collection);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      //update newTail
      newTail = current;
      //loop to the next item in the list
      current = current.next;
    }
    //set as tail with second to last item from last loop
    this.tail = newTail;
    //since we removed the last item, we set the second to last item next property to null
    this.tail.next = null;
    //reduce the size of list
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  //   delete(id) {
  //   if (!this.head) {
  //     return undefined; // List is empty, nothing to delete
  //   }

  //   if (this.head.id === id) {
  //     this.length--;
  //     this.head = this.head.next;
  //     if (this.length === 0) {
  //       this.tail = null; // List becomes empty, update the tail reference
  //     }
  //     return;
  //   }

  //   //we assign a variable to item which will move through the list
  //   let current = this.head;
  //     //we assign a variable to the previous item before current item
  //   let previous = null;

  //   //if it's not the head
  //     //we are looping the list
  //     while(current){
  //       //check to get item of matched id
  //       if(current.id === id){
  //         //we are now pointing to the item that comes after current using the previous item
  //         previous.next = current.next;
  //         //if our item is at tail
  //         if(current === this.tail){
  //           //we point to previous item as tail
  //           this.tail = previous;
  //         }
  //         this.length --;
  //         return;
  //       }
  //       //we assign the current to previous
  //       previous = current;
  //       //we assign the current to point to the next so we can loop again
  //       current = current.next;
  //     }
  // }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(id, name, collection) {
    // let current = this.head;
    let newNode = new Node(id, name, collection);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this.head;
  }
  get(index) {
    if (index < 0 || index >= this.length) return false;
    let counter = 0;
    let current = this.head;
    while (current) {
      if (counter === index) {
        return current;
      }
      counter++;
      current = current.next;
    }
  }
  set(value, index) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.name = value;
    }
  }
  insert(index, id, name, collection) {
    if (index < 0 || index > this.length) return false;
    let newNode = new Node(id, name, collection);
    if (index === this.length) {
      return this.push(newNode.id, newNode.name, newNode.collection);
    } else if (index === 0) {
      return this.unshift(newNode.id, newNode.name, newNode.collection);
    } else {
      // get previous node before current index position
      let previousNode = this.get(index - 1);
      //store the next node after previous node
      let tempNode = previousNode.next;
      // change the reference point of previous node to new node
      previousNode.next = newNode;
      // set new node to point to tempNode which holds previous node next node
      newNode.next = tempNode;
      //increase length
      this.length++;
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) {
      return this.pop();
    }
    if (index === 0) {
      return this.shift();
    } else {
      //get the previous Node
      let previousNode = this.get(index - 1);
      //store the node that i want to delete
      let removeNode = previousNode.next;
      //point to the removeNode next to reference connections to removed node
      previousNode.next = removeNode.next;
      this.length--;
    }
  }
  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.id);
      current = current.next;
    }
    console.log(arr);
  }

  reverse() {
    let tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
    let next = null;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = tempHead.next; //2 3 4 5
      tempHead.next = prev; //null 1 2 3
      prev = tempHead; //1 2 3 4
      tempHead = next; //2 3 4 5
    }
  }
}

// Create a new singly linked list
let myList = new SinglyLinkedList();

// Add nodes to the list
myList.push(1, "hi", [{ id: 1, input: "Hi", response: "Hello" }]);
myList.push(2, "hello", [{ id: 2, input: "Hello", response: "How are you" }]);
myList.push(3, "yea", [
  { id: 3, input: "yea", response: "what can i do for you?" },
]);
myList.push(4, "ok", [{ id: 4, input: "ok", response: "what do you mean?" }]);
myList.push(5, "hmmm", [
  { id: 5, input: "hmm", response: "what do you mean?" },
]);

// console.log('list:', myList);
// console.log("last item in list", myList.pop());
// console.log('list:', myList);

// myList.delete(1);
// console.log(myList.delete(2));
// console.log(myList.shift());
// console.log(myList.unshift(6, "hey", [{id: 5, input: "hmm", response:"what do you mean?"}]))
// myList.delete(3);
// myList.delete(4);

// console.log('After deletion:', myList);
// console.log('After shift:', myList);
// console.log(myList.get(4));
// console.log(myList.set("obinna", 4));
// myList.insert(0, 6, "obinna", [{id: 6, input: "hmm", response:"what do you mean?"}]);
// myList.remove(2);
myList.reverse();
// myList.print();
console.log("list:", myList);
