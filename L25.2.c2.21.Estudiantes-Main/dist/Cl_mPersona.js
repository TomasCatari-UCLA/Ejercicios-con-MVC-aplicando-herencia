export default class Cl_mPersona {
    constructor({ nombre = "", cedula = "", edad = 0, sexo = "", estadoCivil = 0 }) {
        this._nombre = "";
        this._cedula = "";
        this._edad = 0;
        this._sexo = "";
        this._estadoCivil = 0;
        this.nombre = nombre;
        this.cedula = cedula;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    set nombre(nombre) { this._nombre = nombre; }
    get nombre() { return this._nombre; }
    set cedula(cedula) { this._cedula = cedula; }
    get cedula() { return this._cedula; }
    set edad(edad) { this._edad = edad; }
    get edad() { return +this._edad; }
    set sexo(sexo) { this._sexo = sexo; }
    get sexo() { return this._sexo; }
    set estadoCivil(estadoCivil) { this._estadoCivil = estadoCivil; }
    get estadoCivil() { return +this._estadoCivil; }
    solicitudBeca() { return ""; }
    toJSON() {
        return {
            nombre: this.nombre,
            cedula: this.cedula,
            edad: this.edad,
            sexo: this.sexo,
            estadoCivil: this.estadoCivil,
            solicitudBeca: this.solicitudBeca(),
        };
    }
}
