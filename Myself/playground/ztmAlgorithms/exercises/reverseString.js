const reverseOString = string => string.split('').reverse().join('')

const loopReverse = string => {
  let reversed = []
  for(let i = string.length - 1;i >= 0;i--){
    reversed.push(string[i])
  }
  return reversed.join('')
}




console.log(reverseOString('item'))
console.log(loopReverse('item'))