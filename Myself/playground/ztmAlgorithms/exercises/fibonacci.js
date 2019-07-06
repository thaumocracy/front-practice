const fibIterative = num => {
  let a = 1
  let b = 1

  for (var i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }

  return b;
}
console.log(fibIterative(77))

const fibRecursive = num => {
  return num <= 1 ? num : fibRecursive(num - 1) + fibRecursive(num - 2);
}
console.log(fibRecursive(7))