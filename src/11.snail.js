// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

snail = function (a) {
    if (a[0].length == 0)
        return [];
    const r = [];
    let [hb, he, vb, ve] = [0, a.length - 1, 0, a.length - 1];
    while (hb <= he && vb <= ve) {
        for (let i = hb; i <= he; i++) {
            r.push(a[vb][i]);
        }
        vb++;
        for (let i = vb; i <= ve; i++) {
            r.push(a[i][he]);
        }
        he--;
        for (let i = he; i >= hb; i--) {
            r.push(a[ve][i]);
        }
        ve--;
        for (let i = ve; i >= vb; i--) {
            r.push(a[i][hb]);
        }
        hb++;
    }
    return r;
}