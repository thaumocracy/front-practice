const letters = ['a','b','c','d','z','m','e']
const basket = [1,3,5,65,53,34,7,9]

console.log(letters.sort())
console.log(basket.sort())
// beware of wierd behaviour,comparing STRINGS as default!
console.log(basket.sort((a,b) => a > b))
