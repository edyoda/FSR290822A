class Node {
  constructor(element) {
    this.element = element; //value
    this.next = null; //pointer
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0; //size of linked list
  }

  add(element) {
    var node = new Node(element); //object
    console.log(node);

    var current; //to store current node

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }

    this.size++;
  }

  deleteNode(key) {
    var temp = this.head;
    var prev = null;

    //if key is present in head
    if (temp != null && temp.element == key) {
      this.head = temp.next;
      return;
    }

    //if key is not present in head
    while (temp != null && temp.element != key) {
      prev = temp;
      temp = temp.next;
    }

    if (temp == null) return 0;

    //unlinking the node from lineked list
    prev.next = temp.next;
  }

  search(x) {
    var current = this.head;
    while (current != null) {
      if (current.element == x) {
        console.log("found");
      }
      current = current.next;
    }
    console.log("not found");
  }

  size_of_list() {
    return this.size;
  }

  printList() {
    var nodeVal = this.head;
    // console.log(this.head);

    while (nodeVal) {
      console.log(nodeVal);
      nodeVal = nodeVal.next;
    }
  }
}

// creating first LinkedList
var list = new LinkedList();

// insertion
list.add(10);
list.add(20);
list.add(3);
list.add(2);

// length of linked list
console.log(list.size_of_list());

// deletion

list.deleteNode(10);

// searching
list.search(20);

// traversing
list.printList();

// creating 2 Linkedlist
var listSecond = new LinkedList();

// insertion
listSecond.add(1);
listSecond.add(100);
listSecond.add(90);
listSecond.add(55);

// merging

function merge(L1, L2) {
  var L3 = new Node(null);
  var prev = L3;

  while (L1 != null && L2 != null) {
    if (L1.element <= L2.element) {
      prev.next = L1;
      L1 = L1.next;
    } else {
      prev.next = L2;
      L2 = L2.next;
    }
    prev = prev.next;
  }

  if (L1 == null) {
    prev.next = L2;
  }

  if (L2 == null) {
    prev.next = L1;
  }

  return L3.next;
}

var finalList = merge(list, listSecond);
console.log(finalList);

console.log("merged list");

while (finalList.next) {
  console.log(finalList.head.next);
  finalList = finalList.next;
}

//task 
//sorting of linked list