class Person {
  constructor(firstName, lastName, age) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
  }
  
  set firstName(firstName) {
    this._firstName = firstName;
  }

  get firstName() {
    return this._firstName;
  }
  
  set lastName(lastName) {
    this._lastName = lastName;
  }
  
  get lastName() {
    return this._lastName;
  }
  
  set age(age) {
    if (typeof(age) === 'number') {
      if (age < 1) {
        this._age = 1;
      } else if (age > 110) {
        this._age = 110;
      } else {
        this._age = age;
      }
    } else {
      this._age = 1;
    }
  }
  get age() {
    return this._age;
  }

  
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);

person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);