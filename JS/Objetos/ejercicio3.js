/*Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).

    El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
    Crea sus métodos get, set y toString.
    Tendrá dos métodos especiales:

Ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad introducida es negativa, no se hará nada.

Retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.*/

class Cuenta {

    constructor(titular, cantidad = 0) {
        this.titular = titular;
        this.cantidad = cantidad;
    }

    setTitular(titular) {
        this.titular = titular;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad;
    }

    getTitular() {
        return this.titular;
    }

    getCantidad() {
        return this.cantidad;
    }

    setCantidad(cantidad) {
        this.cantidad = cantidad
    }

    getCantidad() {
        return this.cantidad
    }

    ingresar(cantidad) {
        if (cantidad > 0) this.cantidad += cantidad
    }

    retirar(cantidad) {
        if (this.cantidad - cantidad < 0) {
            this.cantidad = 0
        } else {
            this.cantidad -= cantidad
        }
    }

    mostrar(){
        console.log("El titular de la cuenta es: " + this.getTitular() + 
        "\nLa cantidad de la cuenta es: " + this.getCantidad());
    }
}


let cuenta1 = new Cuenta("Aimar", 1000);
cuenta1.mostrar()
cuenta1.retirar(800)
cuenta1.mostrar()
cuenta1.ingresar(5)
cuenta1.mostrar()