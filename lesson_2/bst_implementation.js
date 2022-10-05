class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySeachTree {
  constructor() {
    this.root = null;
  }

  traverse(node) {
    if (node) {
      return;
    }
    this.traverse(node.left);
    console.log('hi')
    this.traverse(node.right);
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {
      if (value === current.value) {
        return undefined;
      }
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this.root;
    // let found = false;

    if (value === current.value) {
      return current;
    } else if (value > current.value) {
      return this.find(current.right);
    } else if (value < current.value) {
      return this.find(current.left);
    }
  }
  /*
    while(current && !found) {
    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    } else {
      found = current;
    }
  }

  if (!found) {
    return undefined;
  }
  return found;
    }
  */
  delete(value) {
    if (this.find(value)) {
    }
    // search for desired value to delete
    // if found
    // if node has no children, delete node
    // if node has 1 child, delete node and have its child take its place
    // if node has 2 children, replace deleted node with successor node
    // successor node : a desendant of the deleted node whose value is the the least of those in the deleted node's right branch
    // initially search the right branch of the deleted node, then all subsequent left branch nodes until found
    // if successor node has a right child, that child's new parent is the successor node's former parent, in the former parent's left branch
  }
}

const myBST = new BinarySeachTree();
const data = [50, 25, 75, 10, 33, 56, 89, 4, 11, 30, 40, 52, 61, 82, 95];
data.forEach((val) => myBST.insert(val));

console.log(myBST.traverse(myBST))
/*
let searchValue = 95;

if (myBST.find(searchValue)) {
  p(searchValue + " is present in the tree!");
} else {
  p("the value: " + searchValue + " is not present in the tree...");
}
*/

myBST.traverse(50);