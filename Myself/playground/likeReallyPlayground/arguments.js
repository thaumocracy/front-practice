function first () {
  console.log(`${arguments} <--- 1`)
  console.log(Array.from(arguments))
}

const second = () => {
  console.log(`${arguments} <--- 2`)
}

const third = (...args) => {
  console.log(`${args[0]} and ${args[1]} <--- 3`)
}

function fourth (...args) {
  console.log(`${args[0]} and ${args[1]} <--- 4`)
}

first('alpha','beta')
second('alpha','beta')
third('alpha','beta')
fourth('alpha','beta')