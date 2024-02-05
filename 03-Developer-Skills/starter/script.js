// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*

function problem1(array) {
  let maxValue = array[0];
  let minValue = array[0];
  for (let i of array) {
    if (typeof i !== 'number') {
      continue;
    }
    if (array[0] < i && i > maxValue) {
      maxValue = i;
    }
    if (array[0] > i && minValue > i) {
      minValue = i;
    }
  }
  const amplitude = maxValue - minValue;
  return `Ampltitude: ${amplitude}`;
}
console.log(problem1(temperatures));

// PROBLEM 2:
// Function should now receive 2 arrays of temps

function problem2(array1, array2) {
  const mergeArray = array1.concat(array2);
  console.log(mergeArray);
  let maxValue = mergeArray[0];
  let minValue = mergeArray[0];
  for (let i of mergeArray) {
    if (typeof i !== 'number') continue;
    if (maxValue < i) {
      maxValue = i;
    }
    if (minValue > i) {
      minValue = i;
    }
  }
  console.log(maxValue);
  console.log(minValue);
  const amplitude = maxValue - minValue;
  return `Amplitude: ${amplitude}`;
}
const problem2Amplitude = problem2([3, 5, 1], [9, 0, 5]);
console.log(problem2Amplitude);
console.log(problem2([3, 5, 1], [9, 0, 5]));

*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //C) FIX BUG
    value: +prompt('Degrees celsius:'),
  };

  // B) FIND BUG
  console.log(measurement);
  console.table(measurement);

  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG

console.log(measureKelvin());
*/

// using a debugger
const calcAmplitudeBug = function (array1, array2) {
  const mergeArray = array1.concat(array2);
  console.log(mergeArray);
  let maxValue = 0;
  let minValue = 0;
  for (let i of mergeArray) {
    if (typeof i !== 'number') continue;
    if (maxValue < i) {
      maxValue = i;
    }
    if (minValue > i) {
      minValue = i;
    }
  }
  console.log(maxValue);
  console.log(minValue);
  const amplitude = maxValue - minValue;
  return `Amplitude: ${amplitude}`;
};
const bug2 = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY
console.log(bug2);

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// treba mi element i njegov indeks

/*
const codingChallenge = function (arr) {
  let element = '';
  let indeks = 0;
  let newString = '';
  for (let i = 0; i < arr.length; i++) {
    element = arr[i];
    indeks = i + 1;
    newString += ` ... ${element}ºC in ${indeks} days`;
  }
  return newString + ' ...';
};
console.log(codingChallenge([17, 21, 23]));
console.log(codingChallenge([12, 5, -5, 0, 4]));

*/
