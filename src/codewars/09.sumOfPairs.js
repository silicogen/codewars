// https://www.codewars.com/kata/54d81488b981293527000c8f

function sumPairs(ints, s) {
    const l = ints.length;
    let m = l;
    let p;
    for (let i = 0; i < l; i++)
        for (let j = i + 1; j < l; j++) {
            if (ints[i] + ints[j] == s) {
                const ij = j > i ? j : i
                if (ij < m) {
                    m = ij;
                    p = [ints[i], ints[j]]
                }
            }
        }
    if (m < l)
        return p;
    return undefined;
}