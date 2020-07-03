/**
 * Selection Sort
 * (Minimize swaps)
 * 
 * Store first element as the smallest val we've seen so far.
 * Compare this item to the next item in the arr until we find a smaller number.
 * If a smaller number is found, designate that smaller number to be the new min
 * and continue to the end of the array.
 * If the min is not the value you initially began with, swap the two vals.
 * Repeat with next element until array is sorted.
 */

const swap = (arr, index1, index2) => {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
