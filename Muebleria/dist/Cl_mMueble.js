import Cl_mMobilario from "./Cl_mMobilario.js";
export default class Cl_mMueble extends Cl_mMobilario {
    constructor({ madera, factura, tela }) {
        super({ madera, factura });
        this._tela = 0;
        this.tela = tela;
    }
    set tela(tela) {
        this._tela = +tela;
    }
    get tela() {
        return this._tela;
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
        return 1.0;
    }
    condicionIncremento() {
        if (this.tela == 1) {
            return 0.20;
        }
        else if (this.tela == 2) {
            return 0.30;
        }
        else if (this.tela == 3) {
            return 0.40;
        }
        else
            return 0;
    }
    incremento() {
        return this.precioM3() * this.condicionIncremento();
    }
    precio() {
        return this.precioM3() + this.incremento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tela: this.tela });
    }
}
