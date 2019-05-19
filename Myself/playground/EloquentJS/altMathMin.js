const altMathMin = (a,b) => {
  let result =  a < b ? a : b
  console.log(result)
}

const moreAltMathMin = (array) => {
  let min = array[0]
  for(let i = 0;i < array.length;i++){
      if(array[i] < min){
        min = array[i]
      } else {
        continue
      }
  }
  console.log(min)
  return min
}

altMathMin(5,-5)
moreAltMathMin([1,2,3,4,5,5,6,7,8,88,66,777,-5])