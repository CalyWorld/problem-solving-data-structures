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
}

const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.left = new Node(5);
// tree.root.right = new Node(15);
// tree.root.left.left = new Node(3);
// tree.root.left.right = new Node(6);
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);
tree.insert(3);


tree.find(10);