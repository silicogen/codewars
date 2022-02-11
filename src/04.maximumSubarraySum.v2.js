// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
    let [m, s, n, p, ni, pi] = [0, 0, 0, 0, 0, 0];
    for (const [i, v] of Object.entries(arr)) {
        s += v;
        if (s < 0 && s < n) {
            n = s; ni = i;
        }
        if (s > 0 && s > p) {
            p = s; pi = i
        }
        if (ni < pi) {
            m = p - n
        }
    }
    return m;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSequence(arr))
console.log(maxSequence(arr) == 6)