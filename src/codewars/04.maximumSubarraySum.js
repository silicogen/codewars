// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c

var maxSequence = function (arr) {
    let m = 0;
    for (let i in arr) {
        let s = 0;
        for (let j = i; j < arr.length; j++) {
            s += arr[j];
            if (s > m) m = s;
        }
    }
    return m;
}