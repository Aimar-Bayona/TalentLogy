/*Realizar un programa que tenga una clase Persona con las siguientes características. La clase tendrá como atributos el nombre y la edad de una persona. Implementar los métodos necesarios para inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.*/

class Persona {

    setNombre(nombre) {
        this.nombre = nombre
    }

    getNombre() {
        return this.nombre
    }

    setEdad(edad) {
        this.edad = edad
    }

    getEdad() {
        return this.edad
    }

    esMayor(){
        return this.edad >= 18
    }

    mostrar(){
        console.log(`${this.getNombre()} tiene una edad de ${this.getEdad()} y ${this.esMayor()}`);
    }
}

let persona = new Persona()
persona.setNombre("Aimar")
persona.setEdad(22)
persona.mostrar()