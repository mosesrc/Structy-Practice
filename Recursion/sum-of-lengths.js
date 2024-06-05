const sumOfLengths = (strings) => {
  if (strings.length === 0) return 0;
  const val = strings[strings.length - 1].length;
  strings.pop();
  return val + sumOfLengths(strings);
};

const result1 = sumOfLengths(["goat", "cat", "purple"]); // -> 13
const result2 = sumOfLengths(["bike", "at", "pencils", "phone"]); // -> 18
const result3 = sumOfLengths(["", " ", "  ", "   ", "    ", "     "]); // -> 15

console.log(result1);
console.log(result2);
console.log(result3);