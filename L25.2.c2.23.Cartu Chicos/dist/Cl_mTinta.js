import Cl_mImpresora from "./Cl_mImpresora.js";
export default class Cl_mTinta extends Cl_mImpresora {
    constructor({ tipoTinta = 0, id = 0 }) {
        super({ id });
        this._tipoTinta = 0;
        this.tipoTinta = tipoTinta;
    }
    set tipoTinta(tipoTinta) {
        this._tipoTinta = tipoTinta;
    }
    get tipoTinta() {
        return this._tipoTinta;
    }
    precioPagarRecarga() {
        if (this.tipoTinta === 1) {
            return 20;
        }
        if (this.tipoTinta === 2) {
            return 25;
        }
        else
            return 0;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tipoTinta: this.tipoTinta });
    }
}
