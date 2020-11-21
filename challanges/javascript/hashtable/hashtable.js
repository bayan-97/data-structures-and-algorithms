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
	append(value) {
		let node = new Node(value);
		if (!this.head) {
			this.head = node;
			return this;
		}

		node.next = this.head;
		this.head = node;

		return this;
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
		console.log(sumCharCode);
		// we need to * by a prime number
		// we need to % size to stay in bound
		const hashKey = (sumCharCode * 19) % this.size;
		return hashKey;
	}

	set(key, value) {
		// we need an index to put the value at
		const index = this.hash(key);

		// we need to check if there is already a value at index
		if (!this.storage[index]) {
			const ll = new LinkedList();
			ll.append({ [key]: value });
			this.storage[index] = ll;
			console.log('cc', this.storage[index].head.value);
		} else {
			// we already have a value at this index
			this.storage[index].append({ [key]: value });
		}
	}
	get(key) {
		// we need an index to put the value at
		const index = this.hash(key);
		let current = this.storage[index].head;
		if (this.storage[index].head.next) {
			while (current.next) {
				if (current.next.value[key]) {
					return current.next.value[key];
				}

				current = current.next;
			}
			if (current.value[key]) {
				return current.value[key];
			}
			if (this.storage[index].head.value[key]) {
				return current.value[key];
			}
			return this.storage[index].head.value[key];
		} else {
			return this.storage[index].head.value[key];
		}
	}
	contain(key) {
		// we need an index to put the value at
		const index = this.hash(key);

		if (this.storage[index]) {
			return 1;
		} else {
			return -1;
		}
	}
}
// const hashmap = new HashMap(4000);
// hashmap.set("name", "mahmoud");
// hashmap.set("one", "thing");
// hashmap.set("eno", "1");
// hashmap.set("neo", "2");
// hashmap.set("this", "nothing");
// console.log(hashmap.storage);

module.exports = HashMap;
