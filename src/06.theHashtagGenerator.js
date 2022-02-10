// https://www.codewars.com/kata/52449b062fb80683ec000024

function generateHashtag(str) {
    let arr = str.split(" ").filter(s => s != "")
    if (arr.length == 0)
        return false
    arr.forEach((s, i) => arr[i] = s.replace(/^./, s => s.toUpperCase()))
    let result = "#".concat(...arr);
    if (result.length > 140)
        return false;
    return result;
}