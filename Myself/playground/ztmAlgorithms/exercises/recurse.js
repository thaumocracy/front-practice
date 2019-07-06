const recurse = (num,target) => {
  if(num === target){
    return `Target reached: ${target} ${num}`
  } else {
    console.log(num, target)
    return recurse(num -1 , 5)
  }
}
console.log(recurse(10,5))