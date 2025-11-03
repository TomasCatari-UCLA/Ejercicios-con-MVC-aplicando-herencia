import Cl_mPrestamo from "./Cl_mPrestamo.js";
export default class Cl_mVehiculo extends Cl_mPrestamo {
    constructor({ cedula, estadoCivil, modelo = "" }) {
        super({ cedula, estadoCivil, montoPrestamo: 0 });
        this._modelo = "";
        this.modelo = modelo;
        this.montoPrestamo = this.montoPrestamoMod();
    }
    set modelo(modelo) {
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    montoPrestamoMod() {
        if (this.modelo === "N" || this.modelo === "n") {
            return 5000;
        }
        ;
        if (this.modelo === "U" || this.modelo === "u") {
            return 3000;
        }
        ;
        if (this.modelo === "V" || this.modelo === "v") {
            return 1000;
        }
        ;
        return 0;
    }
    montoFinalP() {
        if (this.estadoCivil === "C" || this.estadoCivil === "c") {
            return (this.montoPrestamoMod() * 0.10) + this.montoPrestamoMod();
        }
        if (this.estadoCivil === "D" || this.estadoCivil === "d" || this.estadoCivil === "S" || this.estadoCivil === "s") {
            return (this.montoPrestamoMod() * 0) + this.montoPrestamoMod();
        }
        else
            return 0;
    }
    intereses() {
        return this.montoFinalP() * 0.20;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { modelo: this.modelo });
    }
}
