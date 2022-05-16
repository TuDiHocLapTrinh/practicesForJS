const romanNumber = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

/**
 * @param {string} str
 * @return {number}
 * function convert roman to integer
 */
const romanToInt = function (str) {
  let number = 0;
  const stringToArray = str.split("");
  for (let i = 0; i < stringToArray.length; i++) {
    if (
      romanNumber.get(stringToArray[i]) < romanNumber.get(stringToArray[i + 1])
    ) {
      number -= romanNumber.get(stringToArray[i]);
    } else {
      number += romanNumber.get(stringToArray[i]);
    }
  }
  return number;
};

module.exports = romanToInt;
