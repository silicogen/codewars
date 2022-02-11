// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
    let [d, s, n, p] = [0, 0, { i: 0, v: 0 }, { i: 0, v: 0 }];
    for (const [i, v] of Object.entries(arr)) {
        s += v;
        if (s < 0 && s < n.v) n = { i, v: s };
        if (s > 0 && s > p.v) p = { i, v: s };
        if (n.i < p.i) d = p.v - n.v;
    }
    return d;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSequence(arr))
console.log(maxSequence(arr) == 6)