class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.front = null;
  }
  enqueue(value) {
    if (this.isEmpty()) {
      return (this.front = new Node(value));
    }
    let currentvalue = this.front;

    while (currentvalue.next) {
      currentvalue = currentvalue.next;
    }
    currentvalue.next = new Node(value);
    return this;
  }
  dequeue() {
    if (this.isEmpty()) {
      return 'Queue is empty';
    }
    let term = this.front;
    this.front = term.next;
    term.next = null;
    return this;
  }
  peek() {
    if (!this.isEmpty()) {
      return this.front.value;
    } else {
      return 'Queue is empty';
    }
  }
  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }
}
module.exports = Queue;
