let HashMap = require('./hashtable');

describe('Implement a Queue using two Stacks.', () => {
	it(' inserts value into the PseudoQueue, using a first-in, first-out approach. ', () => {
		const hashmap = new HashMap(4000);
		hashmap.set('name', 'mahmoud');
		// hashmap.set('one', 'thing');
		// hashmap.set('eno', '1');
		// hashmap.set('neo', '2');
		// hashmap.set('this', 'nothing');
		// console.log(hashmap.storage);

		expect(hashmap.get('name')).toEqual('mahmoud');
	});
	it('Retrieving based on a key returns the value stored', () => {
		const hashmap = new HashMap(4000);
		hashmap.set('name', 'mahmoud');
		// hashmap.set('one', 'thing');
		// hashmap.set('eno', '1');
		// hashmap.set('neo', '2');
		// hashmap.set('this', 'nothing');
		// console.log(hashmap.storage);
		expect(hashmap.get('name')).toEqual('mahmoud');
	});
	it('Successfully returns null for a key that does not exist in the hashtable', () => {
		const hashmap = new HashMap(4000);
		hashmap.set('name', 'mahmoud');
		// hashmap.set('one', 'thing');
		// hashmap.set('eno', '1');
		// hashmap.set('neo', '2');
		// hashmap.set('this', 'nothing');
		// console.log(hashmap.storage);
		expect(hashmap.contain('nameee')).toEqual(-1);
	});
	it('Successfully retrieve a value from a bucket within the hashtable that has a collision	', () => {
		const hashmap = new HashMap(4000);
		hashmap.set('name', 'mahmoud');
		hashmap.set('one', 'thing');
		hashmap.set('eno', '1');
		hashmap.set('neo', '2');
		// hashmap.set('this', 'nothing');
		// console.log(hashmap.storage);
		expect(hashmap.get('one')).toEqual('thing');
		expect(hashmap.get('eno')).toEqual('1');
	});
	it('Successfully handle a collision within the hashtable	', () => {
		const hashmap = new HashMap(4000);
		hashmap.set('name', 'mahmoud');
		hashmap.set('one', 'thing');
		hashmap.set('eno', '1');
		hashmap.set('neo', '2');
		// hashmap.set('this', 'nothing');
		// console.log(hashmap.storage);
		expect(hashmap.hash('one')).toEqual(2118);
	});
});
