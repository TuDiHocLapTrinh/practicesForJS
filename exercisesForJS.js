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
    address: "Ha Noi",
  };

  const age = currentYear - person.yearOfBirth;
  console.log(currentYear);

  // Calculate age

  console.log(person); // print object
  console.log(person.name + " is " + age + " years old");
}

/**
 * @param nothing
 */
function coppyObject() {
  var object1 = { foo: "bar", a: 5 };

  var object2 = { name: "foo", d: 10 };

  Object.assign(object2, object1);

  console.log(object2);
}

/** Write a JavaScript function to check whether an `input` is a string or not
 * @param {}input -
 * @returns true/false
 */
function inputIsString(input) {
  let is_String = false;
  if (typeof input === "string") is_String = true;
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
  let strToArr = str.split(" ");
  return strToArr;
}

/**Write a JavaScript function to convert a string in abbreviated form
 * @param {string} str - input string
 * @return {string} abbreviatedStr - abbreviated string
 */
function abbreviatedForm(str) {
  let abbreviatedStr = "";
  let strToWordArray = str.split(" ");
  if (strToWordArray.length > 1) {
    abbreviatedStr = strToWordArray[0] + " ";
    for (let i = 1; i < strToWordArray.length; i++) {
      abbreviatedStr += strToWordArray[i].charAt(0) + ". ";
    }
    return abbreviatedStr.trim();
  } else return (abbreviatedStr = strToWordArray[0]);
}

/**Write a JavaScript function to hide email addresses to protect from unauthorized user
 * @param {string} str - input string
 * @return {string} hidenEmail - hiden email
 */
function toHideEmail(str) {
  let hidenEmail = str.replace(str.slice(4, str.indexOf("@")), "****");
  return hidenEmail;

  // return str.replace(str.slice(4, str.indexOf("@")), "****");
}

/**Write a JavaScript function to parameterize a string
 *
 */
function stringParameterize(str) {
  return str.toLowerCase().split(" ").join("-");
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
    .split(" ")
    .map((value) => capitalize(value));
  return strToArr.join(" ");
}

/**Write a JavaScript function that takes a string which has lower and upper case letters
 * as a parameter and converts upper case letters to lower case, and lower case letters to upper case
 */
function caseSwap(str) {
  const strToArr = str
    .trim()
    .split("")
    .map((value) => {
      if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90)
        return value.toLowerCase();
      if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122)
        return value.toUpperCase();
    });
  return strToArr.join("");
}

module.exports = { capitalize, capitalizeFirstLetter, caseSwap };
