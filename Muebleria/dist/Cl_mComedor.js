import Cl_mMobilario from "./Cl_mMobilario.js";
export default class Cl_mComedor extends Cl_mMobilario {
    constructor({ madera, factura, sillas }) {
        super({ madera, factura });
        this._sillas = 0;
        this.sillas = sillas;
    }
    set sillas(sillas) {
        this._sillas = +sillas;
    }
    get sillas() {
        return this._sillas;
    }
    precioM3() {
        if (this.madera == 1) {
            return 500;
        }
        else if (this.madera == 2) {
            return 300;
        }
        else
            return 0;
    }
    m3() {
        return 0.5 + (this.sillas * 0.1);
    }
    incremento() { return 0; }
    precio() {
        return this.precioM3() * this.m3();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { sillas: this.sillas });
    }
}
