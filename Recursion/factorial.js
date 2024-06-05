const factorial = (n) => {
    if (n === 0) return 1;
    return n * factorial(n - 1);
};

const result1 = factorial(3); // -> 6
const result2 = factorial(6); // -> 720
const result3 = factorial(18); // -> 6402373705728000
const result4 = factorial(13); // -> 6227020800
const result5 = factorial(1); // -> 1
const result6 = factorial(0); // -> 1

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);