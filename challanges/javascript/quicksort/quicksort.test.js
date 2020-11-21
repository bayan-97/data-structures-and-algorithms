let quicksort = require('./quicksort.js');

describe('Testing challenge InsertionSort', () => {
	it(' return sort   array ', () => {
		expect(quicksort([ 8, 4, 23, 42, 16, 15 ], 0, [ 8, 4, 23, 42, 16, 15 ].length - 1)).toEqual([
			4,
			8,
			15,
			16,
			23,
			42
		]);
	});
});
