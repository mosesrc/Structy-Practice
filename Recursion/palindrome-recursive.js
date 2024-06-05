const palindrome = (s) => {
    if (s.length === 0) return true;
    if (s.length === 1) return true;
    if (s[0] !== s[s.length - 1]) return false;

    let start = 0;
    let end = s.length - 1;
    const str = s.slice(++start, end);

    return palindrome(str);
};

const result1 = palindrome("kayak"); // -> true
const result2 = palindrome("boot"); // -> false
const result3 = palindrome("rotator"); // -> true
const result4 = palindrome("abcbca"); // -> false

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

