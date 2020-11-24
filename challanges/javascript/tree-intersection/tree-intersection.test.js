/* eslint-disable indent */
let solve = require('./tree-intersection.js');
let { tree1, tree2 } = require('./trees.js');

describe('Implement first word reapeated', () => {
	it(' return a ', () => {
		solve(tree1, tree2);

		expect(solve(tree1, tree2)).toEqual([ 100, 200, 350, 500, 160, 125, 175 ]);
	});
	// it('return it', () => {
	// 	let str =
	// 		'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only...';
	// 	repeated(str);

	// 	expect(repeated(str)).toEqual('it');
	// });
});
