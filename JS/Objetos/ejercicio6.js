/*Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los métodos para inicializar los atributos, imprimir el valor del lado con un tamaño mayor y el tipo de triángulo que es (equilátero, isósceles o escaleno).*/

class Triangulo {

    setValor(a, b, c) {
        this.a = a
        this.b = b
        this.c = c
    }

    obtenerNombre(){
        if(this.a == this.b && this.a == this.c) {
            console.log("Triángulo equilátero");
        } else if (this.a != this.b && this.b != this.c && this.a != this.c) {
            console.log("Triángulo escaleno");
        } else {
            console.log("Triángulo isósceles");
        }
    }

}

let triangulo = new Triangulo()
triangulo.setValor(1,1,1)
triangulo.obtenerNombre()