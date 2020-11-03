function FizzBuzzTree(tree) {
  // let result = false;
  if (tree.root.value % 3 == 0 && tree.root.value % 5 == 0) {
    tree.root.value = "FizzBuzz";
  } else if (tree.root.value % 3 == 0) {
    tree.root.value = "Fizz";
  } else if (tree.root.value % 5 == 0) {
    tree.root.value = "Buzz";
  } else {
    tree.root.value = `${tree.root.value}`;
  }
  const _walk = (node) => {
    // console.log(node)
    if (node.left) {
      if (node.left.value % 3 == 0 && node.left.value % 5 == 0) {
        node.left.value = "FizzBuzz";
      } else if (node.left.value % 3 == 0) {
        node.left.value = "Fizz";
      } else if (node.left.value % 5 == 0) {
        node.left.value = "Buzz";
      } else {
        node.left.value = `${node.left.value}`;
      }
      _walk(node.left);
    }
    if (node.right) {
      //  console.log(node.right)
      if (node.right.value % 3 == 0 && node.right.value % 5 == 0) {
        node.right.value = "FizzBuzz";
      } else if (node.right.value % 3 == 0) {
        node.right.value = "Fizz";
      } else if (node.right.value % 5 == 0) {
        node.right.value = "Buzz";
      } else {
        node.right.value = `${node.right.value}`;
      }
      _walk(node.right);
    }
    //  result=false
    // console.log("jj",result)
    return;
    // if (result == 0) {
    //   return result;
    // }
    // results.push(node.value);
  };

  _walk(tree.root);
  return tree;
}
module.exports = FizzBuzzTree;
