import Cl_mPromocion from './Cl_mPromocion.js';
export default class Cl_mVideo extends Cl_mPromocion {
    constructor({ hD, codigo, costo, esUrgente }) {
        super({ codigo, costo, esUrgente });
        this._hD = "";
        this.hD = hD;
    }
    set hD(hD) {
        this._hD = hD;
    }
    get hD() {
        return this._hD;
    }
    descuento() {
        return 0;
    }
    incremento() {
        if (this.hD === "Si") {
            return this.costo * 0.20;
        }
        else
            return 0;
    }
    edicionEspecial() {
        if (this.hD === "Si" && this.costo >= 250) {
            return 50;
        }
        else
            return 0;
    }
    precioF() {
        if (this.esUrgente === true) {
            return (this.costo + this.incremento() + this.edicionEspecial() - this.descuento()) * 1.25;
        }
        else
            return this.costo + this.incremento() + this.edicionEspecial() - this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { hD: this.hD });
    }
}
