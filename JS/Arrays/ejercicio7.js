/*Recibes un Array de números y debes retornar un Array en donde cada número sea multiplicado por dos (Utilizar métodos de array). */

let x = parseInt(prompt("Digite el tamaño del Array"))
let n = []

for (let i= 0; i< x; i++) {   
    n[i] = prompt("Digite número")
}

console.log(n.map(function (i) {
    return i*2
}));