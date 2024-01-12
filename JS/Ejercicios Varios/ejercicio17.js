/*Ingresar por teclado el nombre, la edad y el sexo de cualquier persona e imprima, solo si la persona es de sexo masculino y mayor de edad, el nombre de la persona.*/

let nombre = prompt("Digite el nombre")
let sexo = prompt("Digite el sexo")
let edad = parseInt(prompt("Digite la edad"))

if((sexo == "masculino"|| sexo == "m") && edad >= 18) console.log(nombre);