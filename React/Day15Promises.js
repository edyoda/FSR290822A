// const prom = new Promise((resolve, reject)=> {
//     setTimeout(() => {
//         resolve(100)
//     }, 1000)
// })

// prom.then((res) => {
//     console.log("Incoming data => ", res)
// }).catch(err => {
//     console.log(err);
// })

function delay(timeInSec) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(timeInSec * 100);
    }, timeInSec * 1000);
  });
}

// delay(2).then((res) => {
//   console.log(res);
//   return delay(1)
// }).then((res) => console.log(res));

// const test = async () => {}

// async function test (){

// }

// const test = async () => {
//     return 1

// }

// const test1 = () => {}
// console.log(test1())

// console.log(test().then(res => console.log(res)))

const testDelay = async () => {
//   delay(2)
//     .then((res) => {
//       console.log(res);
//       return delay(1);
//     })
//     .then((res) => console.log(res));


    const responseAfter2seconds = await delay(2);
    console.log(responseAfter2seconds)
    const responseAfter1second = await delay(1);
    console.log(responseAfter1second);

    return responseAfter1second + responseAfter2seconds;


};




const testErrors = () => {

    try{
        const x = 100;
        x = 1000;
        console.log(x);

    }catch(err){
        console.log("My Error");

    }finally{
        console.log("Finally")
    }
}



testErrors();