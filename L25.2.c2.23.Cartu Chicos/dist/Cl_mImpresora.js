export default class Cl_mImpresora {
    constructor({ id }) {
        this._id = 0;
        this.id = id;
    }
    set id(id) {
        this._id = id;
    }
    get id() {
        return +this._id;
    }
    precioPagarRecarga() {
        return 0;
    }
    toJSON() {
        return {
            id: this.id,
            precioPagarRecarga: this.precioPagarRecarga(),
        };
    }
}
