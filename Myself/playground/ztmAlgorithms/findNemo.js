//O(n) example

const {performance} = require('perf_hooks')
let nemo = ['string','string','string','string','nemo','string','string',]

const findNemo = (array) => {
  const t1 = performance.now()
  let result
  for(let item in array){
   if(array[item] === 'nemo'){result = `Found at ${+item + 1}`}
  }
  const t2 = performance.now()
  console.log(`findNemo function run : ${t2 - t1}ms`)
  return result
}

console.log(findNemo(nemo))