//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  let massive = []
  for(let i = str.length ; i >= 0 ;i--){
    massive.push(str[i])
  }
  return massive.join('')
}

console.log(reverseString(`this is a string`))
reverseString('yoyo mastery')
//should return: 'yretsam oyoy'