// Arrays
//array elements
// index/position starts from 0
var num = [80, 78, 56, 34, 20];//array of numbers
var color = ['pink', 'red', 'blue', 'black'];//array of strings
var mix = [null, true, false, 90, 'value'];//

console.log(num.length);//length = number of elements

console.log(num);
console.log(num[2]);//accessing particular elememt in an array

console.log(typeof (num));//object

// verfication of array
console.log(Array.isArray(num));//if this return true, then its an array

//convert array to string
console.log(num.toString());

console.log(num.join('*'));
console.log(num.join('/'));
console.log(num.join(''));
console.log(num.join(' '));

//push() & pop()
color.pop();//remove last element from an array
console.log(color);//

color.push('white');//add new element at last in an array
console.log(color);

//shift() & unshift()
color.shift();//remove element from start in an array
console.log(color);

color.unshift('violet');//add new element at start in an array
console.log(color);

//splice: add & remove element from between array
color.splice(1, 1, 'black', 'yellow');//start index value from where you want to delete/add, how many elements to be deleted, new elements to be added
console.log(color);

//add in b/w
color.splice(2, 0, 'blue', 'orange');
console.log(color);

//delete in b/w
color.splice(2, 1);
console.log(color);

color.splice(2, color.length - 2);
console.log(color);

//concat
var concatArr = color.concat(num, mix);
console.log(concatArr);

//extract of array 
var extractArr = num.slice(0, 3);//return an array with 0, 1, 2 index
console.log(extractArr);

console.log(num);

//reverse
num.reverse();
console.log(num);


//split (convert string to array)
var str = '8-9-8-9-9';
console.log(str.split('-'));


//array of objects
var employee = [{
    name: 'alex',
    age: 20,
    contact: {
        number: 8090,
        address: ''
    }
}, {
    name: 'harry',
    age: 22,
    contact: {
        number: 889889,
        address: ''
    }
}, {
    name: 'alina',
    age: 24,
    contact: {
        number: 8709090,
        address: ''
    }
}];

console.log(employee);
console.log(employee[2].age);
console.log(employee[2].contact.number);
employee.push({
    name: 'alina',
    age: 24,
    contact: {
        number: 8709090,
        address: ''
    }
});

employee[2].name = 'alex';
console.log(employee);

//reverse a string using array methods
// var strVal = 'hihellhdij';//
// var val = strVal.split('');
// console.log(val);
// val.reverse();
// console.log(val.join(''));


//task
//create employee data using array of objects
//display first 3 elements in an array
//remove 4th (index) element and add 2 element there
//find the duplicate in a string (use array)
//reverse a string (use array method)