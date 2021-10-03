// Extension of decToBin modified to work with any base

import Stack from "./stack.js";

function decToBin(decNumber, base) {
  var remStack = new Stack(),
    rem,
    binStr = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / base);
  }

  while (!remStack.isEmpty()) {
    binStr += remStack.pop().toString();
  }

  return binStr;
}

console.log(decToBin(34555, 5));
