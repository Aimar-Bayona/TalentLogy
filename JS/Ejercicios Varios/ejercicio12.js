/*Visualizar la tarifa de la luz según el gasto de corriente eléctrica. Para un gasto  menor de 1.000Kwxh la tarifa es 1.2, entre 1.OOO y 1.850Kwxh es 1.0 y mayor de  1.85OKwxh 0.9.*/

let gasto = parseFloat(prompt("Digite el gato en Kwxh"))

if(gasto < 1000) {
    console.log("La tarifa es: 1.2");
} else if (gasto < 1850) {
    console.log("La tarifa es: 1.0");
} else {
    console.log("La tarifa es: 0.9");
}