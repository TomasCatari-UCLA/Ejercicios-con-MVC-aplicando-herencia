import Cl_mPromocion from './Cl_mPromocion.js';
export default class Cl_mFotografia extends Cl_mPromocion {
    constructor({ tipoF, codigo, costo, esUrgente }) {
        super({ codigo, costo, esUrgente });
        this._tipoF = "";
        this.tipoF = tipoF;
    }
    set tipoF(tipoF) {
        this._tipoF = tipoF;
    }
    get tipoF() {
        return this._tipoF;
    }
    descuento() {
        if (this.tipoF === "D") {
            return this.costo * 0.18;
        }
        else
            return 0;
    }
    incremento() {
        if (this.tipoF === "I") {
            return this.costo * 0.13;
        }
        else
            return 0;
    }
    precioF() {
        if (this.esUrgente === true) {
            return (this.costo + this.incremento() - this.descuento()) * 1.25;
        }
        else
            return this.costo + this.incremento() - this.descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tipoF: this.tipoF });
    }
}
