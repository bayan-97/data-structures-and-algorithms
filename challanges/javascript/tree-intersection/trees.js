class Node1 {
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
}

const one1 = new Node1(150);
const two1 = new Node1(100);
const three1 = new Node1(250);
const four1 = new Node1(200);
const five1 = new Node1(350);
const six1 = new Node1(500);
const seven1 = new Node1(300);
const seven21 = new Node1(160);
const seven31 = new Node1(75);
const seven41 = new Node1(175);
const seven51 = new Node1(125);
one1.left = two1;
one1.right = three1;
two1.left = four1;
two1.right = five1;
five1.right = six1;
five1.left = seven1;
three1.right = seven21;
three1.left = seven31;
seven21.right = seven41;
seven21.left = seven51;
let tree1 = new BinaryTree(one1);
console.log(tree1);
const one = new Node1(42);
const two = new Node1(100);
const three = new Node1(600);
const four = new Node1(200);
const five = new Node1(350);
const six = new Node1(500);
const seven = new Node1(4);
const seven2 = new Node1(160);
const seven3 = new Node1(15);
const seven4 = new Node1(175);
const seven5 = new Node1(125);
one.left = two;
one.right = three;
two.left = four;
two.right = five;
five.right = six;
five.left = seven;
three.right = seven2;
three.left = seven3;
seven2.right = seven4;
seven2.left = seven5;
let tree2 = new BinaryTree(one);
console.log(tree2);
module.exports = { tree1, tree2 };
