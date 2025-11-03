export default class Cl_mPersona {
    constructor({ cedula, nombre, edad, sexo, edoCivil }) {
        this._cedula = "";
        this._nombre = "";
        this._edad = 0;
        this._sexo = "";
        this._edoCivil = 0;
        this.cedula = cedula;
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.edoCivil = edoCivil;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(edad) {
        this._edad = edad;
    }
    get edad() {
        return this._edad;
    }
    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    set edoCivil(edoCivil) {
        this._edoCivil = edoCivil;
    }
    get edoCivil() {
        return this._edoCivil;
    }
    porcAprobado() {
        return 0;
    }
    toJSON() {
        return {
            cedula: this.cedula,
            nombre: this.nombre,
            edad: this.edad,
            sexo: this.sexo,
            edoCivil: this.edoCivil,
            porcAprobado: this.porcAprobado(),
        };
    }
}
