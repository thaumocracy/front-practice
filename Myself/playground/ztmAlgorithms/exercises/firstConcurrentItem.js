const findRecurringItem = (array) => {
  let hash = {}
  for(let i = 0; i < array.length;i++){
    if(hash[array[i]] === true){return array[i]}
    else {hash[array[i]] = true}
  }
  return undefined
}

console.log(findRecurringItem([1,3,3,4,5,6,7,8,9]),'Should return 3')
console.log(findRecurringItem([1,2,3,4,5,6,7,8,9]),'Should return undefined')
console.log(findRecurringItem([1,2,3,4,5,5,7,8,9]),'Should return 5')
console.log(findRecurringItem([1,1,3,4,5,6,7,9,9]),'Should return 1')
console.log(findRecurringItem([1,2,3,4,5,6,7,8,9]),'Should return undefined')
console.log(findRecurringItem([1,2,3,4,5,6,7,9,9]),'Should return 9')
console.log(findRecurringItem([1,2,2,1,5,6,7,9,9]),'Should return 2')
console.log(findRecurringItem(['a','butt','c','d','butt','c','d',9,9]),'Should return butt')