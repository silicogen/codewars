// https://www.codewars.com/kata/530e15517bc88ac656000716

const a = "a".charCodeAt(0)
const z = "z".charCodeAt(0)
const A = "A".charCodeAt(0)
const Z = "Z".charCodeAt(0)

shift = c => {
    if (c >= a + 13 && c <= z)
        return c - 13;
    if (c >= A + 13 && c <= Z)
        return c - 13;
    if (c >= a && c < a + 13)
        return z - 12 + c - a;
    if (c >= A && c < A + 13)
        return Z - 12 + c - A;
}

function rot13(message) {
    let s = ""
    for (let i in message) {
        s += String.fromCharCode(shift(message.charCodeAt(i)))
    }
    return s;
}