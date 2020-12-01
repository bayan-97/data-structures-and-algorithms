/* eslint-disable indent */
class Vertex {
	constructor(value) {
		this.value = value;
	}
}

class Edge {
	constructor(vertex, weight) {
		this.vertex = vertex;
		this.weight = weight;
	}
}

class Graph {
	constructor() {
		this.adjacencyList = new Map();
		// eslint-disable-next-line indent
		this.size = 0;
	}
	sizeNode() {
		return this.adjacencyList.size;
	}
	addNode(vertex) {
		this.adjacencyList.set(vertex, []);
		this.size = this.size + 1;
	}
	addEdge(startVertex, endVertex, weight = 0) {
		if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
			throw new Error('Invalid Vertex!!!');
		}
		const list = this.adjacencyList.get(startVertex);
		list.push(new Edge(endVertex, weight));
	}

	getNodes() {
		const nodes = [];
		for (const [ vertex ] of this.adjacencyList.entries()) {
			nodes.push(vertex);
		}

		if (nodes.length == 0) {
			return null;
		}
		return nodes;
	}

	getedje(vertex) {
		if (!this.adjacencyList.has(vertex)) {
			throw new Error('Invalid Vertex!!!');
		}
		const neighbors = this.adjacencyList.get(vertex);
		return neighbors;
	}
}

// const graph = new Graph();

// const one = new Vertex(1);
// const six = new Vertex(6);
// const seven = new Vertex(7);
// const eight = new Vertex(8);
// const three = new Vertex(3);
// const two = new Vertex(2);

// graph.addVertex(one);
// graph.addVertex(six);
// graph.addVertex(seven);
// graph.addVertex(eight);
// graph.addVertex(three);
// graph.addVertex(two);

// graph.addDirectedEdge(one, six);

// graph.addDirectedEdge(one, seven);

// graph.addDirectedEdge(one, eight);

// graph.addDirectedEdge(one, three);

// graph.addDirectedEdge(one, two);

// graph.addDirectedEdge(six, seven);
// graph.addDirectedEdge(seven, eight);
// graph.addDirectedEdge(eight, three);
// graph.addDirectedEdge(three, two);
// console.log(graph);
// graph.printAll();
module.exports = { Vertex, Edge, Graph };
