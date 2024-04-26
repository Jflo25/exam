/**
 * objToSortedArray
 *
 * Write a function that takes an object and returns a nested array. These inner
 * arrays will each have two elements: the key-value pairs from the object. These
 * whole array should be *SORTED* in alphabetical order by the key names.
 *
 * var phoneNums = {
 *   chris: 3429588375,
 *   andy: 4829574932,
 *   mildew: 9975723073
 * }
 * objToSortedArray(phoneNums);  -> [ ['andy', 4829574932],
 *                                    ['chris', 3429588375],
 *                                    ['mildew', 9975723073] ]
 *
 * @param {Object} obj - An Object containing key-value pairs
 * @return {Array} An Array containing nested Arrays, each one of which has a key
 *  value pair from the original Object. These nested arrays should be sorted.
 */
function objToSortedArray(obj) {
  // convert the object to an array of [key, value] pairs
  const entries = Object.entries(obj);

  // sort the array of entries aplhabetically based on keys
  entries.sort((a, b) => a[0].localeCompare(b[0]));

  return entries;
}

// DO NOT REMOVE!!
module.exports = objToSortedArray;
