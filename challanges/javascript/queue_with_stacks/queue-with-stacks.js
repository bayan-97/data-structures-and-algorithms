let Stack = require('../stacksAndQueues/stacks.js');

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class PseudoQueue {
  constructor(value) {
    if (value) {
      this.node = value.top;
    } else {
      this.node = null;
    }
  }
  enqueue(value) {
    if (!this.node) {
      return (this.node = new Node(value));
    }
    let top = new Node(value);
    console.log('vvvv', this.top);
    top.next = this.node;
    this.node = top;
    console.log('DD', this.node);

    // let currentvalue = this.node.top;
    // while (currentvalue.next) {
    //   currentvalue = currentvalue.next;
    // }
    // currentvalue.next = new Node(value);
    return this;
  }
  dequeue() {
    let previescure;
    let currentvalue = this.node;
    while (currentvalue.next) {
      if (!currentvalue.next.next) {
        previescure = currentvalue;
        console.log('nn', previescure);
        currentvalue = currentvalue.next;
      } else {
        currentvalue = currentvalue.next;
      }
    }
    let term = previescure;
    term.next = null;

    // this.node=term
    // this.node  = ;
    // term.next = null;
    return currentvalue.value;
  }
}
// const ll = new Stack();
// ll.push(20);
// ll.push(15);
// ll.push(10);
// const ll2 = new PseudoQueue(ll);
// ll2.enqueue(5);
module.exports=PseudoQueue;
