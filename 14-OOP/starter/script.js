'use strict';

//Constructor Functions and the new Operator

/*
const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Neve do this
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

// 1. New {}(new empty object) is created
// 2. Function is called , this keyword = {}
// 3.{} linked to prototype
// 4. function automatically return{}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

const jay = 'Jay';

console.log(jonas instanceof Person);
console.log(jay instanceof Person);

Person.hey = function () {
  console.log('Hey there');
  console.log(this);
};

Person.hey();
*/
/*
// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matilda.species);

console.log(jonas.hasOwnProperty('firstName'));
console.log(jonas.hasOwnProperty('species'));

console.log(jonas.__proto__);
// Object.prototype (top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 5, 7, 9, 3, 6, 2, 5];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);
console.dir(x => x + 1);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);
console.log(bmw.brake());
console.log(bmw.brake());
console.log(bmw.brake());
console.log(bmw.accelerate());
*/

// ES6 Classes

// class expression
// const PersonCl = class{}

/*
// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }

  // Getter
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that alredy exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are firs-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

// Setters and Getters
const account = {
  owner: 'Jonas',
  movements: [299, 235, 19],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// Objsetect.create
const PersonProto = {
  calcAge() {
    console.log(2047 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

*/

/*
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }
  brake() {
    this.speed -= 10;
    console.log(this.speed);
  }
  get speedUS() {
    console.log(`${this.speed / 1.6} mi/h`);
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const bmw2 = new Car('BMW', 120);
const mercedes2 = new Car('Mercedes', 95);
const ford = new Car('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUS = 50;
console.log(ford);

//  Inheritance Between "Classes": Constructor Functions

const Person3 = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person3.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person3.call(this, firstName, birthYear);
  this.course = course;
};

// Linking protypes
Student.prototype = Object.create(Person3.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/
///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car2 = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car2.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car2.prototype.brake = function () {
  this.speed -= 10;
  console.log(this.speed);
};

const EV = function (make, speed, batery) {
  Car2.call(this, make, speed);
  this.batery = batery;
};
EV.prototype = Object.create(Car2.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.batery = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.batery -= this.batery / 100;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.batery}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.accelerate();
tesla.accelerate();
tesla.accelerate();
tesla.brake();
tesla.brake();
*/

/*
// Inheritance Between "Classes": ES6 Classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  // Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.firstName}`);
  }

  // Getter
  get age() {
    return 2037 - this.birthYear;
  }

  // Set a property that alredy exists
  set fullName(name) {
    // console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log('Hey there');
    // console.log(this);
  }
}

class StudentCl extends PersonCl {
  // constructor(fullName, birthYear, course) {
  //   // Always needs to happen first! only then we can acces this keyword
  //   super(fullName, birthYear);
  //   this.course = course;
  // }
  // If you dont want anny new properties you dont need to bothre writing constructor method in the child class//

  constructor(fullName, birthYear, course) {
    // Always needs to happen first! only then we can acces this keyword
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `Im ${
        2037 - this.birthYear
      } years old, but as a studnet i fell more like ${
        2037 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl('Martha Jones', 2012, 'Computer Scienece');
console.log(martha);
martha.introduce();
martha.calcAge();
*/

/*
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

jay.init('Jay', 2010, 'Computer Science');
console.log(jay);
jay.introduce();
jay.calcAge();
*/

// Another Class Example
// Encapsulation: Protected Properties and Methods

// Encapsulation: Private Class Fields and Methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movments = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // Protected property
    this.#pin = pin;
    // this._movments = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an acc, ${owner}`);
  }
  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movments;
  }

  deposit(val) {
    this.#movments.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log('Loan approved');
      return this;
    }
  }

  static helper = function () {
    console.log('Helper');
  };

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
console.log(acc1);

// acc1._movments.push(250);
// acc1._movments.push(-50);
acc1.deposit(150);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
console.log(acc1.pin);
Account.helper();

// console.log(acc1.#movments);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan);

// Chaining
acc1.deposit(300).deposit(300).withdraw(35).requestLoan(2500).withdraw(4000);
console.log(acc1.getMovements());

///////////////////////////////////////
// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate = function () {
    this.speed += 10;
    console.log(this.speed);
  };
  brake = function () {
    this.speed -= 10;
    console.log(this.speed);
    return this;
  };
  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #batery;
  constructor(make, speed, batery) {
    super(make, speed);
    this.#batery = batery;
  }

  chargeBattery = function (chargeTo) {
    this.#batery = chargeTo;
    return this;
  };
  accelerate = function () {
    this.speed += 20;
    this.#batery -= this.#batery / 100;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${
        this.#batery
      }%`
    );
    return this;
  };
}

const rivian = new EVCl('Rivian', 120, 23);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
