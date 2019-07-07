const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(array) {
//   let counter = 1
//   let operations = 0
//   while(counter){
//     for(let i = 0;i < array.length;i++){
//       let a = array[i]
//       let b = array[i+1]
//       if(array[i + 1]){
//         if(a > b){
//           console.log(a, b)
//           array[i] = b
//           array[i + 1] = a
//           operations++
//         }
//       }
//       if(operations === 0){
//         counter = 0
//       }
//     }
//   }
// }

const bubbleSort = array => {
  const length = array.length
  for(let i = 0; i < length;i++){
    for(let j = 0; j < length;j++){
      if(array[j] > array[j + 1]){
        let temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
      }
    }
  }
}

bubbleSort(numbers);
console.log(numbers);