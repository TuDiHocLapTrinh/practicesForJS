/**
 *
 * @param define a object and Calculate age
 *
 */

function run(name, year_of_birth) {
  var d = new Date();
  var current_year = d.getFullYear();
  // define a object
  const person = {
    name: name,
    year_of_birth: year_of_birth,
    address: "Ha Noi",
  };

  let age = current_year - person.year_of_birth;
  console.log(current_year);

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
