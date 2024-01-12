/*Comprobar a través de un programa si un alumno aprobó o no un examen (Aprueba si su nota es mayor a 10.5).*/

let nota = parseFloat(prompt("Digite la nota"))

if (nota > 10.5) {
    console.log("Aprobo");
} else {   
    console.log("Reprobo");
}