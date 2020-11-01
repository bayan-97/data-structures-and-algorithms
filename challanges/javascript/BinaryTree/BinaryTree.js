

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
  findmaximumvalue() {
    let maximie = this.root.value;

    const _walk = (node) => {
      if (node.left) {
        if (node.left.value > maximie && node.left !== null) {
          console.log(node.left);

          maximie = node.left.value;
          _walk(node.left);
        } else if (node.left !== null) {
          _walk(node.left);
        }
      }
      if (node.right) {
        if (node.right.value > maximie && node.right !== null) {
          // console.log(node.left)

          maximie = node.right.value;
          _walk(node.right);
        } else if (node.right !== null) {
          _walk(node.right);
        }
      }
      return;
    };

    _walk(this.root);
    return maximie;
  }
}
module.exports=BinaryTree;
