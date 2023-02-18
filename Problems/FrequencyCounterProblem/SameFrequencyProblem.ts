function sameFrequency(number1, number2) {
  const num1 = String(number1);
  const num2 = String(number2);

  const counts = {};
  const counts2 = {};

  for (let char of num1) {
    counts[char] = counts[char] ? (counts[char] += 1) : 1;
  }

  for (let char of num2) {
    counts2[char] = counts2[char] ? (counts2[char] += 1) : 1;
  }

  console.log(counts);
  console.log(counts2);

  if (JSON.stringify(counts) === JSON.stringify(counts2)) {
    return true;
  }
  return false;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
