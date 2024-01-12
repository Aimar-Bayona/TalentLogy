/*Realizar un algoritmo para determinar cuánto ahorrará una persona en un año, si al final de cada mes deposita cantidades variables de dinero; además, se quiere saber cuánto lleva ahorrado cada mes.*/

let cont = 1, acum = 0

while(cont <= 12) {
    let saldo = parseFloat(prompt("Digite el ingreso del mes " + cont))
    acum += saldo
    console.log("Ahorrado hasta el mes " + cont + " es de: " + acum);
    cont++
}