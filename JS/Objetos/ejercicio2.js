/*Crea una clase Contador con los métodos para incrementar y decrementar el contador. La clase contendrá un constructor por defecto y los métodos getters y setters.*/

class Contador {

    constructor() {
        this.contador = 0
    }

    getContador() {
        return this.contador
    }

    setContador(contador) {
        this.contador = contador
    }

    incrementar() {
        return this.contador++
    }

    decrementar() {
        return this.contador--
    }

}

let contador = new Contador()
contador.setContador(5)
contador.decrementar()
contador.decrementar()
console.log(contador.getContador());