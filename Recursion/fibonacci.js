const fibonacci = (n) => {
    if(n === 0 || n === 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const result1 = fibonacci(0); // -> 0
const result2 = fibonacci(2); // -> 1
const result3 = fibonacci(4); // -> 3
const result4 = fibonacci(8); // -> 21

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);