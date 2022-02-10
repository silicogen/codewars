// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(second) {
    let s = second
    let m = Math.floor(s / 60)
    s = s % 60
    let h = Math.floor(m / 60)
    m = m % 60
    const pad = num => String(num).padStart(2, '0')
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
}