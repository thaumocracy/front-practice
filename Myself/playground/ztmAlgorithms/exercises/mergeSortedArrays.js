const mergeSortedArrays = (arr1,arr2) => {
  let hash = {}
  let newArray = []
  for(let i = 0; i < arr2.length;i++){
    hash[i] = arr2[i]
  }
  for(let i = 0; i < arr1.length;i++){
    if(arr1[i] < hash[i]){
      newArray.push(arr1[i])
    } else {
      newArray.push(hash[i])
    }
  }
  return newArray
}

const array1 = [0,3,4,7,9]
const array2 = [1,6,12]



console.log(mergeSortedArrays(array1,array2))