let Node=require('./TreeNode.js')
let BinaryTree=require('./BinaryTree2.js')

describe("Binary tree", () => {
  let tree = null;
  beforeAll(() => {
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
  });
  it("Can successfullyreturn a list of the values in the tree in the order they were encountered.", () => {
   
    expect(tree.breadth()).toEqual([ 2, 7, 5, 6, 9 ]);
  });
});
