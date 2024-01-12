/*Una distribuidora de motocicletas tiene una promoción de fin de año qué consiste en lo siguiente. Las motos marca Honda tienen un descuento del 5%, las marcas Yamaha del 8% y las Suzuki del 10%, las otras marcas 2%*/

let marca = prompt("Digite la marca de la motocicleta")

if(marca == "Honda") {
    console.log("Promoción del 5%");
} else if (marca == "Yamaha") {
    console.log("Promoción del 8%");
} else if (marca == "Susuki") {
    console.log("Promoción del 10%");
} else {
    console.log("Promoción del 2%");
}