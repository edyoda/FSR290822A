// To run this file use the below command
// node react_day_1.js





//  Any declaration is moved to top of the scope 
// var a;

// function fun(){
//   console.log("hello")
// }

// console.log(a)


// a = 10;



// var a = 20;


// fun()


// a = 10;

// let b = 10; 

// a++;







// let a = 10;


// if(true){
//   var b = 20;
//   console.log(b)
// }


// console.log(b);


// console.log(a);


// const a = 10;
// a = 20;

// console.log(a)



// var
  // hoisting
  // Re-declared
  // Functional scoped

//let 
  // does not support hoisting
  // blocked scope
  // Cannot re-declared;

//const 
  // does not support hoisting
  // blocked scope
  // Cannot re-declared;
  // Value can not be re-assigned


// function abc() {
//   console.log("I am abc function");
// }

// let def = function(){
//   console.log("I am def function");
// }

// const xyz = () => {
//   console.log("I am xyz function");
// }


// const pqr = (x,y) => console.log(x,y)

// pqr(10)


// const sum = (x, y) => {
//   x+=12;
//   return x+y
// };

// console.log(sum(1,2))




// this


// function abc(){
//   console.log(this);
// }

// abc()

// const name = "Bikash Singh"
// const age = 17;

// const getMyName = () => "vivek Singh";

// console.log(`My name is ${getMyName()} , I am ${age} years old. I am${age >= 18 ? ' ' : ' not '}an adult`);





// let v = 10;

// if(true){
//   let b = 10;
// }

// function abc() {
//   let b = 10;


//   while(b > 0){
//     b--;
//     let c = 10;
//   }

//   console.log(c)

  
// }

// console.log(v)
// console.log(b)



// Primitive and reference

// number, string, boolean

// let a = 10;
// let b = a; 

// console.log(a , b)


// b = 30;
// console.log(a , b)



// let arr = [1,2,3,4,5]
// let arr1 = arr

// console.log(arr,arr1)


// arr[0] = 10

// console.log(arr,arr1)


// let obj = {a: 10 , b: 20};
// let obj2 = obj
// console.log(obj, obj2)

// obj2.a = 100


// console.log(obj, obj2)


// function abc(arr){
//   arr[0] = 100
//   console.log(arr, "Within the function");

// }

// let a  = [1,2,3,4]
// abc(a)
// console.log( a)



// function sum(a, b, c) {
//   console.log(a, b, c)
//   // let s = 0
//   // for(let i=0; i < arr.length; i++){
//   //   s += arr[i]
//   // }
//   // console.log(s)
// }


// // spread operator

// let a = [1,3,10]

// sum(...a);



// let a = [1,2,3,4]
// let b = [...a];

// a[0]= 100;

// console.log(a, b)


let obj1 = {a : 10, b : 20}

let obj2 = {...obj1} // {a: 10, b: 20}

obj2.a=100
console.log(obj1, obj2)


// const arr = [10, 20, 39];

// const [ ,firstIndex , secondIndex] = arr
// console.log(firstIndex, secondIndex)

// const obj = {fname: "Bikash" , lName: "Singh", age: 30}

// const {fname: firstName, lName} = obj;

// console.log(firstName,lName)


const l = `dfsdf ${100}`;
