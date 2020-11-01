
let Node=require('./treeNode.js')
let BinaryTree=require('./BinaryTree.js')

describe("Binary tree", () => {
  let tree = null;
  beforeAll(() => {
    const one = new Node(1);
    const two = new Node(2);
    const three = new Node(3);
    const four = new Node(4);
    const five = new Node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    tree = new BinaryTree(one);
  });
  it("Can successfully find the max nuber in the tree ", () => {
   
    expect(tree.findmaximumvalue()).toEqual(5);
  });
});
