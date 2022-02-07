function sumPairs(ints, s) {
  const l = ints.length;
  let m = l;
  let p = [NaN, NaN];
  for (let i = 0; i < l; i++)
    for (let j = i + 1; j < l; j++) {
      if (ints[i] + ints[j] == s) {
        let m1 = j > i ? j : i
        if (m1 < m) {
          m = m1;
          p = [ints[i], ints[j]]
        }
      }
    }
  if (m < l)
    return p;
  return undefined;
}
console.log(
  // sumPairs([1, 4, 8, 7, 3, 15], 8),
  sumPairs([1, -2, 3, 0, -6, 1], -6)
)