const iterativeFactorial = (num) => {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

const recursiveFactorial = (num) => {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}
