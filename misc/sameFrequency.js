// Frequency counting pattern

const sameFrequency = (num1, num2) => {
  num1 = String(num1);
  num2 = String(num2);

  if (num1.length !== num2.length) return false;

  const countNum1 = {};
  const countNum2 = {};

  for (let i = 0; i < num1.length; i++) {
    countNum1[num1[i]] = countNum1[num1[i]] + 1 || 1;
  }
  for (let i = 0; i < num2.length; i++) {
    countNum2[num2[i]] = countNum2[num2[i]] + 1 || 1;
  }

  for (let num in countNum1) {
    if (countNum1[num] !== countNum2[num]) return false
  }

  return true;
}
