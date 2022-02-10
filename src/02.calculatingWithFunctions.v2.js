// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

// const ops = {
//     plus: "+",
//     minus: "-",
//     times: "*",
//     dividedBy: "/"
// }
const numsArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const nums1 = numsArr.reduce((a, v, i) => { a[v] = i; return a; }, {});
const nums = numsArr.reduce((a, v, i) => { a[v] = i; return a; }, {});



const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => Math.floor(a / b)

console.log(seven(times(five())) == 35)