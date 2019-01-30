function convertToF(celsius) {
    return celsius * 9 / 5 + 32;
}


function reverseString(str) {
    let arr = str.split('').reverse().join('');
    return arr;
}


function factorialize(num) {
    if(num === 0){ 
      return 1
      }
    return num * factorialize(num-1);
  }
  

function findLongestWordLength(str) {
let array = str.split(' ');
let word = ''
for(let i = 0;i < array.length;i++){
    if(array[i].length > word.length){
    word = array[i];
    }
}
return word.length;
}


function largestOfFour(arr) {
    let array = [];
    for(let i = 0;i < arr.length;i++){
      array.push(Math.max(...arr[i]));
    }
    return array;
  }


function confirmEnding(str, target) {
// "Never give up and good luck will find you."
// -- Falcor

return str.slice(str.length - target.length) === target;
}

function repeatStringNumTimes(str, num) {
// repeat after me
let word = '';
    if(num > 0){
        for(let i = 0; i < num;i++){
            word += str;
        }
    }  
return word;
}

function truncateString(str, num) {
    // Clear out that junk in your trunk
    let truncate = str.split('').slice(0,num).join('');
    return num >= str.length ? str : truncate + "..."
  }

function findElement(arr, func) {
let num = 0;

    for(let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num)) {
        return num;
        }
    }
return undefined;
}


function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return typeof bool === 'boolean' ? true : false
}


function titleCase(str) {
    let array = str.split(' ');
    for(let i = 0;i < array.length;i++){
      let innerArray = array[i].toLowerCase().split('');
      innerArray[0] = innerArray[0].toUpperCase();
      array[i] = innerArray.join('');
    }
    return array.join(' ');
  }
  

function frankenSplice(arr1, arr2, n) {
// It's alive. It's alive!
let newArr = [...arr2]
newArr.splice(n,0,...arr1)
return newArr;
}


function bouncer(arr) {
    // Don't show a false ID to this bouncer.
    return arr.filter(item => item ? true : false);
  }

function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a, b) => {return a - b});
return arr.indexOf(num);
}

function mutation(arr) {

let test = arr[1].toLowerCase();
let target = arr[0].toLowerCase();
    for (let i=0;i<test.length;i++) {
        if (target.indexOf(test[i]) < 0)
        return false;
    }
return true;
}

function chunkArrayInGroups(arr, size) {
    // Break it up.
    var arr2 = [];
    for (var i = 0; i < arr.length; i += size) {
        arr2.push(arr.slice(i , i + size));
    }
    return arr2;
  }
  