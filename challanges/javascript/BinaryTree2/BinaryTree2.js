class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  // ROOT - LEFT - RIGHT
  preOrder() {
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  //  LEFT- ROOT - RIGHT
  inOrder() {
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  // LEFT - RIGHT - ROOT
  postOrder() {
    const results = [];
    const _walk = (node) => {
      console.log(node);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }
  breadth() {
    const results = [];
    results.push(this.root.value);
    // results.push(this.root.left.value);
    // results.push(this.root.right.value);

    const _walk = (node1) => {
      const _walk1 = (node2) => {
        if (node2.right && node2.left) {
          results.push(node2.right.value);
          // results.push(node1.right.value);
          _walk(node2.left);
        } else if (node2.left) {
          results.push(node2.left.value);
          // results.push(node1.right.value);
          _walk(node2.right);
        } else if (node2.right) {
          results.push(node2.right.value);
          // results.push(node1.right.value);
          _walk(node2.left);
        }
        return;
      };
      // console.log(node);
      if (node1.left && node1.right) {
        results.push(node1.left.value);
        results.push(node1.right.value);
        _walk(node1.left);
      } else if (node1.right) {
        results.push(node1.right.value);
        _walk1(node1.left);
      } else if (node1.left) {
        results.push(node1.left.value);
        _walk1(node1.right);
      }

      return;
    };

    _walk(this.root);
    return results;
  }
}
module.exports=BinaryTree;
const one = new Node(2);
const two = new Node(7);
const three = new Node(5);
const four = new Node(6);
const five = new Node(9);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
tree = new BinaryTree(one);