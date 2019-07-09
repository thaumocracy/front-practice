let calculations = 0
let calculationsCached = 0

// O(2^n) Time & 
const fibonacci = num => {
  calculations++
  return num <= 1 ? num : fibonacci(num - 1) + fibonacci(num - 2);
}

// O(n) Time &
const fibonacciCached = n => {
  let cache = {}
  return function fib(n){
    calculationsCached++
    if(n in cache){
      return cache[n]
    } else {
      if(n < 2){
        return n
      } else {
        cache[n] = fib(n - 1) + fib(n-2)
        return cache[n]
      }
    }
  }
}

const fibonacciCached2 = n => {
  let answer = [0,1]
  for(let i = 2;i <= n;i++){
    answer.push(answer[i-2] + answer[i-1])
  }
  return answer.pop()
}

fibonacci(10)

const fasterFib = fibonacciCached()

console.log(`Dynamic`,fasterFib(10))
console.log(`Iterative`,fibonacciCached2(10))

console.log(calculations)
console.log(calculationsCached)