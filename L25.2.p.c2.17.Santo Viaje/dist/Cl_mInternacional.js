import Cl_mPaquete from "./Cl_mPaquete.js";
export default class Cl_mInternacional extends Cl_mPaquete {
    constructor({ Codigo, Costo, }) {
        super({ Codigo, Costo, });
    }
    Descuento() {
        return (this.Costo * 0.15);
    }
    Total() {
        return this.Costo - this.Descuento();
    }
    Internacional() {
        return true;
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { internacionales: this.Internacional() });
    }
}
