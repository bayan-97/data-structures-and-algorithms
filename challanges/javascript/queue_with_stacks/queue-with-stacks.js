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

    return currentvalue.value;
  }

module.exports=PseudoQueue;
