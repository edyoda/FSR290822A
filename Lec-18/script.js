// Number
var num = 20;//number
var numTwo = 20.36;//decimal number

//how to check datatype for a variable
console.log(typeof (num));//typeof is method
console.log(typeof (numTwo));
console.log(num);

//convert string to number
console.log(parseInt('89.88'));//return the integer number part
console.log(parseFloat('89.678'));//return the number
console.log(Number('89hj'));//NaN
console.log(Number('uehfij'));//NaN
console.log(typeof (NaN));//number
console.log(Number(' '));//0

//convert number to string
console.log(num.toString());//'20'
console.log(num.toFixed(3));//return a string value with fixed decimal places '20.00'
console.log(num.toExponential(3));//return a string withe exponenetial values (with specified decimal places)


//String
var firstName = ' ali na ';//leading and trailing spaces
var lastName = "joe";

//numeric string
// '89998'

//alpha string 
// 'hfgkhkj'

//alpha-numeric string 
// 'fijeij8989'

//non-numeric
// 'hgbfh' or '&$%^&**/(){}:"'

// properties & methods
//length 
console.log(firstName.length);//return the length of the string

// index/position starts from 0
var str = '  front-end _ development: html, css, js  are basic technologies of front-end develop    ';
console.log(str.length);

//searching in a string
console.log(str.indexOf('end', 20));//return the index/position value of the first occurence of the specified word
//optional, we can pass second parameter as index/position value(then it will start searching after that position value)

console.log(str.lastIndexOf('end'));//return the index/position value of the last occurence of the specified word
console.log(str.search('end'));//return the index/position value of the first occurence of the specified word
console.log(str.indexOf('hello'));//if word is not present, then it return -1
// console.log(str.indexOf("end", "html"));

//extraction of strings
console.log(str.slice(2, 8));//return the string from 2nd index till 7th index
console.log(str.slice(7));//return complete string from 7th index till the end
console.log(str.replace('end', 'HELLO'));//what word to replace, with what word
console.log(str.replaceAll('end', 'END'));

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.trim());//remove traling and leading spaces
console.log(str.charAt(9));//return character at specified index/position
console.log(str.charCodeAt(0));//return the unicode values

console.log(typeof (str));//

// var x = str.slice(2, 8);
// x.toLowerCase();
// console.log(x);

// Boolean
console.log(20 > 0);//
console.log(20 < -1);//
console.log(typeof (20 > 0));//boolean
console.log(typeof(true));

// undefined (absent or unknown value)
var val;
console.log(val);//variable is defined, but value is not defined
console.log(typeof (val));//undefined

// null (no value or empty value)
var numVal = null;
console.log(numVal);//null
console.log(typeof (numVal));//object


// console.log(t);//give errors (variable is not declared) 




//task
//extract first five letters from a string ('gfuh ieiuei')
//get the length of a string and make it uppercase ('hduej dij')
//take a string, make it lowerscase and trim it (' BVHDBGSH ISJI  ')
//revise primitive datatype
//replace specified word in a string ('', '')
//practice parseInt, parseFloat










