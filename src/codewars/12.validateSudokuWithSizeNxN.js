// https://www.codewars.com/kata/540afbe2dc9f615d5e000425

var Sudoku = function (data = [[]]) {
    const l = data.length;
    const s = Math.sqrt(l);

    const badSequance = a =>
        (new Set(a)).size < a.length;

    function* transp(a = []) {
        for (let i = 0; i < a.length; i++)
            yield (function* () {
                for (const x of a)
                    yield x[i]
            })()
    }

    function* seq(b = 0) {
        const end = b + s
        while (b < end)
            yield b++;
    }

    function badBigArr() {
        if ([data, transp(data)]
            .some(g => {
                for (const a of g)
                    if (badSequance(a))
                        return true;
                return false;
            })
        ) return false;
    }

    function badSmallArrs() {
        for (let i1 of seq(0)) {
            for (let j1 of seq(0)) {
                const st = new Set();
                for (let i2 of seq(i1 * s)) {
                    for (let j2 of seq(j1 * s))
                        st.add(data[i2][j2])
                }
                if (st.size < l)
                    return true;
            }
        }
        return false;
    }

    return {
        isValid() {
            if (s - Math.trunc(s))
                return false;

            if (data.some(x => x.length != l))
                return false;

            if (data.some(a => a.some(e => e < 1 || l < e)))
                return false;

            if (badBigArr() || badSmallArrs())
                return false;

            return true;
        }
    };
};