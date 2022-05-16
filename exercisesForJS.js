/**
 * @param {string} name
 * @param {number} yearOfBirth
 */
function run(name, yearOfBirth) {
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
 * @param copy the values of object1 to object2
 */
function run() {
  var object1 = { foo: "bar", a: 5 };

  var object2 = { name: "foo", d: 10 };

  Object.assign(object2, object1);

  console.log(object2);
}
