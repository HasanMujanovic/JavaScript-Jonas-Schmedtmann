'use strict';
// https://restcountries.com/v2/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = ` <article class="country ${className}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
  </div>
</article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};
const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

// const getCountryData = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();
//   // console.log(this.responseText);

//   request.addEventListener('load', function () {
//     console.log(this.responseText);
//     const [data] = JSON.parse(this.responseText); //This is array containing one object so we can destructure it
//     console.log(data);

//     const html = ` <article class="country">
//   <img class="country__img" src="${data.flag}" />
//   <div class="country__data">
//     <h3 class="country__name">${data.name}</h3>
//     <h4 class="country__region">${data.region}</h4>
//     <p class="country__row"><span>👫</span>${(
//       +data.population / 1000000
//     ).toFixed(1)} people</p>
//     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//   </div>
// </article>`;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('serbia');
// getCountryData('usa');
// getCountryData('germany');

// Welcome to Callback Hell

/*
const getCountryAndNeighbour = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  // console.log(this.responseText);

  request.addEventListener('load', function () {
    console.log(this.responseText);
    const [data] = JSON.parse(this.responseText); //This is array containing one object so we can destructure it
    console.log(data);

    //Render country 1
    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('serbia');
getCountryAndNeighbour('turkey');

setTimeout(() => {
  console.log(`1 sec passed`);
  setTimeout(() => {
    console.log(`2 sec passed`);
    setTimeout(() => {
      console.log(`3 sec passed`);
      setTimeout(() => {
        console.log(`4 sec passed`);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
*/

// Promises and the Fetch API

//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v2/name/${country}`);
//   request.send();

const request = fetch('https://restcountries.com/v2/name/serbia');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };
const getJSON = function (url, errorMsg = 'Something went wron') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if (!response.ok) throw new Error(`Country not found ${resposne.status}`);
//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       // const neighbour = data[0].borders?.[0];
//       const neighbour = 'asdasdasd';

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`Country not found ${resposne.status}`);
//       return response.json();
//     })
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(`xxx ${err} xxx`);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };
// btn.addEventListener('click', function () {
//   getCountryData('serbia');
// });
// getCountryData('germanasdadasy');

/*
const getCountryData = function (country) {
  // Country 1

  getJSON(`https://restcountries.com/v2/name/${country}`, `Country not found`)
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      // const neighbour = 'asdasdasd';
      if (!neighbour) throw new Error('No neighbour found');

      // Country 2
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Country not found`
      );
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`--- ${err} ---`);
      renderError(`Something went wrong ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};
btn.addEventListener('click', function () {
  getCountryData('serbia');
});
getCountryData('australia');
*/

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.

Here are your tasks:

PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.

PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474

GOOD LUCK 😀
*/
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/

// The Event Loop in Practice
/*
console.log('Test start');
setTimeout(() => console.log('0sec timer'), 0);
Promise.resolve(`Resolvved promise1`).then(res => console.log(res));

Promise.resolve('Resolve promise 2').then(res => {
  for (let i = 0; i < 1000000000; i++) {}
  console.log(res);
});

console.log('test end');
*/

// Building a Simple Promise
/*

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(function () {
    if (Math.random() >= 0.5) {
      resolve('You WIN');
    } else {
      reject(new Error('You lost'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};
wait(1)
  .then(() => {
    console.log(`1 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`2 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`3 sec passed`);
    return wait(1);
  })
  .then(() => {
    console.log(`4 sec passed`);
    return wait(1);
  });

// setTimeout(() => {
//   console.log(`1 sec passed`);
//   setTimeout(() => {
//     console.log(`2 sec passed`);
//     setTimeout(() => {
//       console.log(`3 sec passed`);
//       setTimeout(() => {
//         console.log(`4 sec passed`);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

Promise.resolve('abc').then(res => console.log(res));
Promise.reject(new Error('Probljemi nervoza stres')).catch(res =>
  console.error(res)
);
*/

// Promisifying the Geolocation API

/*
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => reject(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = function () {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
      return res.json();
    })
    .then(data => {
      console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);

      return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found (${res.status})`);

      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
btn.addEventListener('click', whereAmI);
*/

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.

Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉

PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.

If this part is too tricky for you, just watch the first part of the solution.

PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.

TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.

GOOD LUCK 😀
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
*/
/*
let divLocation = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    let imgElement = document.createElement('img');
    imgElement.src = imgPath;

    imgElement.addEventListener('load', function () {
      divLocation.append(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener('error', function () {
      reject(new Error('No img'));
    });
  });
};
let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log(currentImg);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log(currentImg);
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

/*
// Consuming Promises with Async/Await

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    //Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    // Country data

    // fetch(`https://restcountries.com/v2/name/${country}`).then(res=>console.log(res))

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    renderCountry(data[0]);
    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (err) {
    console.error(`${err} nas error`);
    renderError(`--${err.message}`);

    // Reject promise returned from async function
    throw err;
  }
};
console.log(`1: Will get location`);
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message} --`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const gdeSam = await whereAmI();
    console.log(`2: ${gdeSam}`);
  } catch (err) {
    console.log(`2: ${err.message} --`);
  }
  console.log('3: Finished getting location');
})();

// try...catch

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }
*/

/*
// Running Promises in Parallel

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [dataC1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [dataC2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [dataC3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log(dataC1.capital, dataC2.capital, dataC3.capital);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital));
  } catch (err) {}
};

get3Countries('portugal', 'canada', 'serbia');
*/

/*
// Other Promise Combinators: race, allSettled and any

// Promise.race - we get only one result. Whoever loads first. Promise that gets rejected also can be accepted

(async function () {
  const response = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/${'egypt'}`),
    getJSON(`https://restcountries.com/v2/name/${'italy'}`),
    getJSON(`https://restcountries.com/v2/name/${'mexico'}`),
  ]);
  console.log(response[0]);
})();

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('request took too long'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/${'mexico'}`),
  timeout(1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.log(err));

// Promise.allSetled
Promise.allSettled([
  Promise.resolve('succes'),
  Promise.reject('Error'),
  Promise.resolve('Another succes'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('succes'),
  Promise.reject('Error'),
  Promise.resolve('Another succes'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any [ES2021]

Promise.any([
  Promise.resolve('succes first'),
  Promise.reject('Error'),
  Promise.resolve('Another succes'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
*/

///////////////////////////////////////
// Coding Challenge #3

/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'paralell' class to all the images (it has some CSS styles).

TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

let divLocation = document.querySelector('.images');

const wait = function (seconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, seconds * 1000);
  });
};

const createImage = async function (imgPath) {
  return new Promise(function (resolve, reject) {
    let imgElement = document.createElement('img');
    imgElement.src = imgPath;

    imgElement.addEventListener('load', function () {
      divLocation.append(imgElement);
      resolve(imgElement);
    });

    imgElement.addEventListener('error', function () {
      reject(new Error('No img'));
    });
  });
};

let currentImg;
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log(`img 1 loaded`);
    await wait(2);
    img.style.display = 'none';
    let img2 = await createImage('img/img-2.jpg');
    console.log(`img 2 loaded`);
    await wait(2);
    img2.style.display = 'none';
  } catch (err) {
    console.log(err);
  }
};

// loadNPause();

// PART 2
// 1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
// 2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
// 3. Check out the 'imgs' array in the console! Is it like you expected?
// 4. Use a promise combinator function to actually get the images from the array 😉
// 5. Add the 'paralell' class to all the images (it has some CSS styles).

// TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

const loadAll = async function (imgArr) {
  const imgs = imgArr.map(async img => await createImage(img));
  console.log(imgs);

  const imgsEl = await Promise.all(imgs);
  console.log(imgsEl);

  imgsEl.forEach(img => img.classList.add('parallel'));
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
