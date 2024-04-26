/**
 * snakeToCamel
 *
 * Write a function that takes a string as an argument, converts it from snake case to camel
 * case, and returns the new string.
 *
 * Your function should be able to handle underscores at the beginning or end
 * of the string as well. If the underscore is the first character, it should capitalize the following letter.
 * If the underscore is the last character it should not be present on the resulting string.
 *
 * snake case: words_separated_by_underscores
 * camel case: wordsSeparatedByCapitals
 * snakeToCamel("hello_there_world");  -> "helloThereWorld"
 * snakeToCamel("_hello_there_world_");  -> "HelloThereWorld"
 *
 * @param {String} str - The string to be camel cased
 * @return {string} The resulting camel case string
 */
function snakeToCamel(str) {
  // Regex expression to remove the "_"that are on either ends of the string
  // use split to divide the string into an array of words at each _
  const words = str.replace(/^_+|_+$/g, "").split("_");

  // Iterate over the words to transform them into camel case
  const camelCaseString = words
    .map((word, index) => {
      // if the first word and the original string did not start with an _, return word
      if (index === 0 && !str.startsWith("_")) {
        return word;
      }
      // capitalize the first letter of the following word or if the string started with an _.
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");

  return camelCaseString;
}

// DO NOT REMOVE!!
module.exports = snakeToCamel;
