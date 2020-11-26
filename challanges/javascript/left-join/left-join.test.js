let { HashMap, leftJoin } = require('./left-join');

describe('Implement a Queue using two Stacks.', () => {
	it(' inserts value into the PseudoQueue, using a first-in, first-out approach. ', () => {
		const hashmap1 = new HashMap(20);
		hashmap1.add('name', 'bayan');
		hashmap1.add('email', '@b');
		hashmap1.add('password', '14');

		const hashmap2 = new HashMap(20);
		hashmap2.add('name', 'anas');
		hashmap2.add('email', '@a');

		expect(leftJoin(hashmap1.storage, hashmap2.storage)).toEqual([
			[ 'email', '@b', '@a' ],
			[ 'name', 'bayan', 'anas' ],
			[ 'password', '14', null ]
		]);
	});
});
