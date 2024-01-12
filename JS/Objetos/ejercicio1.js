/*Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un constructor por defecto y los métodos getters y setters.*/

class Cuenta {

    constructor() {
        this.saldo = 0
    }

    getSaldo() {
        return this.saldo
    }

    setSaldo(saldo) {
        this.saldo = saldo
    }

    ingreso(monto) {
        if (monto > 0) {
            this.saldo += monto
        }
    }

    reintegro(monto) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto
        }
    }

    transferencia(monto, destino) {
        if (monto > 0 && monto <= this.saldo) {
            this.saldo -= monto
            destino.ingreso(monto)
        }
    }

}

let cuenta1 = new Cuenta();
let cuenta2 = new Cuenta();

cuenta1.ingreso(7000);
cuenta1.reintegro(150)
cuenta1.transferencia(500, cuenta2);

console.log("Saldo de cuenta1:", cuenta1.getSaldo());
console.log("Saldo de cuenta2:", cuenta2.getSaldo());