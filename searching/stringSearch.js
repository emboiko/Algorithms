/**
 * Naive String Search
 * 
 * Count the number of times a smaller string appears in a larger string
 * 
 * Accepts a string and a "pattern"
 * Loop over the longer string
 * Loop over the shorter string
 * If the characters don't match, break out of the inner loop
 * If the characters do match, keep going
 * If we complete the inner loop and find a match, increment the count of matches
 * Return the count
 */

const stringSearch = (str, substr) => {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < substr.length; j++) {
      if (str[i + j] !== substr[j]) break;
      if (j === substr.length - 1) count++;
    }
  }

  return count;
}
