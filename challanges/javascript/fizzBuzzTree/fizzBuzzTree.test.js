let Node=require('./Node.js')
let BinaryTree=require('./trees.js')
let fizzBuzzTree=require('./fizzBuzzTree.js')



describe("Binary tree", () => {
  let tree = null;
  beforeAll(() => {
    const one = new Node(3);
    const two = new Node(5);
    const three = new Node(15);
    const four = new Node(7);
    const five = new Node(9);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    tree = new BinaryTree(one);
  });
  it("If the value is divisible by 3, replace the value with “Fizz”", () => {
   
    expect(fizzBuzzTree(tree).root.value).toEqual('Fizz');
  });
  it("If the value is divisible by 5, replace the value with “Buzz”", () => {
   
    expect(fizzBuzzTree(tree).root.left.value).toEqual('Buzz');
  });
  it("If the value is divisible by 3 and 5, replace the value with “FizzBuzz””", () => {
   
    expect(fizzBuzzTree(tree).root.right.value).toEqual('FizzBuzz');
  });
  it("If the value is not divisible by 3 or 5, simply turn the number into a String””", () => {
   
    expect(fizzBuzzTree(tree).root.left.left.value).toEqual('7');
  });
});
