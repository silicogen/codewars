// https://www.codewars.com/kata/55c04b4cc56a697bb0000048

function scramble(str1, str2) {
    counts = str => {
        let m = new Map()
        for (let c of str)
            m.set(c, str.split(c).length - 1)
        return m
    }
    let m1 = counts(str1);
    let m2 = counts(str2);

    for (const [k, v] of m2) {
        if (m1.get(k) == undefined || v > m1.get(k))
            return false;
    }
    return true;
}
console.log(scramble('katas', 'steak'))