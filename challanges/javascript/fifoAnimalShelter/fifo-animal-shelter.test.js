let AnimalShelter = require('./fifo-animal-shelter.js');

class Cat {
  constructor(value) {
    this.kined = 'cat';
    this.name = value;
  }
}
class Dog {
  constructor(value) {
    this.kined = 'dog';
    this.name = value;
  }
}
describe('nnn', () => {
  it(' inserts value into the AnimalShelter, using a first-in, first-out approach. ', () => {
    let ll2 = new AnimalShelter();
    ll2.enqueue(new Cat('bayan1'));
    expect(ll2.node.value.kined).toEqual('cat');
  });
  it('with out inserts value into the AnimalShelter, using a first-in, first-out approach. ', () => {
    let ll2 = new AnimalShelter();
    ll2.enqueue(new Cat('bayan1'));
    ll2.enqueue(new Dog('bayan1'));
    expect(ll2.node.value.kined).toEqual('dog');
  });
  it('dequeue() which extracts a value from the AnimalShelter, using a first-in, first-out ', () => {
    let ll2 = new AnimalShelter();
    ll2.enqueue(new Cat('bayan1'));
    ll2.enqueue(new Dog('bayan2'));

    expect(ll2.dequeue().kined).toEqual('cat');
  });
});
