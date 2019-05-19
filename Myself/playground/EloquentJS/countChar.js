const countChar = (string,char) => {
  let array = string.split('')
  let counter = 0
  for(let i = 0; i < array.length;i++){
    if(array[i] === char) {counter += 1} 
  }
  return counter
}
console.log(countChar('aloha','a'))
console.log(countChar('bananarama','n'))
console.log(countChar('eloquent javascript','o'))
