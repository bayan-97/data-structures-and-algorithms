

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
}

//  const one = new Node(1);
//     const two = new Node(2);
//     const three = new Node(3);
//     const four = new Node(4);
//     const five = new Node(5);
//     one.left = two;
//     one.right = three;
//     two.left = four;
//     two.right = five;


// console.log(tree.preOrder())
// console.log( tree.inOrder())
// console.log( tree.postOrder())
module.exports=BinaryTree;
