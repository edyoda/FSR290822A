// To run this use the below command
// node react_day_4_promises.js

/**
 * 1. Pending
 * 2. Fulfilled/ Resolved
 * 3. Rejected
 *
 */

// class Promise {
//     constructor(cb){
//         cb(this.resolve, this.reject)

//     }

//     resolve(){

//     }

//     reject(){

//     }
// }

function delay(timeInSeconds) {
  const myPromise = new Promise((resolve, reject) => {
    if (timeInSeconds > 3) {
      reject("The time is large");
    } else {
      setTimeout(() => {
        resolve(`I have been resolve after ${timeInSeconds} seconds`);
      }, timeInSeconds * 1000);
    }
  });

  return myPromise;
}

// delay(2)
//   .then((response) => {
//     console.log("I am in then ");
//     console.log(response);
//     return response;
//   })
//   .then((response) => {
//     console.log("I am then 2", response);
//     return 3;
//   })
//   .then((response3) => {
//     console.log("I am then 3", response3);
//   })
//   .catch((err) => {
//     console.log("Err:", err);
//   })
//   .finally(() => {
//     console.log("I am finally");
//   });

// console.log("statement two");

// async/await

// Homework
// function get(url){
//     new Promise((resolve,reject) => {
//         $.get("url", (response) => {/***somecode*/})
//     })
// }
// get("").then(response => {console.log(response)})

const myPromise = new Promise((resolve, reject) => {
  resolve("Something");
});

const myPromiseHandler = data => new Promise((resolve, reject) => {
    resolve(data + "happened");
});


myPromise.then(myPromiseHandler).then(response => {
    console.log(response)
})