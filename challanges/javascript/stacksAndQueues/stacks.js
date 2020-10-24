class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(value) {
    if (this.isEmpty()) {
      return (this.top = new Node(value));
    }
    let top = new Node(value);
    top.next = this.top;
    this.top = top;
    return this;
  }
  pop() {
    if (this.isEmpty()) {
      return 'stack is empty';
    }
    let term = this.top;
    this.top = term.next;
    term.next = null;
    return this;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.top.value;
    } else {
      return 'stack is empty';
    }
  }
  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }
}


// const ll = new Queue();
// console.log('this is my List:', ll.peek());
// console.log('this is my Lddist:', ll.isEmpty());
// // console.log('this is my List:', ll.peek());
// console.log('this is my List:', ll.enqueue(1));
// console.log('this is my List:', ll.enqueue(2));
// console.log('this is my List:', ll.enqueue(3));
// const ll1 = new Stack();
// console.log('this is my List:', ll1.peek());
// console.log('this is my List:', ll1.push(1));
// console.log('this is my List:', ll1.push(2));
// console.log('this is my List:', ll1.push(3));

// console.log('this is my Lddist:', ll1.isEmpty());
// // console.log('this is my List:', ll.push(3));

// console.log('this is my List:', ll1);

module.exports = Stack;
