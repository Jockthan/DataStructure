// Group attempt
let anArray = [];

let base = anArray.length;
console.log(base);

const size = anArray.length;
console.log(size);

function isFull() {
  if (size - base === 1) {
    console.log('The array is full');
  }
}

isFull();

function isEmpty() {
  if (base === 0) {
    console.log('The array is empty');
  }
}

isEmpty();

function pushToArray(number) {
  if (size - base === 1) {
    console.log('The array is full');
  } else {
    anArray.push(number);
    base += 1;
    console.log(base);
  }
}

pushToArray(5);

function popToArray() {
  if (base === 0) {
    console.log('Array is empty, cannot pop');
  } else {
    anArray.pop();
    base -= 1;
    console.log('Element popped from the array');
  }
}

popToArray();

function clearArray() {
  if (base === 0) {
    console.log('Array is already empty');
  } else {
    anArray.length = 0;
    base = 0;
    console.log('Array cleared');
  }
}

clearArray();

function searchArray() {
  if (base === 0) {
    console.log('Array is empty, cannot search');
  } else {
    console.log('Can search the array');
  }
}

searchArray();

function pickFromArray() {
  if (base === 0) {
    console.log('Array is empty, cannot pick');
  } else {
    console.log('Can pick from the array');
  }
}

pickFromArray();

// Another attempt to solve it
function createStack() {
  const stack = [];

  function push(item) {
    stack.push(item);
  }

  function pop() {
    if (isEmpty()) {
      return "Stack is empty. Cannot pop.";
    }
    return stack.pop();
  }

  function peek() {
    if (isEmpty()) {
      return "Stack is empty. No top element.";
    }
    return stack[stack.length - 1];
  }

  function isEmpty() {
    return stack.length === 0;
  }

  function size() {
    return stack.length;
  }

  function clear() {
    stack.length = 0;
  }

  return {
    push,
    pop,
    peek,
    isEmpty,
    size,
    clear
  };
}

// Example usage:
const myStack = createStack();
myStack.push("apple");
myStack.push("banana");
myStack.push("cherry");
console.log(myStack.peek()); // Output: "cherry"
console.log(myStack.size()); // Output: 3
console.log(myStack.pop()); // Output: "cherry"
console.log(myStack.pop()); // Output: "banana"
console.log(myStack.isEmpty()); // Output: false
myStack.clear();
console.log(myStack.isEmpty()); // Output: true




// Second Attempt
class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty. Cannot pop.";
    }
    return this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return "Stack is empty. No top element.";
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  size() {
    return this.stack.length;
  }

  clear() {
    this.stack = [];
  }
}

const myStack = new Stack();
myStack.push("apple");
myStack.push("banana");
myStack.push("cherry");
console.log(myStack.peek()); 
console.log(myStack.size()); 
console.log(myStack.pop()); 
console.log(myStack.pop()); 
console.log(myStack.isEmpty()); 
myStack.clear();
console.log(myStack.isEmpty());

