// https://www.codewars.com/kata/52aae14aa7fd03d57400058f

function removeZeros(array) {
    array.sort((a, b) => ((a == 0 || a == "0") && b != 0 && b != "0") ? 1 : 0)
    return array;
}