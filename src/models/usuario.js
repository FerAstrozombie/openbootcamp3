
export class Usuario {
    name = "";
    apellido = "";
    conectado = true;

    constructor(nombre, apellido, conectado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.conectado = conectado;
    }
}