// let myDoublyLinkedList = {
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
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor(value){
    this.head = {
      value:value,
      next: null,
      prev:null
    }
    this.tail = this.head
    this.length = 1
  }
  
  append(value){
    let appendNode = new Node(value)
    appendNode.prev = this.tail
    this.tail.next = appendNode
    this.tail = appendNode
    this.length++
    return this
  }

  prepend(value){
    let prependNode = new Node(value)
    prependNode.next = this.head
    this.head.prev = prependNode
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
    const follower = leader.next
    leader.next = newNode
    newNode.prev = leader
    newNode.next = follower
    follower.prev = newNode
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
    this.length--
    this.printList()
  }
  
  reverse(){
    // only for single linked list
    if(!this.head.next){ return this.head}
    let first = this.head
    this.tail = this.head
    let second = first.next
    while(second){
      let next = second.next
      second.next = first
      first = second
      second = next
    }
    this.head.next = null
    this.head = first
    return this.printList()
  }
}

const myDoublyLinkedList = new DoublyLinkedList(10)

myDoublyLinkedList.append(1)
myDoublyLinkedList.append(2)
myDoublyLinkedList.prepend(3)
myDoublyLinkedList.insert(2,4)
myDoublyLinkedList.reverse()