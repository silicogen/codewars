// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const t = (v, f) => f == undefined ? v : f(v)
const zero = f => t(0, f)
const one = f => t(1, f)
const two = f => t(2, f)
const three = f => t(3, f)
const four = f => t(4, f)
const five = f => t(5, f)
const six = f => t(6, f)
const seven = f => t(7, f)
const eight = f => t(8, f)
const nine = f => t(9, f)

const plus = b => a => a + b;
const minus = b => a => a - b;
const times = b => a => a * b;
const dividedBy = b => a => Math.floor(a / b)

console.log(seven(times(five())) == 35)