const array1 = ['a','b','c','x']
const array2 = ['q','w','e','z']
const array3 = ['a','b','c','x']
const array4 = ['f','w','h','x']


const containsCommonItem = (firstData,secondData) => {
  for(let i = 0; i < firstData.length;i++){
    for(let j = 0; j < secondData.length; j++){
      if(firstData[i] === secondData[j]){ return true}
    }
  }
  return false
}

const containsCommonHashedItem = (firstData,secondData) => {
  let hash = {}
  for(let i = 0; i < firstData.length;i++){
    hash[firstData[i]] = true
  }
  for(let i = 0; i < secondData.length;i++){
    if(hash[secondData[i]]){return true}
  }
  return false
}

const containsSomeCommonItem = (firstData,secondData) => {
  return firstData.some(item => secondData.includes(item))
}

console.log(containsCommonItem(array1,array2),`Should be false [For Loop]`)
console.log(containsCommonItem(array3,array4),`Should be true [For Loop]`)

console.log(containsCommonHashedItem(array1,array2),`Should be false [Hash]`)
console.log(containsCommonHashedItem(array3,array4),`Should be true [Hash]`)

console.log(containsSomeCommonItem(array1,array2),`Should be false [Some in-built]`)
console.log(containsSomeCommonItem(array3,array4),`Should be true [Some in-built]`)