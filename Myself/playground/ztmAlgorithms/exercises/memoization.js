function memoization(){
  let cache = {}
  return function(n){
    if(n in cache){
      return cache[n]
    } else {
      console.log(`Doing math,hold on`)
      cache[n] = n + 80
      return cache[n]
    }
  }
}


const memo = memoization()

console.log(`1`,memo(5))
console.log(`1`,memo(5))
console.log(`2`,memo(6))