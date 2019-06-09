const sayHi = (name:string,lastName?:string) :string => {
  return lastName ? `Whatzuuup ${name} ${lastName}` : `Whatzuuup ${name}`
}

console.log(sayHi('Bob'))
console.log(sayHi('Bob','Backlund'))