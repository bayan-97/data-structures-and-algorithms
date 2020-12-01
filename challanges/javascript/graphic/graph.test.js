/* eslint-disable indent */
let { Vertex, Edge, Graph } = require('./graph.js');

describe('Implement a Queue using two Stacks.', () => {
	it(' iNode can be successfully added to the graph ', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addNode(one);
		// graph.AddNode(six);
		// graph.AddNode(seven);
		// graph.AddNode(eight);
		// graph.AddNode(three);
		// graph.AddNode(two);

		// graph.AddEdge(one, six);

		// graph.AddEdge(one, seven);

		// graph.AddEdge(one, eight);

		// graph.AddEdge(one, three);

		// graph.AddEdge(one, two);

		// graph.AddEdge(six, seven);
		// graph.AddEdge(seven, eight);
		// graph.AddEdge(eight, three);
		// graph.AddEdge(three, two);

		expect(graph.getNodes(one)).toEqual([ { value: 1 } ]);
	});
	it('An edge can be successfully added to the graph ', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addNode(one);
		graph.addNode(six);
		// graph.AddNode(seven);
		// graph.AddNode(eight);
		// graph.AddNode(three);
		// graph.AddNode(two);

		graph.addEdge(one, six);

		// graph.AddEdge(one, seven);

		// graph.AddEdge(one, eight);

		// graph.AddEdge(one, three);

		// graph.AddEdge(one, two);

		// graph.AddEdge(six, seven);
		// graph.AddEdge(seven, eight);
		// graph.AddEdge(eight, three);
		// graph.AddEdge(three, two);

		expect(graph.getedje(one)).toEqual([ { vertex: { value: 6 }, weight: 0 } ]);
	});
	it('A collection of all nodes can be properly retrieved from the graph ', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addNode(one);
		graph.addNode(six);
		graph.addNode(seven);
		graph.addNode(eight);
		// graph.addNode(three);
		// graph.addNode(two);

		graph.addEdge(one, six);

		graph.addEdge(one, seven);

		graph.addEdge(one, eight);

		// graph.addEdge(one, three);

		// graph.addEdge(one, two);

		// graph.addEdge(six, seven);
		// graph.addEdge(seven, eight);
		// graph.addEdge(eight, three);
		// graph.addEdge(three, two);

		expect(graph.getedje(one)).toEqual([
			{ vertex: { value: 6 }, weight: 0 },
			{ vertex: { value: 7 }, weight: 0 },
			{ vertex: { value: 8 }, weight: 0 }
		]);
	});
	it('The proper size is returned, representing the number of nodes in the graph', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addNode(one);
		graph.addNode(six);
		graph.addNode(seven);
		graph.addNode(eight);
		// graph.addNode(three);
		// graph.addNode(two);

		graph.addEdge(one, six);

		graph.addEdge(one, seven);

		graph.addEdge(one, eight);

		// graph.addEdge(one, three);

		// graph.addEdge(one, two);

		// graph.addEdge(six, seven);
		// graph.addEdge(seven, eight);
		// graph.addEdge(eight, three);
		// graph.addEdge(three, two);

		expect(graph.sizeNode(one)).toEqual(4);
	});
	it('A collection of all nodes can be properly retrieved from the graph ', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		graph.addNode(one);
		graph.addNode(six);
		graph.addNode(seven);
		graph.addNode(eight);
		// graph.addNode(three);
		// graph.addNode(two);

		graph.addEdge(one, six);

		graph.addEdge(one, seven);

		graph.addEdge(one, eight);

		// graph.addEdge(one, three);

		// graph.addEdge(one, two);

		// graph.addEdge(six, seven);
		// graph.addEdge(seven, eight);
		// graph.addEdge(eight, three);
		// graph.addEdge(three, two);

		expect(graph.getedje(one)).toEqual([
			{ vertex: { value: 6 }, weight: 0 },
			{ vertex: { value: 7 }, weight: 0 },
			{ vertex: { value: 8 }, weight: 0 }
		]);
	});
	it('The proper size is returned, representing the number of nodes in the graph', () => {
		const graph = new Graph();

		const one = new Vertex(1);
		const six = new Vertex(6);
		const seven = new Vertex(7);
		const eight = new Vertex(8);
		const three = new Vertex(3);
		const two = new Vertex(2);

		// graph.addNode(one);
		// graph.addNode(six);
		// graph.addNode(seven);
		// graph.addNode(eight);
		// graph.addNode(three);
		// graph.addNode(two);

		// graph.addEdge(one, six);

		// graph.addEdge(one, seven);

		// graph.addEdge(one, eight);

		// graph.addEdge(one, three);

		// graph.addEdge(one, two);

		// graph.addEdge(six, seven);
		// graph.addEdge(seven, eight);
		// graph.addEdge(eight, three);
		// graph.addEdge(three, two);

		expect(graph.getNodes(one)).toEqual(null);
	});
});
