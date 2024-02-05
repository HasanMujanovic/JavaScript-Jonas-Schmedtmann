'use strict';

// Data needed for a later exercise
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 2}`]: {
    open: 12,
    close: 22,
  },
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  // another way of writing methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mianIngridient, ...otherIngridients) {
    console.log(`Your pizza will have ${mianIngridient}, ${otherIngridients}`);
    console.log(mianIngridient, otherIngridients);
  },
};
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split('+')) {
  const [delArv, dest1, dest2, time] = flight.replaceAll('_', ' ').split(';');
  const znak = delArv.startsWith(' Delayed') ? '***' : ' ';
  const output = `${znak}${delArv} from ${dest1.replace(
    dest1,
    dest1.slice(0, 3).toUpperCase()
  )} to ${dest2.replace(
    dest2,
    dest2.slice(0, 3).toUpperCase()
  )} (${time.replace(':', 'h')})`.padStart(43);
  console.log(output);
}

// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
//     '_',
//     ' '
//   )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

// \/\/\/\/\/\/\\/\/\//\\/\/\/\/\/\/\/\//\\/\//\\/\/\/\//
// const novi = flights.replaceAll('_', ' ').split(';');
// console.log(novi);
// const poruka = `* ${novi[0]} from ${novi[1].replace(
//   novi[1],
//   'FAO'
// )} to ${novi[2].replace(novi[2], 'TXL')} (${novi[4].replace(novi[4], '11h25')})
//             Arrival from ${novi[5].replace(
//               novi[5],
//               'BRU'
//             )} to ${novi[1].replace(novi[1], 'FAO')} (${novi[4].replace(
//   novi[4],
//   '11h45'
// )})
// `;
// console.log(poruka);

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/
/*
const btn = document.querySelector('.btn');
const p1 = document.querySelector('.lasd');
const textarea1 = document.querySelector('#povrsina');

btn.addEventListener('click', function () {
  const txtArea = textarea1.value.split('\n');
  let noviStr;
  let deoStringa;
  let noviStr2;
  let drugiDeo;
  let final;
  for (let [n, i] of txtArea.entries()) {
    for (let b = 0; b < i.length; b++) {
      if (i[b] === '_') {
        deoStringa = i.slice(0, b);
        drugiDeo = i.slice(b + 1);
        noviStr = deoStringa + drugiDeo[0].toUpperCase() + drugiDeo.slice(1);
      }
    }
    final = noviStr.padEnd(30, ' ') + '*'.repeat(n + 1);
    p1.textContent += final;
    console.log(final);
  }

  // const txtArea = textarea1.value.split('\n'); // ovde mora value posto kad sam deklarsao textArea1 nisam stavio .value, da sam stavio onda bi se pisalo samo textArea1.split
  // for (let [i, w] of txtArea.entries()) {
  //   const [deo1, deo2] = w.toLowerCase().trim().split('_');
  //   const poruka = `${deo1}${deo2.replace(deo2[0], deo2[0].toUpperCase())}`;
  //   console.log(`${poruka.padEnd(20)}${'*'.repeat(i + 1)}`);
  // }
});
*/

/*
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schemdtmann'.split(' '));

const [firstName, LastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const captalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};

captalizeName('Hasan mujanovic');
captalizeName('jessica ann smith davis');

// padding
const message = 'Go to gate 23';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(25, '+').padEnd(30, '+'));

const maskCreditCard = function (number) {
  const string = number + ''; // if one is a string it will convert everything to string
  const last = string.slice(-4);
  return last.padStart(string.length, '*');
};
console.log(maskCreditCard(43244842));
console.log(maskCreditCard('2342342343254'));

// Repeat
const message2 = 'Bad weather... All departures delayed';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(
    `There are ${n} planes in line${'ovde bi trebala slika aviona'.repeat(n)}`
  );
};
planesInLine(2);
*/

/*
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// FIx captialization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Example comapre email
const email = 'hello@jonas.io';
const loginEmail = '  Hello@jOnas.io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();

const normailzedEmail = loginEmail.toLowerCase().trim();
console.log(normailzedEmail);
console.log(email);

// Reolacing
const priceGB = '288,97E';
const priceUS = priceGB.replace('E', '$').replace(',', '.');
console.log(priceUS);
const announcment = 'All pasengers come to boarding door 23. Borading door 23';

console.log(announcment.replace('door', 'gate'));
// console.log(announcment.replaceAll('door', 'gate'));

console.log(announcment.replace(/door/g, 'gate'));

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}

// Practice exercise
const checkBggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBggage('I have some laprtop, food, and pocket Knife');
checkBggage('Socks and camera');
checkBggage('Got some nsacks and a gun for protection');
*/

/*
const airline = 'TAP Air Portugal';
const plane = 'A320';
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B737'[0]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // to get rid of spac +1

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checMiddleSeat = function (seat) {
  //B AND E ARE MIDDLE SEATS
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat');
  } else {
    console.log('You got lucky');
  }
};
checMiddleSeat('11B');
checMiddleSeat('23C');
checMiddleSeat('3E');

console.log(new String('Jonas'));
console.log(typeof new String('Jonas')); // Object. this happens when we call method on string

console.log(typeof new String('Jonas').slice(1));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/
/*
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);
// 1. Create an array 'events' of the different game events that happened (no duplicates)
const events = new Set(gameEvents.values());
console.log(new Array(...events));

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
// gameEvents.delete(64);
console.log(gameEvents);

// 3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
// This is specific and only acounts for 90 minutes of the game, not for extra time

// let average = 0;
// for (let minut of gameEvents.keys()) {
//   if (minut > 90) {
//     gameEvents.delete(minut);
//   }
// }
// console.log(gameEvents.size);
// average = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${average.toFixed(0)} minutes`);
let average2 = 90 / gameEvents.size;
console.log(
  `An event happened, on average, every ${average2.toFixed(0)} minutes`
);

// 4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
//       [FIRST HALF] 17: ⚽️ GOAL
for (let [minut, event] of gameEvents.entries()) {
  if (minut <= 45) {
    console.log(`[FIRST HALF] ${minut}: ${event}`);
  } else {
    console.log(`[SECOND HALF] ${minut}: ${event}`);
  }
}
*/

/*
// Maps - iteration

const question = new Map([
  ['question', 'What is the best programing laungage in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
  ['lol', 4],
]);
console.log(question);

// Covert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//  quiz app
console.log(question.get('question'));
for (const [key, values] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${values}`);
}
// const answer = +prompt('Your answer');
const answer = 3;
console.log(answer);
console.log(question.get('correct'));
console.log(question.get(question.get('correct') === answer));
// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

// Convert map to array
console.log(...question);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/

// Maps

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firnze, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));
rest
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('closed', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(rest.get('name'));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('closed'))); // Power of booleans as the map keys

console.log(rest.has('categories'));
rest.delete(2);
console.log(rest);
// rest.clear();
const arr = [1, 2];
// rest.set([1, 2], 'Test');
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'heading');

console.log(rest);
console.log(rest.size);

console.log(rest.get(arr));
*/

/*
// Sets
const orders = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rissoto',
  'Pasta',
  'Pizza',
]);
console.log(orders);
console.log(new Set('Hasan'));

console.log(orders.size);
console.log(orders.has('Pizza'));
console.log(orders.has('Bread'));
orders.add('Garlic bread');
orders.add('Garlic bread');
orders.delete('Rissoto');
// orders.clear(); - deletes whole set
console.log(orders);

for (const order of orders) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);
console.log(new Set('Hasan Mujanovic').size);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
//1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
// POSTO JE SCORED ARRAY MORAMO NA OVAJ NACIN DA ZAPISUJEMO
const scoredGoal = game.scored.entries();
for (let [i, name] of scoredGoal) {
  console.log(`Goal: ${i + 1}: ${name}`);
}
// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const value = Object.values(game.odds);
console.log(value);
let sum = 0;
for (let i of value) {
  sum += i;
}
const average = sum / value.length;
console.log(average.toFixed(2));

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// const team1 = game.team1;
// const team2 = game.team2;
// const odd = Object.values(game.odds);
// console.log(`Odd of victory ${team1}: ${odd[0]} `);
// console.log(`Odd of draw: ${odd[1]} `);
// console.log(`Odd of victory ${team2}: ${odd[2]} `);

const entrie = Object.entries(game.odds);
let poruka = '';
for (let [team, odd] of entrie) {
  poruka +=
    team === 'x'
      ? `Odd of draw: ${odd}\n`
      : `Odd od victory ${game[team]}: ${odd}\n`;
}
console.log(poruka);
// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
console.log(game.scored);
let scorers = {};
for (const name of game.scored) {
  scorers[name] ? scorers[name]++ : (scorers[name] = 1);
}
console.log(scorers);
*/

/*

// Object Keys, Values, Entries

// Property names
const properties = Object.keys(openingHours);
console.log(properties);
let openStr = `we are open on ${properties.length} days: `;

for (const day of Object.keys(openingHours)) {
  openStr += `${day},`;
}
console.log(openStr);

// Property values

const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
console.log(entries);

// [key,value] - posto je ovde value object mozemo da ga destructurujemo
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we open at ${open} and close at ${close}`);
}
*/

/*
// Optional chaining
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`on ${day} we opet at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method doesnt exist');
console.log(restaurant.orderRisoto?.(0, 1) ?? 'Method doesnt exist');

// Arrays
// const user = [{ name: 'Jonas', email: 'hello@jonas.io' }];
const user = [];

console.log(user[0]?.name ?? 'User array empty');
if (user.length > 0) console.log(user[0].name);
else {
  console.log(`user array empty`);
}
*/

/*
// The for-of Loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
// console.log([...menu.entries()]);
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);


let team1W = team1 > team2 && 'Team 1 ima vise sansi za pobedu';
let team2W = team1 < team2 && 'Team 2 ima vise sansi za pobedu';
let message = team1W || team2W;
console.log(message);

const substitute = ['Thiago', 'Coutinho', 'Perisic'];
const players1Final = [...game.players[0], ...substitute];
console.log(players1Final);
const allPlayers = [...game.players[0], ...game.players[1]];
// console.log(allPlayers);
const [gk, ...fieldPlayers] = game.players[[0]];
console.log(gk, fieldPlayers);
function neka(...broj) {
  console.log(`${broj}, goals scored ${game.scored.length}`);
}
neka(game.scored);
*/
/*
const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// OR assignmet=nt operator //
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish assignment operator (null or undefined)
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

// AND assignmet=nt operator //

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// IF YOU EVER NEDD TO ASSIGN A VALUE TO A VARIABLE THAT IS ALREDY DEFINED, THAT HAS A VALUES THAT IS CURRENTLY TRUTHY, THEN YOU CAN USE AND ASSIGNMENT OPERATOR
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);
*/

/*
restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Nullish values: null and undefined (NOT 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);
*/

/*

// Short circuiting (&& and ||)

console.log('--------------OR---------');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);
restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------------AND ---------');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Spinaxh', 'Mushrrom');
}

restaurant.orderPizza && restaurant.orderPizza('Mushrrom','Spinach')

*/

/*

// Rest pattern and parameters

// 1) Destructuring

//SPREAD, BEACUSE ON RIGHT SIDE OF =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST BEACUSE ON LEFT SIDE OF =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// rest elemnt mora biti na kraju
const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, rissoto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i of numbers) {
    sum += i;
  }
  console.log(sum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 3, 5, 2, 4, 5, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('Mushroom', 'onion', 'olives', 'spinach');

*/

// restaurant.orderPizza('mushroom');

/*

// Spread operator //
const arr = [7, 8, 9];
const badNewArray = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArray);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Coppy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays, or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables are arrays, strings, maps, and sets, but not objects
const str = 'Jonas';
const letters = [...str, '', 'S'];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`) // Ne moze ovako da se koristi

// Real-world example
const ingridents = [
  // prompt(`Let\'s make pasta! Ingridient 1?`),
  // prompt(`Let\'s make pasta! Ingridient 2?`),
  // prompt(`Let\'s make pasta! Ingridient 3?`),
];
console.log(ingridents);
restaurant.orderPasta(...ingridents);

// Objects

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name, restaurant.name);

*/
/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables

let a = 111;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objescts
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/

/*
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// Switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

// Recieve 2 return values from function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

// Nested destrecturing
// const [i, , j] = nested;
// console.log(i, j);

// destructuring inside of destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
