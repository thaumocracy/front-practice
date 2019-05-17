const fizzBuzz = (amount) => {
  for(let i = 0; i <= amount; i++){
    if((i % 5 === 0 && i % 3 === 0) && i !== 0){
      console.error(`${i} is Fizz & Buzz`)
    } else if ((i % 5 === 0) && i !== 0){
      console.warn(`${i} is Buzz(5)`)
    } else if((i % 3 === 0) && i !== 0){
      console.log(`${i} is Fizz(3)`)
    }
  }
}

fizzBuzz(100)