// const button = document.querySelector('button');//step 2
// const output = document.querySelector('p');//step 3

// //Promisifying a built in API
// const setTimer = (duration) => {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve('Done!');
//   }, duration);
//   });
//   return promise;
// };

// function trackUserHandler() { //step 1
//   // console.log('Clicked!');//step 5
//   navigator.geolocation.getCurrentPosition(positionData => {
//     // setTimeout(() => {//this is a callback in a callback that is in a callback
//     //       console.log(positionData);
//     // }, 2000)
//     setTimer(2000).then(data => {
//       console.log(data, positionData);
//     })
//   }, err => {
//     console.log(err);
//   });
//   // setTimeout(() => {
//   //   console.log('Timer done!')
//   // }, 0)//this line would not run until the one under it finishes, this is the minimum time.
//   setTimer(1000).then(() => {
//     console.log('Timer done!');
//   });
//   console.log('Getting current position........')//executes first
// }

// button.addEventListener('click', trackUserHandler);//step 4
//The for loop will block the code execution for
//the click handler above until it finishes.  This is the single threaded.
// let result = 0;
// for(let i = 0; i < 100000000; i++) {
//   result += i;
// }

//console.log(result);

//More on promises and promise chaining
const button = document.querySelector("button");
const output = document.querySelector("p");

getPosition = (options) => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (err) => {
        reject(err); //pass the err object into reject
      },
      options
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

// function trackUserHandler() {
//   // navigator.geolocation.getCurrentPosition(
//   //   positionData => {
//   //     setTimer(2000).then(data => {
//   //       console.log(data, positionData);
//   //     })
//   //   },
//   //   err => {
//   //     console.log(err);
//   //   }
//   // );
//   let positionData;
//   getPosition()
//     .then(
//       (posData) => {
//         positionData = posData;
//         return setTimer(2000);
//       } /* , err => {
//     console.log(err);
//   } */
//     ).catch(err => {
//       console.log(err);
//       return 'On we go....'
//     })
//     .then((data) => {
//       console.log(data, positionData);
//     });
//   // setTimer(1000).then(() => {
//   //   console.log("Timer is done!");
//   // });
//   // console.log("Getting Position now...........");
// }

//button.addEventListener("click", trackUserHandler); //step 4

//Async Await Below, the code from above using async await

// async function trackUserHandler() {
//   //let positionData;
//   let posData; //set the variables storing information globally 
//   //so they are not just scoped for one part or another
//   let timerData;
//   try {
//     posData = await getPosition();
//     timerData = await setTimer(2000);
//   } catch (error) {
//     console.log(error);
//   }
//   console.log(timerData, posData);
// }

// button.addEventListener("click", trackUserHandler);

//promise.all() and promse.race()

async function trackUserHandler() {
  let posData;
  let timerData;
  try{
    posData = await getPosition();
    timerData = await setTimer(2000);
  } catch(error) {
    console.log(error);
  }
  console.log(timerData, posData);
}

button.addEventListener('click', trackUserHandler);

// Promise.race([ getPosition(), setTimer(1000) ])
// .then(data => {
//   console.log(data);
// });

// Promise.all([ getPosition(), setTimer(1000) ]).then(promiseData => {
//   console.log(promiseData);
// });

Promise.allSettled([ getPosition(), setTimer(1000) ]).then(promiseData => {
  console.log(promiseData);
});

