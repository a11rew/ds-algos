function LinkedList() {
  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  let length = 0;
  let head = null;

  this.append = function (element) {
    // Creates node and passes element as its value.
    let node = new Node(element),
      current;

    if (head === null) {
      // If list is empty make node head.
      head = node;
    } else {
      // set head node as current node
      current = head;

      while (current.next) {
        // Traverse list until node has no next pointer (i.e. end of list)
        current = curent.next;
      }
      // Add pointer to node being added to the list
      current.next = node;
    }

    length++;
  };

  this.removeAt = function (position) {
    // Validate position
    if (position < 0 || position >= length) return null;

    let current = head,
      previous,
      index = 0;

    // removing first item
    if (position === 0) {
      head = current.next;
    } else {
      // TIL evaluation and execution in js are as weird as everything else in js.
      while (index++ <= position) {
        // Traversal until position
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    length--;

    return current.element;
  };

  this.insert = function (position, element) {};
  this.remove = function (element) {};
  this.indexOf = function (element) {};
  this.isEmpty = function () {};
  this.size = function () {};
  this.toString = function () {};
  this.print = function () {};
}

let list = new LinkedList();
list.append(15);
list.append(10);
