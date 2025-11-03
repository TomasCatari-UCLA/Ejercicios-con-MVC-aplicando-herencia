import Cl_mPaquete from "./Cl_mPaquete.js";
export default class Cl_mNacional extends Cl_mPaquete {
    constructor({ Codigo, Costo, Destino, }) {
        super({ Codigo, Costo, });
        this._Destino = 0;
        this.Destino = Destino;
        // this.modelo = this.montoPaqueteMod();
    }
    set Destino(Destino) {
        this._Destino = Destino;
    }
    get Destino() {
        return this._Destino;
    }
    // 1: Playa 0%.. 2:Montaña 10%
    Descuento() {
        if (this.Destino == 1) {
            return 0;
        }
        else if (this.Destino == 2) {
            return this.Costo * 0.10;
        }
        else
            return 0;
    }
    Total() {
        return this.Costo - this.Descuento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { Destino: this.Destino });
    }
}
