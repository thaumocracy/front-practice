const triangle = (num,symbol) => {
  symbol = symbol + ''
  let row = ''

  for(let i = 0;i < num;i++){
    row += symbol
    console.log(row)
  }
}

triangle(5,'X')
triangle(20,'*')