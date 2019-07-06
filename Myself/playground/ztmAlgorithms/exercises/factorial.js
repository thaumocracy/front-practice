const findFactorialRecursive = num => {
  return num ? num * findFactorialRecursive(num-1) : 1
}

const findFactorialIterative = num => {
  let answer = num
  for(let i = num -1 ;i > 0;i--){
    answer *= i
  }
  return answer
}

console.log(findFactorialRecursive(5))
console.log(findFactorialIterative(5))