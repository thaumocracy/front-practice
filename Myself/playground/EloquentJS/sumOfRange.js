const sumOfRange = (start,end,step = start < end ? 1 : -1) => {
  let array = []
  if(step > 0){
    for(let i = start ; i <= end ; i += step){array.push(i)}
  }
  if(step < 0){
    for(let i = start ; i >= end ; i += step){array.push(i)}
  }
  const sum = (array) => {
    let acc = 0
    for(let item of array){acc += item}
    return acc
  } 
  return sum(array)
}

console.log(sumOfRange(100,1,5));
