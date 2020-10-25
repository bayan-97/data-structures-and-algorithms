let PseudoQueue = require('./queue-with-stacks.js');
let Stack = require('../stacksAndQueues/stacks.js');

describe('Implement a Queue using two Stacks.', () => {
  it(' inserts value into the PseudoQueue, using a first-in, first-out approach. ', () => {
    const ll = new Stack();
    ll.push(20);
    ll.push(15);
    ll.push(10);
    let ll2 = new PseudoQueue(ll);
    ll2.enqueue(5);

    expect(ll2.enqueue(5).node.value).toEqual(5);
  });
  it('with out inserts value into the PseudoQueue, using a first-in, first-out approach. ', () => {
    const ll = new Stack();
    ll.push(20);
    ll.push(15);
    ll.push(10);
    let ll2 = new PseudoQueue();
    ll2.enqueue(5);
    expect(ll2.enqueue(5).node.value).toEqual(5);
  });
  it('dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out ', () => {
    const ll = new Stack();
    ll.push(20);
    ll.push(15);
    ll.push(10);
    let ll2 = new PseudoQueue(ll);
    ll2.enqueue(5);
    expect(ll2.dequeue()).toEqual(20);
    expect(ll2.dequeue()).toEqual(15);
  });
});
