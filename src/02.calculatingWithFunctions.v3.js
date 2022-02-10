// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const numsArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const ops = {
    plus: "+",
    minus: "-",
    times: "*",
    dividedBy: "/"
}

numsArr.forEach((v, i) => globalThis[v] = new Function("f", `return f == undefined ? ${i} : f(${i})`));
for (const op in ops) {
    globalThis[op] = new Function("b", `return a => Math.floor(a ${ops[op]} b)`)
}

console.log(seven(times(five())) == 35)