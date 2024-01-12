/*Pedir una calificación de 0 a 10 y mostrar de la siguiente manera: Insuficiente, Suficiente, Bien, Excelente*/

let calificacion = parseFloat(prompt("Digite la nota"))

if(calificacion <= 2.5) {
    console.log("Insuficiente")
} else if (calificacion < 5) {
    console.log("Suficiente")
} else if (calificacion < 7.5) {
    console.log("Bien")
} else {
    console.log("Excelente");
}