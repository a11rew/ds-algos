let Queue = (function () {
  let items = new WeakMap();

  // Using array index 0 as queue tail and n as front

  class Queue {
    constructor() {
      items.set(this, []);
    }

    enqueue = function (element) {
      // Adds element to front of queue
      return items.get(this).unshift(element);
    };

    dequeue = function () {
      // Removes first item from queue
      return items.get(this).pop();
    };

    front = function () {
      // Returns first element from queue, queue is not modified
      let q = items.get(this);
      return q[q.length - 1];
    };

    isEmpty = function () {
      return items.get(this).length === 0;
    };

    size = function () {
      return items.get(this).length;
    };

    print = function () {
      console.log(items.get(this).toString());
    };
  }

  return Queue;
})();

export default Queue;
