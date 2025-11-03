export default class Cl_mPrestamo {
    constructor({ cedula, estadoCivil, montoPrestamo, }) {
        this._cedula = "";
        this._estadoCivil = "";
        this._montoPrestamo = 0;
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
        this.montoPrestamo = montoPrestamo;
    }
    set cedula(cedula) {
        this._cedula = cedula;
    }
    get cedula() {
        return this._cedula;
    }
    set estadoCivil(estadoCivil) {
        this._estadoCivil = estadoCivil;
    }
    get estadoCivil() {
        return this._estadoCivil;
    }
    set montoPrestamo(montoPrestamo) {
        this._montoPrestamo = +montoPrestamo;
    }
    get montoPrestamo() {
        return this._montoPrestamo;
    }
    montoFinalP() {
        return 0;
    }
    intereses() {
        return 0;
    }
    interesNoP() {
        return 0; //aa
    }
    toJSON() {
        return {
            cedula: this.cedula,
            estadoCivil: this.estadoCivil,
            montoPrestamo: this.montoPrestamo,
            montoFinalP: this.montoFinalP(),
            intereses: this.intereses(),
            InteresesNoPercibidos: this.interesNoP() //aa
        };
    }
}
