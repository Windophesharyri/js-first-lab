a = 13.890123
b = 2.891564
n = 3

let floatA = Math.floor((a - Math.floor(a)) * Math.pow(10,n))
console.log("Дробное число", a, "с", n, "знаками после точки равно:", floatA)
let floatB = Math.floor((b - Math.floor(b)) * Math.pow(10,n))
console.log("Дробное число", b, "с", n, "знаками после точки равно:", floatB)


console.log("Число", floatA, "больше числа", floatB, ":", floatA > floatB)
console.log("Число", floatB, "больше числа", floatA, ":", floatB > floatA)
console.log("Числа", floatA, "и", floatB, "равны:", floatA === floatB)
console.log("Число", floatA, "больше, либо равно числу", floatB, ":", floatA >= floatB)
console.log("Число", floatB, "больше, либо равно числу", floatA, ":", floatB >= floatA)
console.log("Число", floatA, "не равно", floatB, ":", floatA != floatB)
console.log("Число", floatB, "не равно", floatA, ":", floatB != floatA)
