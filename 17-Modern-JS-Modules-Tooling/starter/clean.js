const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);
// budget[0].value = 10200;
// budget[0] = 'jonas';

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});
// spendingLimits.jay = 200;
// console.log(spendingLimits);

const getLimit = (limts, user) => limts?.[user] ?? 0;

// PURE FUNCTION
const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // const limit = spendingLimits[user] ? spendingLimits[user] : 0;

  // const limit = getLimit(user);

  // ako je keyname isto kao i value ne mora se pise oboje, moze samo jedno
  // budget.push({ value: -value, description: description, user: user });
  // budget.push({ value: -value, description, cleanUser });

  return value <= getLimit(limits, cleanUser)
    ? [...state, { value: -value, description, cleanUser }]
    : state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

// const checkExpenses = function (state, limits) {
//   return state.map(entry => {
//     return entry.value < -getLimit(limits, entry.user)
//       ? { ...entry, flag: 'limit' }
//       : entry;
//   });
//   // for (const entry of budget) {
//   //   // let lim;
//   //   // if (spendingLimits[entry.user]) {
//   //   //   lim = spendingLimits[entry.user];
//   //   // } else {
//   //   //   lim = 0;
//   //   // }
//   //   // const limit = spendingLimits?.[entry.user] ?? 0;
//   //   if (entry.value < -getLimit(limts, entry.user)) {
//   //     entry.flag = 'limit';
//   //   }
//   // }
// };

const checkExpenses2 = (state, limits) =>
  state.map(entry =>
    entry.value < -getLimit(limits, entry.user)
      ? { ...entry, flag: 'limit' }
      : entry
  );

const finalBudget = checkExpenses2(newBudget3, spendingLimits);

console.log(finalBudget);

// const logBigExpenses = function (bigLimit) {
//   let output = '';
//   for (const entry of budget) {
//     // if (entry.value <= -bigLimit) {
//     //   output += `${entry.description.slice(-2)} /`; // Emojis are 2 chars
//     // }

//     output +=
//       entry.value <= -bigLimit ? `${entry.description.slice(-2)} /` : '';
//   }
//   output = output.slice(0, -2); // Remove last '/ '
//   console.log(output);
// };

// Impure
const logBigExpenses = function (state, bigLimit) {
  const bigExpenses = state
    .filter(entry => entry.value <= -bigLimit)
    .map(entry => entry.description.slice(-2))
    .join(' / ');
  // .reduce((str, curr) => `${str} / ${curr.description.slice(-2)}`, '');
  console.log(bigExpenses);
};

logBigExpenses(finalBudget, 1000);
