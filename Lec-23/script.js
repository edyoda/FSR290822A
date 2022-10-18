// declaration of function
// syntax
// function functionname() {

// }

function add() {
    //block of code
    var sum = 0;
    console.log(sum + 10 + 20);
}

// function calling from js code
add();
add();


//parameterized function
//reusability 
function subtract(a, b, c) {//parameters
    console.log(c);
    console.log(a - b);
    var result = 0;
    return result;
}

subtract(20, 10, [78, 565, 45]);//arguments

subtract(30, 5, [70, 45]);


//passing function as a value

//we can access global scope variable anywhere in this doc
// var x = 20;//global scope
// console.log(x);

function multiply(a, b) {
    // console.log(x);

    //local scope
    var result = a * b;

    return result;//we are returning the value from function
}


// console.log(result);//gives error
var r = multiply(20, 10);//passing function as a value
console.log(r);


//self-invoking function/ anonymous function
(function () {
    console.log(10 + 20);
})();

//parameterized
(function (x, y) {
    console.log(x - y);
})(20, 10);


// Hoisting
num = 90;//initializing
console.log(num);//using the variable
var num;//declaration


//initialization are not hoisted
var t;//declaration
console.log(t);//

t = 100;//initialization

//ideal way
var val = 20;


// Timing events methods
// setTimeout(function, millisecond);

// 1 sec = 1000ms

//callback function
setTimeout(function () {
    console.log('set Timeout');
}, 4000);//4 sec


setInterval(function () {
    console.log('set Interval');
}, 1000);//1 sec


// task
// create parametized method/function to multiply 3 numbers
// create parametized method to divide 2 numbers
// and display result in console




//callback
// function division(a, b) {
//     console.log(a / b);
// }

// function calculate(cb) {
//     cb(20, 2);
// }

// calculate(division);

