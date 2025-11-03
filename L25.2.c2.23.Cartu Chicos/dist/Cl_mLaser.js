import Cl_mImpresora from "./Cl_mImpresora.js";
export default class Cl_mLaser extends Cl_mImpresora {
    constructor({ cantToner = 0, id = 0 }) {
        super({ id });
        this._cantToner = 0;
        this.cantToner = cantToner;
    }
    set cantToner(cantToner) {
        this._cantToner = cantToner;
    }
    get cantToner() {
        return this._cantToner;
    }
    precioPagarRecarga() {
        if (this.cantToner === 1) {
            return 50;
        }
        if (this.cantToner > 1) {
            return this.cantToner * 30;
        }
        else
            return 0;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { cantToner: this.cantToner });
    }
}
