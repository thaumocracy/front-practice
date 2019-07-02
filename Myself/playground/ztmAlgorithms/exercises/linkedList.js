// let myLinkedList = {
//   head: {
//     value: 10,
//     next: {
//       value:5,
//       next: {
//         value:16,
//         next:null
//       }
//     }
//   }
// }
class Node {
  constructor(value){
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor(value){
    this.head = {
      value:value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }
  
  append(value){
    let appendNode = new Node(value)
    this.tail.next = appendNode
    this.tail = appendNode
    this.length++
    return this
  }

  prepend(value){
    let prependNode = new Node(value)
    prependNode.next = this.head
    this.head = prependNode
    this.length++
    return this
  }

  printList(){
    const array = []
    let currentNode = this.head
    while(currentNode !== null){
      array.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(array)
    return array
  }

  insert(index,value){
    if(index >= this.length){return this.append(value)}
    let newNode = new Node(value)
    const leader = this.traverseToIndex(index - 1)
    const previousPointer = leader.next
    leader.next = newNode
    newNode.next = previousPointer
    this.length++
    return this.printList()
  }

  traverseToIndex(index){
    let counter = 0
    let currentNode = this.head
    while(counter !== index){
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }

  delete(index){
    if(this.length <= index){index = this.length - 1}
    const leader = this.traverseToIndex(index - 1)
    const follower = this.traverseToIndex(index + 1)
    leader.next = follower
    this.printList()
  }
}

const myLinkedList = new LinkedList(10)

myLinkedList.append(5)
myLinkedList.prepend(3)
myLinkedList.insert(1,4)
myLinkedList.delete(899)