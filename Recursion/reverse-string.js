const reverseString = (s) => {
    const arr = s.split('');
    if (s.length === 0) return '';
    let val = arr.pop();
    return val += reverseString(arr.join(''));
};

const result1 = reverseString("hello"); // -> "olleh"
const result2 = reverseString("abcdefg"); // -> "gfedcba"
const result3 = reverseString("stopwatch"); // -> "hctawpots"
const result4 = reverseString(""); // -> ""

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);