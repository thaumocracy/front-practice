class Graph {
  constructor(){
    this.numberOfNodes = 0
    this.adjacentList = {}
  }

  addVertex(node){
    this.adjacentList[node] = []
    this.numberOfNodes++
  }

  addEdge(node1,node2){
    this.adjacentList[node1].push(node2)
    this.adjacentList[node2].push(node1)
  }
  showConnections(){
    const allNodes = Object.keys(this.adjacentList)
    for(let node of allNodes){
      let nodeConnections = this.adjacentList[node]
      let connections = ''
      let vertex
      for(vertex of nodeConnections){
        connections += vertex + ' '
      }
      console.log(`${node} ==> ${connections}`)
    }
  }
}

const MyGraph = new Graph()
MyGraph.addVertex('0')
MyGraph.addVertex('1')
MyGraph.addVertex('2')
MyGraph.addVertex('3')
MyGraph.addVertex('4')
MyGraph.addVertex('5')
MyGraph.addVertex('6')
MyGraph.addEdge('3','1')
MyGraph.addEdge('3','4')
MyGraph.addEdge('4','2')
MyGraph.addEdge('4','5')
MyGraph.addEdge('1','2')
MyGraph.addEdge('1','0')
MyGraph.addEdge('0','2')
MyGraph.addEdge('6','5')

MyGraph.showConnections()