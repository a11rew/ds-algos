let Stack = (function () {
  const items = new WeakMap();

  class Stack {
    constructor() {
      items.set(this, []);
    }

    // The book specifies using the index n where n is length of array as top and index 0 as base
    // Using index 0 as top of stack and n as base

    push = function (element) {
      // adds element to top of stack
      let s = items.get(this);
      return s.unshift(element);
    };

    pop = function () {
      // removes top of stack and returns it
      let s = items.get(this);
      return s.shift();
    };

    peek = function () {
      // returns top of stack
      let s = items.get(this);

      return s[0];
    };

    isEmpty = function () {
      // returns Boolean corresponding to if stack is empty or not
      let s = items.get(this);
      return s.length === 0;
    };

    clear = function () {
      // removes all elements in stack
      let s = items.get(this);
      s = [];
    };

    size = function () {
      // returns size of stack
      let s = items.get(this);
      return s.length;
    };

    print = function () {
      let s = items.get(this);
      console.log(s.toString());
    };
  }

  return Stack;
})();

export default Stack;
