/*Suponga un array con N números enteros generados aleatoriamente y mostrados en pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.*/
let len = 0

do {
    len = parseInt(prompt("Digite un número impar"))
} while (len % 2 == 0);

let n = []

for (let i = 0; i < len; i++) {
    n[i] = parseInt(Math.random()*100)
}
console.log(n);
console.log(n[parseInt(n.length/2)]);
