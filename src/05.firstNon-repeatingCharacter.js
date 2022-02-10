// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
    for (const c1 of s) {
        let found = 0
        for (const c2 of s) {
            if (c1.toLowerCase() == c2.toLowerCase())
                found++;
            if (found > 1)
                break;
        }
        if (found == 1)
            return c1
    }
    return ""
}