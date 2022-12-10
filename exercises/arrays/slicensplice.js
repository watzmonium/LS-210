// function slice(array, begin, end) {
//   let len = array.length;

//   if (len - 1 < begin || end < begin) {
//     return [];
//   }

//   let sliceArr = [];
//   end = end > len ? len : end;

//   for (let i = begin; i < end; i++) {
//     sliceArr.push(array[i]);
//   }

//   return sliceArr;
// }

// console.log(slice([1, 2, 3], 1, 2));               // [2]
// console.log(slice([1, 2, 3], 2, 0));               // []
// console.log(slice([1, 2, 3], 5, 1));               // []
// console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

// const arr1 = [1, 2, 3];
// console.log(slice(arr1, 1, 3));                     // [2, 3]
// console.log(arr1);                                  // [1, 2, 3]

function splice(array, start, deleteCount, ...elements) {
  let elementNumber = elements.length;
  let arrLen = array.length;
  let retArr = [];
  let tempArr = array.slice(start);
  // if the starting index is greater than the size of the array, make it the last index
  start = start >= arrLen ? arrLen - 1 : start;

  // if the number of items to delete from the array plus the starting index is greater
  // than the max index of the array, make it equal to 0, since nothing is being deleted
  deleteCount = start + elementNumber > arrLen ? 0 : deleteCount;
  deleteCount = deleteCount + start > arrLen ? arrLen - start : deleteCount;



  // insert the requested number of entries into the array at the index requested
  for (let i = 0; i < elementNumber; i++) {
    array[start + i] = elements[i];
  }

  // if there are numbers to delete, remove that number of numbers, then copy the remaining
  if (deleteCount) {
    let totalRemainingItems = (arrLen + elementNumber - deleteCount - start);
    for (let i = 0; i < deleteCount ; i++) {
      retArr.push(tempArr.shift());
    }
    for (let i = 0; i < totalRemainingItems; i++) {
      array[start + elementNumber + i] = tempArr.shift();
    }
  } else if (elementNumber) {
    let tempLen = tempArr.length + 1;

    for (let i = 1; i < tempLen; i++) {
      array[start + i] = (tempArr.shift());
    }
  }

  array.length = arrLen + (elementNumber - deleteCount)
  // console.log(array);
  return retArr;
}

// first insert the elements the user wants at the correct index
// then copy back enough 
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]