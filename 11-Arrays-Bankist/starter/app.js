/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
let currentAcc;

accounts.forEach((value, i, ent) => {
  value.username = value.owner
    .toLowerCase()
    .split(' ')
    .map(x => x[0])
    .join('');
});

// Page look
const displayPage = function (acc) {
  containerMovements.innerHTML = '';
  // textContent = 0

  acc.movements.forEach(function (mov, i) {
    const type = mov > 0 ? `deposit` : `withdrawal`;

    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${type}"> ${
      i + 1
    } ${type} </div>
          <div class="movements__value">${mov}</div>
        </div>
        `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });

  labelWelcome.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;

  if (acc.movements.some(x => x < 0)) {
    labelSumIn.textContent = acc.movements
      .filter(x => x > 0)
      .reduce((acc, sum) => acc + sum);
    labelSumOut.textContent = acc.movements
      .filter(x => x < 0)
      .reduce((acc, sum) => acc + sum);
    labelSumInterest.textContent = acc.movements
      .filter(x => x > 0)
      .map(x => (x * acc.interestRate) / 100)
      .filter(x => x > 1)
      .reduce((acc, sum) => acc + sum);
    labelBalance.textContent = acc.movements.reduce((acc, sum) => acc + sum);
  } else {
    labelSumIn.textContent = acc.movements
      .filter(x => x > 0)
      .reduce((acc, sum) => acc + sum);
    labelSumInterest.textContent = acc.movements
      .filter(x => x > 0)
      .map(x => (x * acc.interestRate) / 100)
      .filter(x => x > 1)
      .reduce((acc, sum) => acc + sum);
    labelBalance.textContent = acc.movements.reduce((acc, sum) => acc + sum);
  }
};

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentAcc = accounts.find(acc => acc.username === inputLoginUsername.value);

  if (currentAcc.pin === Number(inputLoginPin.value)) {
    document.querySelector('.app').style.opacity = 100;
  }
  // page looks
  displayPage(currentAcc);

  inputLoginUsername.value = inputLoginPin.value = '';
});

btnTransfer.addEventListener('click', function (e) {
  console.log(currentAcc);
  let transferAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);

  if (
    accounts.find(acc => acc.username === inputTransferTo.value) &&
    currentAcc.movements.reduce((acc, sum) => acc + sum) >
      Number(inputTransferAmount.value) &&
    currentAcc.username !== inputTransferTo.value
  ) {
    currentAcc.movements.push(-amount);
    displayPage(currentAcc);

    transferAcc.movements.push(amount);
  }

  inputTransferTo.value = inputTransferAmount.value = '';
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  let amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAcc.movements.some(x => x >= amount / 10)) {
    currentAcc.movements.push(amount);
  }

  displayPage(currentAcc);

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  let closePin = Number(inputClosePin.value);

  let accIndex = accounts.findIndex(
    x => x.username === inputCloseUsername.value
  );
  console.log(accIndex);

  if (
    currentAcc.username === inputCloseUsername.value &&
    currentAcc.pin === closePin
  ) {
    accounts.splice(accIndex, 1);
    document.querySelector('.app').style.opacity = 0;
  }
  console.log(accounts);

  inputClosePin.value = inputCloseUsername.value = '';
});
