// O(n^2) - nested loops multiply the n

const array = [1,2,3,4,5,6,7,8,9]

const logPairs = (input) => {
  for(let i = 0;i < input.length; i++){
    for(let j = 0 ; j < input.length; j++ ){
      if(j !== i){console.log(`${input[i]} : ${input[j]}`)}
    }
  }
}

console.log(logPairs(array))