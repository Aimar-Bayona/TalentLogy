/*Dadas las horas trabajadas de una persona y el valor por hora. Calcular su salario e imprimirlo. */

let cantidad_horas = parseInt(prompt("Digite la cantidad de horas trabajadas"))
let valor_hora = parseFloat(prompt("Digite la el valor por hora trabajada"))

console.log("El salario es: " + (cantidad_horas * valor_hora) + "$");
