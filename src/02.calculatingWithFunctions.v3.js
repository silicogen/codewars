// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39


const log = m => console.log(m);
const numsArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
const n = numsArr
    .reduce((a, v, i) => {
        a[v] = new Function("f", `return f == undefined ? ${i} : f(${i})`);
        return a;
    }, {});

const ops = {
    plus: "+",
    minus: "-",
    times: "*",
    dividedBy: "/"
}

const opfs = {};
for (const op in ops) {
    opfs[op] = new Function("b", `return a => Math.floor(a ${ops[op]} b)`)
}

log(n.seven())
log(n.seven(opfs.times(n.five())) == 35)