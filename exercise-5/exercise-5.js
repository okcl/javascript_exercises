const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".

person2.firstName = "Simon";

/*JavaScript is an object-oriented programming language and it has an interpreter that executes the code line by line.
When we assign a object to another variable, interpreter only uses it as a reference so it doesn't create new copy of the 
object.

When interpreter reaches the 11th line it changes the original object which results in changes happening in both person1 and person2*/

console.log(person1);
console.log(person2);
