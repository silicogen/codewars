// https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

const map = {
    zero: 0, one: 0, two: 0, three: 3, four: 4,
    five: 5, six: 6, seven: 7, eight: 8, nine: 9,
    plus: "+", minus: "-", times: "*", dividedBy: "/"
}

Object.entries(map).forEach(([k, v]) =>
    globalThis[k] = typeof v == "number"
        ? new Function("f", `return f == undefined ? ${v} : f(${v})`)
        : new Function("b", `return a => Math.floor(a ${v} b)`)
);

console.log(seven(times(five())) == 35);