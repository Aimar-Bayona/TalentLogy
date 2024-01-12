/*Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un mensaje con el resultado de la nota y si ha aprobado o no.´*/

class Alumno {

    setNombre(nombre) {
        this.nombre = nombre
    }

    getNombre() {
        return this.nombre
    }

    setNota(nota) {
        this.nota = nota
    }

    getNota() {
        return this.nota
    }

    resultado() {
        return this.getNota() > 3
    }

    mostrar() {
        console.log("El estudiante " + this.getNombre() + " con la nota " + this.getNota() + " obtuvo un resultado " + this.resultado());
    }

}

let alumno = new Alumno()
alumno.setNombre("Aimar")
alumno.setNota(2)
alumno.mostrar()