// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const numsArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const nums = numsArr.reduce((a, v, i) => { a[v] = i; return a; }, {});
const ops = {
    plus: "+",
    minus: "-",
    times: "*",
    dividedBy: "/"
}