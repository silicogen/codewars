// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s = "") {
    const m = new Map();
    for (const c of s) {
        const C = c.toUpperCase();
        m.set(C, m.has(C) ? undefined : c)
    }

    for (const c of m.values())
        if (c) return c;
    return ""
}

console.log('sTreSS')
console.log(firstNonRepeatingLetter('sTreSS'))
console.log(firstNonRepeatingLetter('sTreSS') == "T")