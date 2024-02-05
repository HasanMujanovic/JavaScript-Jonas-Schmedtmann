'use strict';
/*
const bookings = [];
const createBooking = function (
  flightNumber,
  numOassengers = 1,
  price = 199 + numOassengers
) {
  // ES5 way of doing
  //   numOassengers = numOassengers || 1;
  //   price = price || 199;
  const booking = {
    flightNumber,
    numOassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 210);

createBooking('LH123', undefined, 1000); // way to skip parameter
*/

/*
const flightNumber = 'LH231';
const jonas = {
  name: 'Jonas Schasd',
  passport: 2344532,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH123';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2344532) {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};
checkIn(flightNumber, jonas);
// console.log(flightNumber);
// console.log(jonas);
// // Is the same as doing...
// const flight = flightNumber;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 100000000;
};
newPassport(jonas);
checkIn(flightNumber, jonas);
*/

/*
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirst = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};
transformer('JavaScript is the best', upperFirst);
transformer('JavaScript is the best', oneWord);

// JS uses callback all the time
const high5 = function () {
  console.log('wavemoji');
};

document.body.addEventListener('click', high5);

['Jonas', 'Marth', 'Adam'].forEach(high5);
*/

/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const greet2 = greeting => {
  return name => {
    console.log(`${greeting} ${name}`);
  };
};

greet2('Cao')('Hasan');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.airline} flight ${this.iataCode}${flightNum}`,
      name,
    });
  },
};

// Call method
lufthansa.book(239, 'Hasan Mujanovic');
lufthansa.book(635, 'John Smith');
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Doesnt work
// book(23, 'Sarah Williams');

book.call(eurowings, 23, 'Sarah Wiliams');
console.log(eurowings);

book.call(lufthansa, 253, 'Jonas Schdfsa');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Line',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 243, 'Mary Cooper');

// Apply method
const flightData = [574, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
book.call(eurowings, 23, 'Sarah Wiliams');

const bookEW = book.bind(eurowings);
const bookLM = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(234, 'Steven Wiliams');
console.log(eurowings);

// preset an argument (Partial aplication)
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schsdanja');
bookEW23('Marta Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
lufthansa.buyPlane();

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));

const example = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const example2 = example(0.23);
console.log(example2(100));
console.log(example2(200));
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:




HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const displayMessage = +prompt(
      // `${this.question}\n${this.options}\n(Write option number)`
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );
    //   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)

    // typeof displayMessage === 'number' &&
    //   displayMessage < this.options.length &&
    //   this.answers[displayMessage]++;
    if (
      displayMessage < 0 ||
      displayMessage >= this.options.length ||
      isNaN(displayMessage)
    ) {
      console.log('Niste uneli dgovarajuci broj');
    } else {
      this.answers[displayMessage]++;
    }
    // 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.
    this.displayResults();
    this.displayResults('string');
  },
  // 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },

  // displayResults(type) {
  //   if (Array.isArray(type)) {
  //     console.log(type);
  //   }
  // },
};
// 2. Call this method whenever the user clicks the "Answer poll" button.
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

const test1 = poll.displayResults.bind(null);
console.log(test1([2, 4, 3]));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 4, 6, 3, 7, 2] });
*/

/*
// Immediately Invoked Function Expressions (IIFE)

const runOnce = function () {
  console.log('This weiil never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log('this weill aslo never run again'))();

// we can use this instead {} just to vreate a block for let and const
{
  const isPrivate = 23;
  var notPrivate = 54;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/

/*
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGrp = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups each with ${perGrp} passengers`);
  }, (wait = 1000));
  console.log(`We will start boarind in ${wait} seconds`);
};

// Closure have priority
const perGrp = 1000;
boardPassengers(180, 3);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  const change = document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
