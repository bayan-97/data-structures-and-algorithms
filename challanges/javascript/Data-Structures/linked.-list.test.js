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
