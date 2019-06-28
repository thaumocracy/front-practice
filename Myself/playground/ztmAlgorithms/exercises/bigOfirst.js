function funChallenge(input) {
  let a = 10; // не забыть : иногда считается как O(1)
  a = 50 + 3; // 1 

  for (let i = 0; i < input.length /* O(n)*/; i++) {
    anotherFunction() // < O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }
  return a // не забыть : иногда считается как O(1)
}


// result = O(3 + 4n)