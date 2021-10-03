let fibonacciSequence = [0, 1, 1];

for (let i = 3; i < 72; i++) {
  fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
}

console.log(fibonacciSequence);
