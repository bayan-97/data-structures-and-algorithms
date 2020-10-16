'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(value) {
    const node = new Node(value);
    /*
      node =  {
          value:value,
          next:null
        }
      */
    if (!this.head) {
      // only if the head is null
      this.head = node;
      return this;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;
  }
  includes(valuexist) {
    console.log(valuexist);
    console.log('lll', this.head.value);
    if (this.head.value === valuexist) {
      return 1;
    }

    console.log(this.head.next.value);
    let currentvalue = this.head.next;
    while (currentvalue !== undefined) {
      // console.log('lll1',currentvalue);
      //   currentvalue = currentvalue.value;
      if (currentvalue.value === valuexist) {
        return true;
      } else if (currentvalue.next === null) {
        return false;
      }
      currentvalue = currentvalue.next;
      console.log('lll1', currentvalue);
    }
    // return 0;
  }
  toString() {
    let stringsValue = [];
    let currentvalue = this.head;
    stringsValue.push(this.head.value);
    while (currentvalue.next !== null) {
      currentvalue = currentvalue.next;
      console.log(currentvalue);
      stringsValue.push(currentvalue.value);
    }
    let allValues;
    for (let index = 0; index < stringsValue.length; index++) {
      if (index === 0) {
        allValues = `{${stringsValue[index]}}->`;
      } else {
        allValues = allValues + `{${stringsValue[index]}}->`;
      }
    }
    allValues = allValues + `{NULL}`;
    return allValues;
  }
}
// const ll = new LinkedList();
// console.log('this is my List:', ll);
// ll.insert(4);
// console.log('After insert', ll);
// ll.insert(5);
// ll.insert(7);
// console.log('After insert', ll);
// console.log('After insert', ll.toString());

module.exports= LinkedList;
