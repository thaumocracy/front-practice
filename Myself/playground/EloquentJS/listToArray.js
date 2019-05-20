const arrayToList = require('./arrayToList')

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value)
  }
  return array;
}

console.log(listToArray(arrayToList([1,2,3,4,5])))