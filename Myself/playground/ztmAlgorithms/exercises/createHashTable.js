class HashTable {
  constructor(size){
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for(let i = 0 ; i < key.length;i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  
  set(key,value){
    let address = this._hash(key)
    if(!this.data[address]){
      this.data[address] = []
    }
    this.data[address].push([key,value])
    return this.data
  }

  get(key){
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if(currentBucket){
      for(let i=0;i<currentBucket.length;i++){
        if(currentBucket[i][0] === key){
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }

  keys(){
    const keysArray = []
    for(let i = 0 ; i < this.data.length; i++){
      if(this.data[i]){keysArray.push(this.data[i][0][0])}
    }
    return keysArray
  }
}


const myHashTable = new HashTable(50)
myHashTable.set('item',5555)
myHashTable.set('second',2)
myHashTable.set('third',3)
myHashTable.set('fourth',4)
myHashTable.set('fifth',5)
// console.log(myHashTable.get('second'))
console.log(myHashTable.keys())