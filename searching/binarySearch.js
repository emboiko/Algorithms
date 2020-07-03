/**
 * Binary Search:
 * 
 * Accepts a sorted array and a value.
 * 
 * Create a left pointer at the start of the array, and a right pointer
 * at the end of the array.
 * 
 * While the left pointer comes before the right pointer:
 *  Create a pointer in the middle
 *  If we find the value, return the index
 *  If the value is too small, move the left pointer up
 *  If the value is too large, move the right pointer down
 * 
 * If We never find the value, return -1
 */

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let mid = Math.floor((right + left) / 2);

  while (arr[mid] !== val && left <= right) {
    if (val < arr[mid]) right = mid - 1;
    else left = mid + 1;
    mid = Math.floor((left + right) / 2);
  }
  return arr[mid] === val ? mid : -1;
}
