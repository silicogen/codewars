// https://www.codewars.com/kata/59ae589c07157afba80000a7

//weirdReverse = a => a.map((_, i) => a[a.length - i - 1])

// Соответствует условию code.length<28chars. 
// Результат зависит от среды выполнения (в chrome и в Node разные результаты).
weirdReverse=a=>a.sort(_=>1) 