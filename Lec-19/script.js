// conditional statements
// if() {
//blck of code
// }

var firstName = 'alina';
if (firstName == 'alina') {
    console.log(firstName);
}

// if else
if (firstName == 'alina') {
    console.log(firstName);
}
else {
    console.log('wrong input');
}

// Ternary operator (shortcut syntax for if & else)
// (condition) ? (its executed if it is true) : (its executed if it is false)
var result = (firstName == 'alina') ? (firstName) : ('wrong input');
console.log(result);

// else if
var lastName = 'jen';

if (firstName == 'alex') {
    console.log(firstName);
}
else if (lastName == 'jen') {
    console.log(lastName);
}
else if (firstName == 'alina') {
    console.log('correct');
}
else {
    console.log('wrong input');
}



// switch
var age = 18;
switch (age) {// age === case numbers
    case 1:
        console.log('wrong input');
        break;

    case 2:
        console.log('wrong input');
        break;

    case 18:
        // alert('eligible');
        break;

    default:
        console.log('default case');
        break;
}


// Operators
// Arithmetic operator
var num = 10;
var numTwo = 20;
var add = num + numTwo;//addition
var sub = numTwo - num;//subtraction
var mul = num * numTwo;//multiplication
var mod = numTwo % num;//modulus return remainder
var divi = numTwo / num;//dividion return quotient

// increment & decrement
sub++;//sub = sub + 1
add--;//add = add - 1

++sub;
--add;
console.log(add, sub, mul, mod, divi);

// post & pre increment/decrement
var x = ++mul;
// mul = mul + 1
// x = mul
console.log(x, mul);//201, 201

//
var y = mul++;
// y = mul;
// mul = mul + 1;
console.log(y, mul);

//
var numVal = num--;
// numVal = num;//10
// num = num - 1;//9

numVal++;//11
console.log(num, numVal);// 9 11

console.log(0 - 1);

//
var numResult = ++numTwo;
//numTwo = numTwo + 1;//21
//numResult = numTwo;//21

numResult++;//22
numTwo--;//20

console.log(numResult, numTwo);//22 20


// Opearor Precedence
//priority of opeartor in execution
//()
// * / -> first
// + - -> second 
// L -> R

var t = 10 + (70 / 10) * 9 - 10;
// 10 + 7 * 9 - 10;
// 10 + 63 - 10;
// 73 - 10
// 63

console.log(t);

// Assignment Operators
var val = 20;//assignmnet opearator

val += 5;//val = val + 5
val -= 10;//val = val - 10
val *= 2;//val = val * 2
val /= 10;//val = val / 10


// String Operators (+)
//concatenate
var str = 'hello';
var strVal = 'world';

console.log(str + ' ' + strVal);

//implicit coersion: automatic type conversion
console.log(20 + str);//20hello
console.log(20 * 20 + strVal);//
console.log(str + 20 + 20);
console.log(20 + str + 20);
console.log(strVal + 20);
console.log('20' / 20);//NaN
console.log(Number(''));//0
console.log('20hello' / 20);//NaN
console.log('20' + 20);//2020
console.log(10 + '0');

// Rules
//check for operator precedence
//operands
//numeric or non-numeric string
//result 

// Comparison Operator

var a = 9;
var b = '9';

console.log(a == b);//look for value
console.log(a === b);//look for value and datatype // strict checking
console.log(a != 10);//look for value
console.log(a !== '9');//look for value and datatype
console.log(a > 10);//false
console.log(9 < 10);//true
console.log(a >= 9);//
console.log(b <= 9);//

// Logical Operator
// && || !
console.log(a == b && a === b && a !== '9');//if all conditions are true, then it return true otherwise false
console.log(a == b || a === b || a !== '9');//if anyone statement is true, then it is true otherwise false
console.log((a == b || a === b) && (a !== '9'));//
console.log(!(a == b));//


console.log(false == null);//
console.log(true >  false);//1 > 0
console.log(undefined == null);//true
console.log((true + false) > 2);//


//task
//using conditional statements
//find the biggest of 3 numbers (89, 78, 56)

//value is even or odd
//given number is multiple of 3 or not e.g.10900
//check particular sub-word exist in a string or not e.g. i am learning js: 'js' exists or not

//calculate simple interest ((p/r * t) * 100 )
//given year leap year or not (29 in feb): 2020
//0-6 display day week depending upon what user is entering (0-> sunday) : using switch


//ATM Machine and style it
//balance & query
//withdraw (amount)
//change pin
//mini statement
//saving & current acc.
//print receipt
//enter pin nunber


// Implicit coersion:
//practice questions on implicit coersion
// console.log('A' - 1);//
// console.log('A' + 1);//A1
// console.log(2 + '2' + '2');//
// console.log('hello' + 'world' + 89);//
// console.log('hello' - 'world' + 89);//
// console.log('hello' + 78);//
// console.log('78' - 90 + '2');//
// console.log(2 - '2' + 90);//
// console.log(89 - '90' / 2);//
//console.log(true == false) > 2 


// practice expression with operators
// operator precedence (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

// practice on pre & post

//
//var numVal = 30;
//var u = --numVal;
//numVal++;
//console.log(u);//
//console.log(numVal);//

//
//var a = 40;
//var b = a++;
//b++;
//console.log(a);//
//console.log(b);//

//
// var f = 50;
// var g = f++;
// g--;
// console.log(g);//
// console.log(f);//

//
//var val = 10;
//val++;
//var h = --val;
//h++;
//console.log(h);
//console.log(val);

//
//var num = 20;
// num++;
// var t = ++num;
// num++;
// --num
// console.log(num, t);

//
//var num = 10;
// --num;
// var y = ++num + 10;
// --y;
// console.log(y);
// console.log(num);

//
//var num = 30;
// ++num;
// num++ - 10;
// console.log(num); 

