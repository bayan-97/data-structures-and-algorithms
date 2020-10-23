"use strict";

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
    console.log("lll", this.head.value);
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
      console.log("lll1", currentvalue);
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
  append(value) {
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
  insertbefore(value, newVal) {
    if (this.head.value === value) {
      let afterRes = this.head;
      console.log("lll", this.head);
      this.head.next = JSON.stringify(afterRes);
      this.head.next = JSON.parse(this.head.next);
      this.head.value = newVal;

      return this;
    }

    let currentvalue = this.head.next;
    while (currentvalue !== undefined) {
      if (currentvalue.value === value) {
        let afterRes = currentvalue;
        currentvalue.next = JSON.stringify(afterRes);
        currentvalue.next = JSON.parse(currentvalue.next);
        currentvalue.value = newVal;
        return this;
      } else {
        currentvalue = currentvalue.next;
        if (currentvalue === null) {
          return "dont exist the value which insert";
        }
      }
    }
  }
  insertAfter(value, newVal) {
    if (this.head.value === value) {
      let afterRes = this.head.next;
      this.head.next.next = JSON.stringify(afterRes);
      this.head.next.next = JSON.parse(this.head.next.next);
      this.head.next.value = newVal;

      return this;
    }

    let currentvalue = this.head.next;
    while (currentvalue !== undefined) {
      if (currentvalue.value === value) {
        if (currentvalue.next !== null) {
          let afterRes = currentvalue.next;
          currentvalue.next.next = JSON.stringify(afterRes);
          currentvalue.next.next = JSON.parse(currentvalue.next.next);
          currentvalue.next.value = newVal;
          return this;
        } else if (currentvalue.next === null) {
          return this.append(newVal);
        }
      } else {
        currentvalue = currentvalue.next;
        if (currentvalue === null) {
          return "dont exist the value which insert";
        }
      }
    }
  }
  end(k) {
    if (k < 0) {
      let stringsValue = [];
      let currentvalue = this.head;
      stringsValue.push(this.head.value);
      while (currentvalue.next !== null) {
        currentvalue = currentvalue.next;
        console.log(currentvalue);
        stringsValue.push(currentvalue.value);
      }
      return stringsValue[k * -1];
    }
    let stringsValue = [];
    let currentvalue = this.head;
    stringsValue.push(this.head.value);
    while (currentvalue.next !== null) {
      currentvalue = currentvalue.next;
      console.log(currentvalue);
      stringsValue.push(currentvalue.value);
    }
    console.log(stringsValue);
    let stringsValueRev = [];
    let stringsValuelength = stringsValue.length - 1;
    for (let index = 0; index < stringsValue.length; index++) {
      stringsValueRev.push(stringsValue[stringsValuelength]);
      stringsValuelength = stringsValuelength - 1;
    }
    console.log(stringsValueRev);
    if (stringsValueRev[k] !== undefined) {
      return stringsValueRev[k];
    } else {
      return "it isnot exiest in linklist";
    }
  }
  lin(an, bn) {
    let array = [];

    let currentvalue = an.head;
    let currentvalue2 = bn.head;

    while (currentvalue.next) {
      array.push(currentvalue.value);
      currentvalue = currentvalue.next;
    }
    array.push(currentvalue.value);
    console.log("d", array);
    for (let index = 0; index < array.length - 1; index++) {
      while (currentvalue2.next) {
        //  console.log(index,array[index++], currentvalue2.value)

        an.insertAfter(array[index++], currentvalue2.value);

        currentvalue2 = currentvalue2.next;
      }
      an.insertAfter(array[index], currentvalue2.value);
    }

    console.log("ccg", an.toString());

    if (!currentvalue2.next) {
      an.insert(currentvalue2.value);
    }

    console.log("ccg22", an.toString());
    return an;
  }
}
const ll = new LinkedList();
console.log("this is my List:", ll);
ll.insert(1);
console.log("After insert", ll);
ll.insert(3);
ll.insert(3);
// ll.insert(2);

console.log("After inserbbbt", ll);
console.log("After insert", ll.toString());
const ll2 = new LinkedList();
console.log("this is my List:", ll2);
ll2.insert(5);
console.log("After insert", ll2);
ll2.insert(9);
ll2.insert(1);

console.log("After inserbbbt", ll2);
console.log("After insert", ll2.toString());
console.log("After insevvvrt", ll2.lin(ll, ll2).toString());
console.log("After insert", ll.toString());

module.exports = LinkedList;
