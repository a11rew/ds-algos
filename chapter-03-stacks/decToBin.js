import Stack from "./stack.js";

function decToBin(decNumber) {
  var remStack = new Stack(),
    rem,
    binStr = "";

  while (decNumber > 0) {
    rem = Math.floor(decNumber % 2);
    remStack.push(rem);
    decNumber = Math.floor(decNumber / 2);
  }

  while (!remStack.isEmpty()) {
    binStr += remStack.pop().toString();
  }

  return binStr;
}

console.log(decToBin(34555));
