// Queue: FIFO

class Queue {
  constructor() {
    this.items = [];
  }

  //enqueue (adding element from end)
  enqueue(ele) {
    this.items.push(ele);
  }

  //  dequeue (removing element from beginning)
  dequeue() {
    return this.items.shift();
  }

  // front()
  front() {
    return this.items[0];
  }

  rear() {
    return this.items[this.items.length - 1];
  }

  printQueue() {
    // this.items.map(function (ele) {
    //     console.log(ele);
    // });

    while (this.items.length != 0) {
      console.log(this.items[0]);
      this.items.shift();
    }
  }
}

var q = new Queue();

q.enqueue(5);
q.enqueue(40);
q.enqueue(6);
q.enqueue(30);

q.dequeue();

console.log(q.front());
console.log(q.rear());

q.printQueue();

// task
// searhing, merging, sorting

// Debugging
// console.log()
// debugger
// break points

// for loops
// 1 iteration = 1 loop
// 1 statement -> initialization
// 2 statement -> condition
// 3 statememt -> inc/dec

// for(st1; st2 ; st3) {
//block of code
// }

// st1 -> st2 -> BOC -> st3 -> st2 -> BOC -> so on

//array
var num = [90, 88, 45, 39, 88];

for (var i = 0; i < num.length; i++) {
  console.log("elements", num[i]);

  //linear search
  if (num[i] == 100) {
    console.log("found");
    break;
  }
}


// task on loops
// use loops, conditional statements, take input from user
// multiplication table (ask number from user) 
// sum of digits (123: 1 + 2 + 3 = 6) or (1234 : 1 + 2 + 3 + 4 = 10)
// pallindrome string (aca: aca is a pallindrome, abc: cba is not a pallindrome) //array method
// display even numbers upto n number (ask user for number)
// take input from user, and check whether char is vowel or consonent
// count of even and odd number from 1 to 999
// count occurence of a particular charater in a string (hello: count of l is 2)
// sum and average of array elements [1, 9, 8];
// largest number in an array (do with loops)
// From 1 to 100, print "foo" if multiple of 3, "bar" if multiple of 5, if multiple of both display "hello" or else print the number
// e.g.
// 1
// 2
// foo
// 4
// bar
// foo


// ask array elements from user
// smallest number in an array
// biggest of even number in an array ([10, 12, 90, 93, 7]): biggest even number is 90
// add two array [10,20,30] + [1,2,3]: [11, 22, 33]
// reverse an array(with loops) [10, 78, 0]: [0, 78, 10]
 
//task
// remove duplicate items from an array [10, 50,20 67, 10, 20]: remove 10, 20
// find duplicate values in an array.(display index of duplicate values e.g. 0,2,4,5)
// find difference/subtraction in 2 arrays //[12, 56, 789] - [12, 56, 789]: [0, 0, 0]
// ask user, remove a specific element from an array [12, 56, 89]: remove 1 element
// on click of a button, add random element to an array [12]
