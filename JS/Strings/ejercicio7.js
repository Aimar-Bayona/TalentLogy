/*Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que también funcione cuando el día o el mes se introduzcan con un solo carácter.*/

let fecha = prompt("Digite su fecha de nacimiento en formato (dd/mm/yyyy)")
let secciones = fecha.split("/")
let dia = secciones[0]
let mes = secciones[1]
let anio = secciones[2]

if (dia.length == 1) {
    dia = "0" + dia
}

if (mes.length == 1) {
    mes = "0" + mes
}
console.log("Día " + dia + "\nMes " + mes + "\nAño " + anio);

