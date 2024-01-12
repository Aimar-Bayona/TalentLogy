/*Serie Fibonacci con Recursividad: 1.1.2.3.5.8…*/

let limite = parseInt(prompt("Digite el limite de la serie"))

function Fibonacci(limite) {
    if (limite <= 1) {
        return limite
    }
    return Fibonacci(limite - 1) + Fibonacci(limite - 2)
}

for (let i = 0; i < limite; i++) {
    console.log(Fibonacci(i));
}