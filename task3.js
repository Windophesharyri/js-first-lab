let n = 100
let m = 99

let lk = m - n

let randomNumber = Math.round(Math.ceil(Math.random() * lk) + n)
let random = randomNumber % 2

console.log("Рандомное число:", (randomNumber - 1) - random)