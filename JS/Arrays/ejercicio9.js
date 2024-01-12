/*Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:

    Todos los alumnos mayores de edad.
    Encontrar la edad mayor y obtener los alumnos que posean dicha edad.
*/

let nombres = []
let edades = []
let i = 0
let mayoresEdad = []

while (true) {
    nombres.push(prompt("Digite nombre"))
    if (nombres[i] == "*") {
        nombres.pop()
        break;
    }
    edades.push(prompt("Digite edad"))
    i++
}

for (let i = 0; i < nombres.length; i++) {
    if(nombres[i]>=18) mayoresEdad.push(i)
}

console.log("Todos los alumnos:");
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i] + " edad: " + edades[i]);
}

console.log("Alumnos mayores de edad:");
for (let i = 0; i < edades.length; i++) {
    if (edades[i] >= 18) {
        mayoresEdad.push(i);
        console.log(nombres[i] + " edad: " + edades[i]);
    }
}

let edadMaxima = Math.max(...edades)

console.log("Alumnos con la edad máxima (" + edadMaxima + "):");
for (let i = 0; i < edades.length; i++) {
    if (edades[i] == edadMaxima) {
        console.log(nombres[i] + " edad: " + edades[i]);
    }
}