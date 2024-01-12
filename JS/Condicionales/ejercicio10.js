/*Pida a usuario la edad y el sexo, para que la computadora le indique si ya puede jubilarse. Tome en cuenta que un Hombre se puede jubilar cuando tenga 60 años o más, en cambio, una mujer mayor se jubilara si tiene más de 54 años.*/

let sexo = prompt("Digite la sexo Femenino(f) o Masculino(m)")
let edad = parseInt(prompt("Digite la edad"))

if(sexo == 'f' && edad > 54) console.log("Puede jubilarse");
if(sexo == 'm' && edad > 60) console.log("Puede jubilarse");
