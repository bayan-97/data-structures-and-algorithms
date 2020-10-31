class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }
  add(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this.root;
    }
    //  console.log(this.root.value)

    if (value < this.root.value) {
      const _walk = (node) => {
        // console.log(node)
        if (node.left == null) {
          node.left = new Node(value);
          // console.log(",,",this.root)
          return;
        }

        _walk(node.left);
      };
      _walk(this.root);
    } else {
      const _walk = (node) => {
        // console.log(node)
        if (node.right == null) {
          node.right = new Node(value);
          // console.log(",,",this.root)
          return this.root;
        }
      };
      _walk(this.root);
    }
  }
  contains(value) {
    let result = false;
    if (this.root.value === value) {
      result = true;
      return result;
    }
    const _walk = (node) => {
      // console.log(node)
      if (node.left) {
        // console.log(node.left)

        if (node.left.value == value) {
          console.log(node.left.value);

          result = true;
          return result;
        }

        _walk(node.left);
      }
      if (node.right) {
        //  console.log(node.right)
        if (node.right.value == value) {
          console.log(node.right.value);
          result = true;
          console.log(result);
          return result;
        }
        _walk(node.right);
      }
      //  result=false
      // console.log("jj",result)

      if (result == 0) {
        return result;
      }
      // results.push(node.value);
    };

    _walk(this.root);
    return result;
  }
}

let tree = new BinarySearchTree();
console.log(tree.add(10));
console.log(tree.add(5));
console.log(tree.add(6));
console.log(tree.add(11));
console.log(tree.add(12));
console.log("vv", tree.contains(10));

console.log(tree);

// console.log(tree.preOrder())
// console.log( tree.inOrder())
// console.log( tree.postOrder())
module.exports=BinarySearchTree;
