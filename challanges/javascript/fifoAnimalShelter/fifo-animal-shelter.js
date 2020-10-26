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
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class AnimalShelter {
  constructor() {
    this.node = null;
  }
  enqueue(value) {
    if (!this.node) {
      if (
        new Node(value).value.kined == 'cat' ||
        new Node(value).value.kined == 'dog'
      ) {
        return (this.node = new Node(value));
      } else {
        return 'sorry itsnot dog or cat';
      }
    }
    if (
      new Node(value).value.kined == 'cat' ||
      new Node(value).value.kined == 'dog'
    ) {
      let top = new Node(value);
      console.log('vvvv', top);
      top.next = this.node;
      this.node = top;
      console.log('DD', this.node);

      return this;
    } else {
      return 'sorry itsnot dog or cat';
    }
  }
  dequeue(pref) {
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
}

module.exports=AnimalShelter;
