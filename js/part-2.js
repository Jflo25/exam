/**
 * reverseChunk
 *
 * Write a function that takes an array and two integers as arguments. These two
 * numbers will be indices. All array elements between (and including) these
 * positions should be reversed. Return the new array.
 *
 * const zeroToTen = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * reverseChunk(zeroToTen, 2, 6);  -> [0, 1, 6, 5, 4, 3, 2, 7, 8, 9, 10]
 * const primes = [2, 3, 5, 7, 11];
 * reverseChunk(primes, 1, 4);  -> [2, 11, 7, 5, 3]
 *
 * @param {Array} arr - The Array to be worked on
 * @param {number} start - starting position of the chunked reverse; if provided
 *  value is less than 0 then use 0
 * @param {number} end - ending position of the chunked reverse; if provided value
 *  is greater than or equal to the array length, then use the array length - 1
 * @return {Array} The resulting Array
 */
function reverseChunk(arr, start, end) {
  // make start and end indices to be within bounds
  start = Math.max(start, 0);
  end = Math.min(end, arr.length - 1);

  // If start is greater than end, do nothing
  if (start > end) return arr;

  // Extract the section to reverse
  const reverseSection = arr.slice(start, end + 1).reverse();

  // Replace the section in the original array
  arr.splice(start, end - start + 1, ...reverseSection);

  return arr;
}

// DO NOT REMOVE!!
module.exports = reverseChunk;
