let Stack = (function () {
  const items = new WeakMap();

  class Stack {
    constructor() {
      this.items = [];
    }

    // The book specifies using the index n where n is length of array as top and index 0 as base
    // Using index 0 as top of stack and n as base

    push = function (element) {
      // adds element to top of stack
      return this.items.unshift(element);
    };

    pop = function () {
      // removes top of stack and returns it
      return this.items.shift();
    };

    peek = function () {
      // returns top of stack
      return this.items[0];
    };

    isEmpty = function () {
      // returns Boolean corresponding to if stack is empty or not
      return this.items.length === 0;
    };

    clear = function () {
      // removes all elements in stack
      this.items = [];
    };

    size = function () {
      // returns size of stack
      return this.items.length;
    };

    print = function () {
      console.log(this.items.toString());
    };
  }

  return Stack;
})();

export default Stack;
