const chessBoard = (size) => {
  // TODO Maybe still modify to accept all sizes correctly? Example : It breaks on 5
  let row = ''
  for(let i = 0;i < size;i++){
    for(let j = 0; j < size;j++){
      if(( i + j ) % 2 === 0 ){
        row += ' '
      } else {
        row += '#'
      }
    }
    row += "\n"
  }  
  console.log(row)
}

chessBoard(7)