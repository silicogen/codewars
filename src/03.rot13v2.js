// https://www.codewars.com/kata/530e15517bc88ac656000716

const az = "abcdefghijklmnopqrstuvwxyz"
const AZ = az.toUpperCase();

const shift1 = (c, et = []) => {
    const i = et.indexOf(c);
    if (i < 0)
        return undefined;
    if (i < 13)
        return et[i + 13];
    else
        return et[i - 13];
}

const shift = c => shift1(c, az) ?? shift1(c, AZ)

function rot13(message) {
    let s = ""
    for (let c of message) {
        s += shift(c)
    }
    return s;
}

console.log(rot13("test") == "grfg")
console.log(rot13("Test") == "Grfg") 