/*Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir los resultados obtenidos. Llamar a la clase Calculadora.*/

class Calculadora{

    constructor(){
        this.num1 = parseInt(prompt("Digite número"))
        this.num2 = parseInt(prompt("Digite número"))
    }

    getNumero1(){
        return this.num1
    }

    getNumero2(){
        return this.num2
    }

    setNumero1(num){
        this.num1 = num
    }

    setNumero2(num){
        this.num2 = num
    }

    sumar(n1, n2){
        return n1 + n2
    }

    restar(n1, n2){
        return n1 - n2
    }

    multiplicar(n1, n2){
        return n1 * n2
    }

    dividir(n1, n2){
        return n1 / n2
    }

    mostrar(){
        console.log(`Suma: ${this.sumar(this.num1, this.num2)}\nResta: ${this.restar(this.num1, this.num2)}\nMultiplicación: ${this.multiplicar(this.num1,this.num2)}\nDivision: ${this.dividir(this.num1, this.num2)}`);
    }
}

let calculadora = new Calculadora()
calculadora.mostrar()