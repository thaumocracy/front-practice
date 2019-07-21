console.log(user) // <- undefined,since partially hoisted
console.log(logStuff('stuff')) // <- works,since function declaration are fully hoisted
console.log(anotherUser) // <- error,since const and let do NOT hoist
console.log(logStuff2('stuff')) // <- error,function not in global scope

var user = 'Ivan' 
const anotherUser = 'Vasiliy' 

console.log(user)
console.log(anotherUser)


function logStuff(params) {
  return `${params}`
}

(function logStuff2(params) {
  console.log('Im runned!')
}) //() <- will run,if invoking brackets are uncommented