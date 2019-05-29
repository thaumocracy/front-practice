function anotherFunChallenge(input) {
  let a = 5;  // O(1)
  let b = 10; // O(1)
  let c = 50; // O(1)
  for (let i = 0; i < input /* O(n) */; i++) {
    let x = i + 1; // O(n)
    let y = i + 2; // O(n)
    let z = i + 3; // O(n)
  }
  for (let j = 0; j < input /* O(n) */ ; j++) {
    let p = j * 2; // O(n)
    let q = j * 2; // O(n)
  }
  let whoAmI = "I don't know"; //O(1)
}

// result = O(7n + 4)
