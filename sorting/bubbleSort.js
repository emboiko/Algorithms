/**
 * Bubble Sort
 * 
 * Start looping with a variable called i at the end of the array, towards the beginning
 * Inner loop j from the beginning until i-1
 * 
 * if arr[j] is greater than arr[j+1], swap those vals
 * return sorted array
 */

const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const bubbleSort = (arr) => {
  let noSwaps = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}
