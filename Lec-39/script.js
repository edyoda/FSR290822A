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
