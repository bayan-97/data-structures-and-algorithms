/* eslint-disable indent */
function solve(tree1, tree2) {
	let treearr1 = [];
	let treearr2 = [];
	let res = [];
	const _walk = (node1, node2) => {
		treearr1.push(node1.value);
		treearr2.push(node2.value);

		if (node1.left && node2.left) _walk(node1.left, node2.left);
		if (node1.right && node2.right) _walk(node1.right, node2.right);
	};

	_walk(tree1.root, tree2.root);

	for (let i = 0; i < treearr1.length; i++) {
		if (treearr1.includes(treearr2[i])) {
			res.push(treearr1[i]);
		}
	}

	return res;
}
module.exports = solve;
