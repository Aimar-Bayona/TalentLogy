/*Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.*/

let n = parseInt(prompt("Digite el total de notas"))
let notas = []

for (let i = 0; i < n; i++) {
    notas[i] = parseInt(prompt("Ingrese nota"))   
}

let acum = notas.reduce((acumulador, nota) => acumulador + nota, 0);

let aprobados = 0
let reprobados = 0

for (let i = 0; i < notas.length; i++) {
    if(notas[i]<(acum/notas.length)){
        reprobados++
    } else{
        aprobados++
    }
}
console.log("Promedio " + acum/notas.length);
console.log("Aprobados " + aprobados);
console.log("Reprobados " + reprobados);

