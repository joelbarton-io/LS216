// BST implementation
class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  };
};

class BST {
  constructor() {
    this.root = null;
  };

  create(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    };

    let current = this.root;

    const addSide = side => {
      if (!current[side]) {
        current[side] = newNode;
        return this;
      };
      current = current[side];
    };

    while (true) {
      if (val === current.val) return this;
      if (val < current.val) addSide('left');
      else addSide('right');
    };
  };

  inOrder() {
    let visited = [],
        current = this.root;

    function traverse(node) {
      if (node === null) return; // base case

      traverse(node.left); // recursively
      visited.push(node.val);
      traverse(node.right);
    };

    traverse(current);
    return visited;
  }
};


/*
tree.inOrder()
    (variable and function declarations)

    traverse(current)
        (node.value: 20)
        NODE IS NOT NULL

        traverse(node.left)
            (node.value: 14)
            NODE IS NOT NULL

            traverse(node.left)
                (node.value: 9)
                NODE IS NOT NULL

                traverse(node.left)
                    (node.value: 3)
                    NODE IS NOT NULL

                    traverse(node.left)
                        (node.value: null)        <- REACHED A LEAF
                        NODE IS NULL
                        >>RETURN and POP<<

                    visited.push(node.val) ... visited: [3]

                    traverse(node.right)
                        (node.value: null)
                        NODE IS NULL
                        >>RETURN and POP<<

                    visited.push(node.val) ... visited: [3, 9]

                    traverse(node.right)
                        (node.value: 11)
                        NODE IS NOT NULL

                        traverse(node.left)
                            (node.value: null)
                            NODE IS NULL

                            visited.push(node.val); ... visited: [3, 9, 11]

                            traverse(node.right)
                                (node.value: null)
                                NODE IS NULL

                        >>RETURN and POP<<

                    >>RETURN and POP<<

                    visited.push(node.val); ... visited: [3, 9, 11, 14]

                    traverse(node.right)
                        (node.value: 19)
                        NODE IS NOT NULL







*/

const tree = new BST();

tree.create(20); // root
tree.create(14);
tree.create(57);
tree.create(9);
tree.create(19);
tree.create(31);
tree.create(62);
tree.create(3);
tree.create(11);
tree.create(72);

console.log(tree.inOrder()); // > [ 3, 9, 11, 14, 19, 20, 31, 57, 62, 72 ]

