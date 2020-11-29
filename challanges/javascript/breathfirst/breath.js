
let { Quee } = require('../stacksAndQueues/queues.js');
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
		this.size = 0;
	}
	sizeNode() {
		return this.size;
	}
	AddNode(vertex) {
		this.adjacencyList.set(vertex, []);
		this.size = this.size + 1;
	}
	AddEdge(startVertex, endVertex, weight = 0) {
		if (!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)) {
			throw new Error('Invalid Vertex!!!');
		}
		const list = this.adjacencyList.get(startVertex);
		list.push(new Edge(endVertex, weight));
	}

	GetNodes() {
		for (const [ vertex, edge ] of this.adjacencyList.entries()) {
			return vertex;
		}
	}
	Getedje() {
		for (const [ vertex, edge ] of this.adjacencyList.entries()) {
			return edge;
		}
    }
    breathFirst(vertex){
    let nodes =  new Map()
    let  breadth = new Quee()
    breadth.enqueue(vertex)

    while (breadth.isEmpty()){

        let front = breadth.dequeue()
        nodes.set(front)
        front.Children.forEach(child => {
            if(child.Visited==false){
    
                child.Visited = true
                breadth.enqueue(child)  
            }
            
    }
    });
   
            

    return nodes;
    }
}

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
console.log(graph);
graph.printAll();
module.exports = { Vertex, Edge, Graph };
