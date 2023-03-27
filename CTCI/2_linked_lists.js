
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(elem) {
    let node = new Node(elem);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  insertAt(data, position) {
    if (position + 1 > this.size) {
      console.log('out of range!');
      return;
    }

    let insertedNode = new Node(data);
    let curr = this.head;
    let right;
    let left;

    if (position === 1) { // new head
      right = curr;
      this.head = insertedNode;
      insertedNode.next = right;
      this.size++;
    } else if (position === this.size + 1) { // new tail
      this.add(data);
    } else { // internal insert

      let count = 1;
      while (position > count) {
        left = curr;
        right = left.next;
        curr = right;
        count++;
      }

      left.next = insertedNode;
      insertedNode.next = right;
      this.size++;
    }

  }

  removeFrom(index) {
    let curr = this.head;
    let count = 1;
    let prev;

    while (count < index - 1) {
      prev = curr;
      curr = curr.next;
      count++;
    }

    let leftIdx = count - 1;
    let rightIdx = count + 1;


    // console.log('left: ', leftIdx, 'right: ', rightIdx);
    console.log('previous:', prev, 'current: ', curr);
  }

  removeElement(dataToDelete) {
    let currNode = this.head;

    if (currNode.data === dataToDelete) {
      this.head = currNode.next;
    } else {
      let nextNode = currNode.next;

      while (nextNode) {

        if (nextNode.data === dataToDelete) { // delete and early return
          let newNext = nextNode.next;
          currNode.next = newNext;
          this.size--;
          return;
        }
        currNode = nextNode;
        nextNode = currNode.next;
      }
      console.log('The data: ', dataToDelete, ' is not in this list.')
    } // still have to worry about if the data to delete is not in the list
  }

  print() {
    let currNode = this.head;

    while (currNode) {
      console.log(currNode);
      currNode = currNode.next;
    }
  }

  isEmpty() {
    console.log(this.size === 0);
  }

  removeDuplicates() {
    // if we want to run in constant space O(1) we need to use a runner 0(n^2) time
    let seen = new Map();
    let curr = this.head;
    let prev;

    while (curr) {
      if (seen.has(curr.data)) { // de-couple
        prev.next = curr.next;
        curr = curr.next;
      } else {
        seen.set(curr.data, true); // catalog data
        prev = curr;
        curr = curr.next; // move to next node
      }
    }
    seen.clear();
  }

  find(k) {
    let i = this.size - k;
    let node = this.head;

    if (i > this.size || i < 0) {
      console.log('out of range');
    } else {
      while (i > 0) {
        node = node.next;
        i--;
      }
      console.log(node);
    }
  }

  findRecursive(node, k) {
    if (node.next === null) return 0;
    let index = this.findRecursive(node.next, k) + 1;
    if (index === k) console.log(k + 'th to last node is ' + node.data);
    return index;
  }

  /*

  delete a given node
  will the list always be longer than 2
  will the give node always be in the middle (eg. not the head or tail)


  find location of node in list (distance from head)

  maintain the toDelete nodes next pointer (this needs to become prev's pointer)

  initial solution that didn't follow instructions carefully:

  let prev = this.head;
  while (prev.next.data != node.data && prev.next.next != node.next) {
    prev = prev.next;
  }
  prev.next = node.next;
  */
  deleteMiddle(node) {
    if (node === null || node.next === null) return false;
    node.data = node.next.data;
    node.next = node.next.next;
  }

  deleteMiddleRecursively(node, prev = this.head) {
    if (prev.next.data === node.data && prev.next.next === node.next) {
      prev.next = node.next;
      return;
    }
    return this.deleteMiddleRecursively(node, prev.next);
  }

  /*
  if `partition` is either greater than or less than all the values in the list, return the original list

  */

  newAdd(el) {
    let newNode = new Node(el);
    let currNode;

    if (this.head === null) {
      this.head = newNode;
    } else {
      currNode = this.head;

      while (currNode.next) {
        currNode = currNode.next;
      }

      currNode.next = newNode;
    }

    this.size++;
  }

  partition(val) {
    let more = new LinkedList();
    let less = new LinkedList();

    let curr = this.head;
    while (curr) {
      if (curr.data < val) {
        less.newAdd(curr.data);
      } else if (curr.data >= val) {
        more.newAdd(curr.data);
      }
      curr = curr.next;
    }

    if (less.size === 0) {
      more.print();
      return more;
    } else if (more.size === 0) {
      less.print();
      return less;
    }

    let newList = less.head;

    while (newList.next) newList = newList.next;

    newList.next = more.head;
    less.size += more.size;

    less.print();
    return less;
  }

  sumLists(listA, listB) {
    /*
    need to keep some multiplier that goes from 1 -> 10 -> 100 -> ...
    if they're the same length or different lengths

    traverse lists at given position and sum values at same position (* 10)

    if the end of one list is reached, need to stop looking in that list but keep counting other

    if either list is empty, sum other list
    if both lists are empty, return 0
    ???
    */
    let result = new LinkedList();
    let temp = 0;
    let A = listA.head;
    let B = listB.head;

    while (A || B) {
      if (A === null) {
        temp += B.data;
        B = B.next;
      } else if (B === null) {
        temp += A.data;
        A = A.next;
      } else {
        temp += A.data + B.data;
        A = A.next;
        B = B.next;
      }

      if (temp < 10) {
        result.add(temp);
        temp = 0;
      } else {
        temp -= 10;
        result.add(temp);
        temp = 1;
      }
    }

    return result;
  }

  reverse() {
    /*
    while node:

    maintain the 'next' for current (this becomes new curr)

    uncouple curr's next from what it is pointing at

    */
    let prev = null;
    let curr = this.head;
    let next;

    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    this.head = prev;
    return this;
  }

  isPalindrome() {
    let reversed = new LinkedList();

    let node = this.head;
    while (node) {
      reversed.add(node.data);
      node = node.next;
    }
    reversed.reverse();

    let right = this.head;
    let left = reversed.head;

    while (right) {
      if (left.data != right.data) return false;
      right = right.next;
      left = left.next;
    }

    return true;
  }

  stackIsPalindrome() {
    // builds a stack up to the middle of the list then compares subsequent list data to end of stack
    // if entire loop is
    let midNodeIdx = Math.ceil(this.size / 2);
    let index = 0;
    let stack = [];
    let node = this.head;
    const oddLength = (middle) => middle % 2 === 1;

    while (node) {
      if (index < midNodeIdx) {
        stack.push(node.data);
        index++;
      } else if (index === midNodeIdx && oddLength(midNodeIdx)) {
        stack.pop();
      } else {
        if (node.data !== stack.pop()) return false;
      }

      node = node.next;
    }

    return true;
  }

  intersection(listA, listB) {

  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// let origData = [1, 2, 3, 4, 5];

// const inputList = new LinkedList();
// let data = [3, 5, 8, 5, 10, 2, 1];
// data.forEach(el => inputList.add(el));

/* inputList.insertAt('NEW HEAD', 1);
inputList.insertAt('NEW TAIL', 7);
inputList.insertAt('INTERIOR', 3)
inputList.add('NEW NEW TAIL');
inputList.isEmpty()
inputList.removeElement('INTERIOR');

inputList.removeElement(15);
inputList.insertAt('out of range data', 300);
inputList.removeDuplicates();
inputList.print();
inputList.find(3)
inputList.findRecursive(inputList.head, 3);

inputList.deleteMiddle(new Node(4));

let toDelete = new Node(4);
toDelete.next = new Node(5);
inputList.deleteMiddleRecursively(toDelete);
inputList.partition(9);
inputList.reverse();
*/

// let LL = new LinkedList();

/*
let a = [7, 1, 6];
let b = [5, 9, 2];

let listA = new LinkedList();
let listB = new LinkedList();

a.reverse().forEach(el => listA.add(el));
b.reverse().forEach(el => listB.add(el));

LL.sumLists(listA, listB).print(); // 9 -> 1 -> 2
LL.sumLists(listA.reverse(), listB.reverse()).print(); // 9 -> 1 -> 2

*/

// [1, 2, 3, 2, 1].forEach(el => LL.add(el));


// console.log(LL.stackIsPalindrome());

// let a = new Node('a');
// let b = new Node('a');
// let c = a;

// console.log(a, c);
// console.log(a == c);



/* let g = new Node('g'); // problem 2.7
let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');

let intersect = new Node('intersect');
let e = new Node('e');

let list1 = new LinkedList();
let list2 = new LinkedList();
list1.head = g;
g.next = a;
a.next = b;
b.next = intersect;
intersect.next = e;
list1.size = 5;

list2.head = c;
c.next = d;
d.next = intersect;
list2.size = 4; */

function intersection(list1, list2) { // O(n ** 2)
  let node1 = list1.head;
  while (node1) {
    let node2 = list2.head;
    while (node2) {
      if (node1 == node2) return true;
      node2 = node2.next;
    }
    node1 = node1.next;
  }
  return false;
}
// console.log(intersection(list1, list2));

function betterIntersection(list1, list2) { // O(n) where n is the length of the longer list (if applicable)
  let extra = Math.abs(list1.size - list2.size);
  let longer = list1.size > list2.size ? list1 : list2;
  let node = longer.head;

  while (extra > 0) {
    node = node.next;
    extra--;
    longer.size--;
  }
  let node2 = list2.head;

  while (node2) {
    if (node2 === node) return [node2, true];
    node2 = node2.next;
    node = node.next;
  }

  return [false];
}
// console.log(betterIntersection(list1, list2))


// 2.8
function detectLoop(list) { // hash set
  const HASH_SET = new Map();
  let node = list.head;

  while (node) {
    if (HASH_SET.has(node)) return node;

    HASH_SET.set(node, true);
    node = node.next;
  }

  return false;
}

function runnerDetectLoop(list) {
  let slow = list.head;
  let fast = slow.next;

  while (fast) {
    if (slow === fast) return slow; // this only works as a fluke
    slow = slow.next;
    fast = fast.next.next;
  }
}

let ll = new LinkedList();

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');

ll.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = c;

// console.log(detectLoop(ll));
console.log(runnerDetectLoop(ll));

