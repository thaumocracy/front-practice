const isEven = (num) => {
  if(num === 0) { return true} 
  else if (num === 1) {return  false} 
  else if (num < 0) {return isEven(-num)}
  else if (num > 1) {return isEven(num - 2)}
}

console.log(isEven(-55))
console.log(isEven(100))
console.log(isEven(-100))
console.log(isEven(75))