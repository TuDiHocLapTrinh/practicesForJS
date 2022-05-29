/**
 * @param {string} name
 * @param {number} yearOfBirth
 */
function displayNewObject(name, yearOfBirth) {
  var date = new Date();
  var currentYear = date.getFullYear();
  // define a object
  const person = {
    name: name,
    yearOfBirth: yearOfBirth,
    address: 'Ha Noi',
  };

  const age = currentYear - person.yearOfBirth;
  console.log(currentYear);

  // Calculate age

  console.log(person); // print object
  console.log(person.name + ' is ' + age + ' years old');
}

/**
 * @param nothing
 */
function coppyObject() {
  var object1 = { foo: 'bar', a: 5 };

  var object2 = { name: 'foo', d: 10 };

  Object.assign(object2, object1);

  console.log(object2);
}

/** Write a JavaScript function to check whether an `input` is a string or not
 * @param {}input -
 * @returns true/false
 */
function inputIsString(input) {
  let is_String = false;
  if (typeof input === 'string') is_String = true;
  return is_String;
  // Cai nay chi can viet thay ca 3 dong tren thanh
  // return typeof input === "string";
}

/** Write a JavaScript function to check whether a string is blank or not
 * @param {string} str - input string
 * @returns {boolean} is_Blank - result for string is blank
 */
function strIsBlank(str) {
  let is_Blank = false;
  is_Blank = str.length === 0 ? true : false;
  return is_Blank;
  // Cai nay chi can viet thay ca 3 dong tren thanh
  // return str.length === 0;
}

/**Write a JavaScript function to split a string and convert it into an array of words
 * @param {string} str - input string
 * @return {object} strToArr - output arr
 */
function strToArray(str) {
  let strToArr = str.split(' ');
  return strToArr;
}

/**Write a JavaScript function to convert a string in abbreviated form
 * @param {string} str - input string
 * @return {string} abbreviatedStr - abbreviated string
 */
function abbreviatedForm(str) {
  let abbreviatedStr = '';
  let strToWordArray = str.split(' ');
  if (strToWordArray.length > 1) {
    abbreviatedStr = strToWordArray[0] + ' ';
    for (let i = 1; i < strToWordArray.length; i++) {
      abbreviatedStr += strToWordArray[i].charAt(0) + '. ';
    }
    return abbreviatedStr.trim();
  } else return (abbreviatedStr = strToWordArray[0]);
}

/**Write a JavaScript function to hide email addresses to protect from unauthorized user
 * @param {string} str - input string
 * @return {string} hidenEmail - hiden email
 */
function toHideEmail(str) {
  let hidenEmail = str.replace(str.slice(4, str.indexOf('@')), '****');
  return hidenEmail;

  // return str.replace(str.slice(4, str.indexOf("@")), "****");
}

/**Write a JavaScript function to parameterize a string
 *
 */
function stringParameterize(str) {
  return str.toLowerCase().split(' ').join('-');
}

/**Write a JavaScript function to capitalize the first letter of a string
 *
 */
function capitalize(str) {
  return str.trim().replace(str[0], str[0].toUpperCase());
}

/**Write a JavaScript function to capitalize the first letter of each word in a string
 *
 */
function capitalizeFirstLetter(str) {
  const strToArr = str
    .trim()
    .split(' ')
    .map((value) => capitalize(value));
  return strToArr.join(' ');
}

/**Write a JavaScript function that takes a string which has lower and upper case letters
 * as a parameter and converts upper case letters to lower case, and lower case letters to upper case
 */
function caseSwap(str) {
  const strToArr = str
    .trim()
    .split('')
    .map((value) => {
      if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90)
        return value.toLowerCase();
      if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122)
        return value.toUpperCase();
    });
  return strToArr.join('');
}

/**
 * Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 */
function firstInArray(arr, n) {
  if (n === undefined) return arr[0];
  return n > 1 ? arr.slice(0, n) : n === 1 ? arr[0] : [];
}

/**
 *Write a JavaScript function to get the last element of an array.
 *Passing a parameter 'n' will return the last 'n' elements of the array.
 */

function lastInArray(arr, n) {
  if (n === undefined) return arr[arr.length - 1];
  return n > 1 ? arr.slice(-n) : n === 1 ? arr[arr.length - 1] : [];
}

/**
 * Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers.
 */
function insertDashes(num) {
  let str = num.toString();
  let strToArr = str.split('');
  let oldValue = '1';
  let output = strToArr.map((value) => {
    if (Number(value) % 2 === 0 && Number(oldValue) % 2 === 0) {
      oldValue = value;
      value = '-' + value;
    }
    oldValue = value;
    return value;
  });
  return output.join('');
}

/**
 *Write a JavaScript program to find the most frequent item of an array.
 */
function mostFrequent(arr) {
  let obj = {};
  let max = 0;
  let maxValue = '';
  arr.forEach(function (value) {
    if (!obj[value]) {
      obj[value] = 1;
    } else {
      obj[value]++;
    }
    if (obj[value] > max) {
      max = obj[value];
      maxValue = value;
    } else if (obj[value] === max) {
      maxValue += ',' + value;
    }
  });
  return maxValue;
}

/**
 * Write a JavaScript program which prints the elements of the following array.
 */
function printsArrayElement(array) {
  array.forEach((value, index) => {
    console.log('row' + ++index);
    value.forEach((childValue) => console.log(childValue));
  });
}

/**
 * Write a JavaScript program to find the sum of squares of a numeric vector.
 */

function sumOfSquares(array) {
  let sum = 0;
  array.forEach((value) => (sum += Math.pow(value, 2)));
  console.log(sum);
}

/**
 * Write a JavaScript program to compute the sum and product of an array of integers
 */

function sumAndProduct(array) {
  let sum = 0;
  let product = 1;
  array.forEach((value) => {
    sum += value;
    product *= value;
  });
  console.log(sum);
  console.log(product);
}

/**
 * Write a JavaScript program to remove duplicate items from an array
 */
function removeDuplicate(array) {
  array.forEach((value) => value.toLowerCase);
  console.log([...new Set(array)]);
}

/**
 *  Write a JavaScript program to find the leap years in a given range of years.
 */
function findLeapYears(startYear, endYear) {
  const yearsArr = [];
  for (let year = startYear; year <= endYear; year++) {
    yearsArr.push(year);
  }
  leapYears = yearsArr.filter(
    (value) => (value % 4 == 0 && value % 100 != 0) || value % 400 == 0
  );
  console.log(leapYears);
  console.log(yearsArr);
}

/**
 * Write a JavaScript program to shuffle an array.
 */
function shuffleArr(arr) {
  let temp = arr.sort(() => 0.5 - Math.random());
  console.log(arr);
}

module.exports = { mostFrequent };
