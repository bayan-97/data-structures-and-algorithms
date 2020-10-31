const BinaryTree = require('./tree.js');
const BinarySearch = require('./treeSearch.js');
const Node = require('./treeNode.js');


describe('Binary Sesrch', () => {
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
  it('Can successfully instantiate an empty tree', () => {
    const tree2 = new BinaryTree();
    expect(tree2.root).toEqual(null);
  });
  it('preorder()', () => {
    const expected = [1, 2, 4, 5, 3];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('inOrder()', () => {
    const expected = [4, 2, 5, 1, 3];
    const preOrder = tree.inOrder();
    expect(preOrder).toEqual(expected);
  });
  it('postOrder()', () => {
    const expected = [4, 5, 2, 3, 1];
    const preOrder = tree.postOrder();
    expect(preOrder).toEqual(expected);
  });
});
describe('Binary Search', () => {
  it('Can successfully instantiate a tree with a single root node', () => {
    let tree3 = new BinarySearch();
    tree3.add(3);
    expect(tree3.root.value).toEqual(3);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree3 = new BinarySearch();
    tree3.add(3);
    tree3.add(4);
    expect(tree3.root.right.value).toEqual(4);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    let tree3 = new BinarySearch();
    tree3.add(3);
    tree3.add(4);
    tree3.contains(4);

    expect(tree3.contains(4)).toBeTruthy();
    expect(tree3.contains(3)).toBeTruthy();

  });
});
