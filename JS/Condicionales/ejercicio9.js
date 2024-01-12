/*Realizar un programa que pida tres números y diga cuál es el mayor, cuál es el segundo mayor, y cuál es el menor. (Mostrar: mayor: persona 1, medio: persona 3, menor: persona 2)*/

let numero1 = parseInt(prompt("Digite un número"))
let numero2 = parseInt(prompt("Digite un número"))
let numero3 = parseInt(prompt("Digite un número"))

if(numero1 > numero2 && numero1 > numero3){
    if(numero2 > numero3){
        console.log("mayor: " + numero1 + " medio: " + numero2 + " menor: " + numero3 );
    } else {
        console.log("mayor: " + numero1 + " medio: " + numero3 + " menor: " + numero2 );
    }
} else if (numero2 > numero1 && numero2 > numero3) {
    if(numero1 > numero3){
        console.log("mayor: " + numero2 + " medio: " + numero1 + " menor: " + numero3 );
    } else {
        console.log("mayor: " + numero2 + " medio: " + numero3 + " menor: " + numero1 );
    }
} else {
    if(numero1 > numero2){
        console.log("mayor: " + numero3 + " medio: " + numero1 + " menor: " + numero2 );
    } else {
        console.log("mayor: " + numero3 + " medio: " + numero2 + " menor: " + numero1 );
    }
}