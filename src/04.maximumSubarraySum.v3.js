// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
    // i - везде обозначает координату

    // потенциал и максимальная разность потенциалов найденные до координаты i
    let [u, d] = [0, 0];

    // минимальный отрицательный и максимальный положительный потенциалы
    // с их координатами, найденные до текущей координаты i
    let [n, p] = [{ u: 0, i: 0 }, { u: 0, i: 0 }]
    for (const [i, v] of Object.entries(arr)) {
        u += v;
        if (u < 0 && u < n.u) n = { i, u };
        if (u > 0 && u > p.u) p = { i, u };
        if (n.i < p.i) d = p.u - n.u;
    }
    return d;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSequence(arr))
console.log(maxSequence(arr) == 6)