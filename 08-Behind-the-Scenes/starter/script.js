'use strict';

/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1986) {
      var millenial = true;

      // Creating NEW variable with same name as outer scopes variable
      const firstName = 'Steven';

      // Reassigning outer scopes variable
      const output = 'NEW OUTPUT';

      const str = `Oh, and you are millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(true);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Hasan';
console.log(calcAge(1983));
// console.log(age);
// printAge();

*/

/*

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'Teacher';
const year = 1991;

// Functions
console.log(addDecl(3, 4));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShopingCart();

var numProducts = 10;

function deleteShopingCart() {
  console.log(`All products deleted`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.x);
console.log(z === window.x);

*/

/*

console.log(this);
const calcAge = function (birthYear) {
  console.log(2034 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2034 - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

// Methode borrowing
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;

console.log(f);

f();

*/

/*

// var firstName = 'Matilda';
const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    //   //   console.log(this);
    //   //   console.log(this.year >= 1981 && this.year <= 1996);
    // };

    // Solution 2
    const self = this; // self or that
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
      //   console.log(this);
      //   console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: function () {
    console.log(this);

    console.log(`Hey ${this.firstName}`);
  },
};
jonas.greet();
jonas.calcAge();

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  a + b;
};
addArrow(2, 5, 8);

*/

// Primitives vs. Objects in Practice

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

// Reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
