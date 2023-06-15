class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (val === current.value) return undefined;
        if (val < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          }
          current = current.left;
        } else if (val > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          }
          current = current.right;
        }
      }
    }
  }
  find(val) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (val === current.value) {
        return current;
      } else if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      }
    }
    return undefined;
  }
  //Tree traversal
  BFS(){
    const data = [];
    const queue = [];
    let node = this.root;
    queue.push(node);
    while(queue.length>0){
      node = queue.shift();
      data.push(node.value);
      const leftNodeQueue = node.left;
      const rightNodeQueue = node.right;
      if(leftNodeQueue){
        queue.push(leftNodeQueue);
      }
      if(rightNodeQueue){
        queue.push(rightNodeQueue);
      }
    }
       return data;
  }
  DFSPreOrder(){
    const data = [];
    function traverse(node){
      data.push(node.value);
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data
  }
  DFSPostOrder(){
    const data = [];
    function traverse(node){
      if(node.left){
        traverse(node.left);
      }
      if(node.right){
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }
  DFSInOrder(){
    const data = [];
    function traverse(node){
      if(node.left){
        traverse(node.left);
      }
      data.push(node.value);
      if(node.right){
        traverse(node.right);
      }
    }
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(3);

// tree.BFS();

// tree.DFSPreOrder();
// tree.DFSPostOrder();
tree.DFSInOrder();

// tree.find(10);
