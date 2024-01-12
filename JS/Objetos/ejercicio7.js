/*Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono y el email. Además deberá mostrar un menú con las siguientes opciones

    Añadir contacto
    Lista de contactos
    Buscar contacto
    Editar contacto
    Cerrar agenda*/

class Agenda {
    constructor() {
        this.nombres = []
        this.telefonos = []
        this.correos = []
    }

    agregarContacto(nombre, telefono, correo) {
        this.nombres.push(nombre)
        this.telefonos.push(telefono)
        this.correos.push(correo)
    }

    listarContactos() {
        for (let i = 0; i < this.nombres.length; i++) {
            console.log(`Nombre: ${this.nombres[i]}\nTeléfono: ${this.telefonos[i]}\nCorreo: ${this.correos[i]}\n`)
        }
    }

    buscarContacto(nombre) {
        const indice = this.nombres.findIndex(contacto => nombre === contacto)
        return this.mostrarContacto(indice)
    }

    mostrarContacto(indice) {
        console.log("Consulta del contacto")
        if (indice !== -1) {
            console.log(`Nombre: ${this.nombres[indice]}\nTeléfono: ${this.telefonos[indice]}\nCorreo: ${this.correos[indice]}`)
        } else {
            console.log("Contacto no encontrado")
        }
    }

    editarContacto(nombre, nuevoTelefono, nuevoCorreo) {
        const indice = this.nombres.findIndex(contacto => nombre === contacto)
        if (indice !== -1) {
            this.telefonos[indice] = nuevoTelefono
            this.correos[indice] = nuevoCorreo

            console.log(`Contacto ${nombre} editado exitosamente.`)
        } else {
            console.log("Contacto no encontrado.")
        }
    }
}

let agenda = new Agenda()
let opcion = 0

do {
    opcion = parseInt(prompt("Seleccione una opción\n1. Agregar contacto\n2. Listar los contactos\n3. Buscar contacto\n4. Editar contacto\n0. Cerrar agenda"))

    switch (opcion) {
        case 1:
            let nombre = prompt("Ingrese el nombre del contacto:")
            let telefono = prompt("Ingrese el teléfono del contacto:")
            let correo = prompt("Ingrese el correo del contacto:")
            agenda.agregarContacto(nombre, telefono, correo)
            break
        case 2:
            agenda.listarContactos()
            break
        case 3:
            let nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:")
            agenda.buscarContacto(nombreBuscar)
            break
        case 4:
            let nombreEditar = prompt("Ingrese el nombre del contacto a editar:")
            let nuevoTelefono = prompt("Ingrese el nuevo teléfono del contacto:")
            let nuevoCorreo = prompt("Ingrese el nuevo correo del contacto:")
            agenda.editarContacto(nombreEditar, nuevoTelefono, nuevoCorreo)
            break
        default:
            break
    }
} while (opcion > 0 && opcion <= 4)
