const LL = require('./linked-list');

describe('Linked List', () => {
  it('Constructor()', () => {
    const list = new LL();
    expect(list.head).toBeNull();
  });

  it('instantiate an empty linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    expect(list.head.value).toEqual(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    expect(list.head.value).toEqual(initValue);
    // console.log('The list', list);
    // list.insert('Dina');
    // expect(list.head.value).toEqual(initValue);
    // console.log('The list after adding Dina', list);
    let currentNode = list.head;

    // while (currentNode.next) {
    //   currentNode = currentNode.next;
    // }
    expect(currentNode.next).not.toBeNull();
  });
  it(' into the linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    expect(list.head.value).toEqual(initValue);
  });
  it('The head property point to the first node in the linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    expect(list.head.next).not.toBeNull();
  });
  it(' multiple nodes into the linked list', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    expect(list.head.next.next).not.toBeNull();
  });
  it(' return true when finding a value within the linked list that exists', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    expect(list.includes('omer')).toBeTruthy();
    expect(list.includes('omer1')).toBeFalsy();
  });
  it('return a collection of all the values that exist in the linked list', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    expect(list.toString()).toEqual(`{bayan}->{ahmad}->{omer}->{NULL}`);
  });
});
// RESULT B
describe('Linked List', () => {
  it('add a node to the end of the linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.append(newValue);
    expect(list.head.next.value).toEqual(newValue);
  });

  it('add multiple nodes to the end of a linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.append(newValue);
    const newValue1 = 'ahmad2';
    list.append(newValue1);

    expect(list.head.next.next.value).toEqual(newValue1);
  });
  it(' insert a node before a node located in the middle of a linked list', () => {
    const list = new LL();
    const initValue = 'mahmoud';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    list.insertbefore(newValue,'salma');
    expect(list.head.next.value).toEqual('salma');
  });
  it(' Can successfully insert a node before the first node of a linked list', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    // const newValue1 = 'omer';
    list.insertbefore('bayan', 'ahmad');
    expect(list.head.value).toEqual('ahmad');
  });
  it(' Can successfully insert after a node in the middle of the linked list', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    list.insertAfter(newValue, 'salma');
    expect(list.head.next.next.value).toEqual('salma');
  });
  it('Can successfully insert a node after the last node of the linked list', () => {
    const list = new LL();
    const initValue = 'bayan';
    list.insert(initValue);
    const newValue = 'ahmad';
    list.insert(newValue);
    const newValue1 = 'omer';
    list.insert(newValue1);
    list.insertAfter(newValue1,'salma');
    expect(list.head.next.next.next.value).toEqual('salma');
  });
});
