// Stack: last in, first out
// we need array to implement stack

//custom class
class Stack {
  constructor() {
    this.items = []; //items is our stack
  }

  //adding an element in stack
  addElement(ele) {
    this.items.push(ele);
  }

  //delete element from an stack
  deleteElement() {
    if (this.items.length == 0) {
      console.log("underflow");
    }
    return this.items.pop();
  }

  // get the top most element
  peek() {
    return this.items[this.items.length - 1]; //getting last element of an array
  }

  printStack() {
    this.items.map(function (ele) {
      console.log(ele);
    });
  }
}

var stack = new Stack();

//Insertion
stack.addElement(20);
stack.addElement(30);
stack.addElement(60);
stack.addElement(9);
stack.addElement(50);

stack.deleteElement();

console.log("peek ", stack.peek());

stack.printStack();

//Sorting & Merging
var res = [];
var tempStack = [];

function sortStack(resArr) {
  //merged Stack
  while (resArr.length != 0) {
    let tem = resArr[resArr.length - 1];
    resArr.pop();

    while (tempStack.length != 0 && tempStack[tempStack.length - 1] > tem) {
      resArr.push(tempStack[tempStack.length - 1]);
      tempStack.pop();
    }

    tempStack.push(tem);
  }
}

function sortedMerge(stackOne, stackTwo) {
  while (stackOne.length != 0) {
    res.push(stackOne[stackOne.length - 1]);
    stackOne.pop();
  }

  while (stackTwo.length != 0) {
    res.push(stackTwo[stackTwo.length - 1]);
    stackTwo.pop();
  }
  console.log(res);

  sortStack(res);
}

var stackOne = [];
var stackTwo = [];

stackOne.push(2);
stackOne.push(3);
stackOne.push(10);

stackTwo.push(20);
stackTwo.push(1);
stackTwo.push(30);

sortedMerge(stackOne, stackTwo);

//display stack
while (tempStack.length != 0) {
  console.log(tempStack[tempStack.length - 1]);
  tempStack.pop();
}

//Searching(binary search)