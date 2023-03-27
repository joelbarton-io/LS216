class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.min = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(data) {
    let node = new Node(data);

    if (this.top === null) { // case:first node
      node.min = node.data;
    } else if (this.top.min < node.data) { // case:old min
      node.min = this.top.min;
    } else if (this.top.min >= node.data) { // case:new min
      node.min = node.data;
    }

    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }

    let node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.data;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this.top.data;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  min() {
    if (this.isEmpty()) {
      throw new Error("No min: stack is empty")
    }
    return this.top.min;
  }
}


class SetOfStacks {
  LIMIT = 3;

  constructor() {

  }
}
1, 3, 5, 7, 10, 11, 16, 20, 23, 30, 34, 60
/*
let stack = new Stack();



stack.push(10);
stack.push(20);
stack.push(30);
stack.push(3);
stack.push(40);
stack.pop();
stack.pop();

console.log(
  stack.min()
);
 */

