let { Vertex, Edge, Graph } = require('./graph.js');

describe('Implement a Queue using two Stacks.', () => {
	it(' inserts value into the PseudoQueue, using a first-in, first-out approach. ', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addVertex(one);
		graph.addVertex(six);
		graph.addVertex(seven);
		graph.addVertex(eight);
		graph.addVertex(three);
		graph.addVertex(two);

		graph.addDirectedEdge(one, six);

		graph.addDirectedEdge(one, seven);

		graph.addDirectedEdge(one, eight);

		graph.addDirectedEdge(one, three);

		graph.addDirectedEdge(one, two);

		graph.addDirectedEdge(six, seven);
		graph.addDirectedEdge(seven, eight);
		graph.addDirectedEdge(eight, three);
		graph.addDirectedEdge(three, two);

		expect(graph.addVertex(one)).not.toEqual(null);
	});
});
