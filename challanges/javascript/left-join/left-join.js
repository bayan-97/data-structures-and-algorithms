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

	prepend(value) {
		const node = new Node(value);
		if (!this.head) {
			this.head = node;
		} else {
			node.next = this.head;
			this.head = node;
		}
		return this.head;
	}
}

class HashMap {
	constructor(size) {
		this.size = size;
		this.storage = new Array(size);
	}

	hash(key) {
		const sumCharCode = key.split('').reduce((acc, char) => {
			return acc + char.charCodeAt(0);
		}, 0);
		const hashKey = (sumCharCode * 19) % this.size;
		return hashKey;
	}

	add(key, value) {
		const index = this.hash(key);

		if (!this.storage[index]) {
			const ll = new LinkedList();
			ll.prepend({ [key]: value });
			this.storage[index] = ll;
		} else {
			this.storage[index].prepend({ [key]: value });
		}
	}

	contains(key) {
		const index = this.hash(key);
		return this.storage[index] ? true : false;
	}

	get(key) {
		const index = this.hash(key);
		let currentNode;
		this.storage[index] ? (currentNode = this.storage[index].head) : (currentNode = null);

		if (!currentNode) {
			return null;
		}

		while (currentNode) {
			const obj = Object.keys(currentNode.value);

			if (obj[0] == key) {
				return currentNode.value[key];
			} else {
				currentNode = currentNode.next;
			}
		}
		return null;
	}
}

function leftJoin(leftHash, rightHash) {
	let results = [];

	for (const [ key, value ] of Object.entries(leftHash)) {
		let keyNames = Object.keys(value.head.value);
		let leftValues = Object.values(value.head.value);
		let rightValue = key in rightHash ? Object.values(rightHash[key].head.value) : null;
		console.log(value, key);

		results.push([ keyNames[0], leftValues[0], rightValue ? rightValue[0] : null ]);
	}
	return results;
}

// const hashmapA = new HashMap(20);
// hashmapA.add('name', 'bayan');
// hashmapA.add('email', '@b');
// hashmapA.add('password', '14');

// const hashmapB = new HashMap(20);
// hashmapB.add('name', 'anas');
// hashmapB.add('email', '@a');

// console.log(leftJoin(hashmapA.storage, hashmapB.storage));
module.exports = { HashMap, leftJoin };
