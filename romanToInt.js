/**
 * @param {string} s
 * @return {number}
 */

const romanNumber = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

var romanToInt = function (s) {
  let number = 0;
  const sToArray = s.split("");
  for (let i = 0; i < sToArray.length; i++) {
    if (romanNumber.get(sToArray[i]) < romanNumber.get(sToArray[i + 1])) {
      number -= romanNumber.get(sToArray[i]);
    } else {
      number += romanNumber.get(sToArray[i]);
    }
  }
  return number;
};
