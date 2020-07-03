/**
 * Builds up a sort by gradually creating a larger left half which is always sorted
 * 
 * Start off with the second element in the array.
 * Compare the second element with the one before it, and swap if needed
 * 
 * Continue to the next element and if it's in the incorrect order, 
 * iterate through the sorted portion to place the element in the correct place
 * 
 * Repeat until sorted
 */

const insertionSort = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i--;
      }
    }
  }
  return arr;
}
