/**
 * capitalizeVowels
 *
 * Write a function that takes a string as an argument and capitalizes every vowel in it.
 * It should return the new string.
 *
 * capitalizeVowels('hello world');  -> 'hEllO wOrld'
 *
 * @param {String} str - The string to be capitalized
 * @return {string} The capitalized string
 */
function capitalizeVowels(str) {
  let result = "";
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

// DO NOT REMOVE!!
module.exports = capitalizeVowels;
