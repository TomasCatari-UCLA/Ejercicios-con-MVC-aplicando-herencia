export default class Cl_mPaquete {
    constructor({ Codigo, Costo, }) {
        this._Codigo = 0;
        this._Costo = 0;
        this.Codigo = Codigo;
        this.Costo = Costo;
    }
    set Codigo(Codigo) {
        this._Codigo = +Codigo;
    }
    get Codigo() {
        return this._Codigo;
    }
    set Costo(Costo) {
        this._Costo = +Costo;
    }
    get Costo() {
        return this._Costo;
    }
    Descuento() {
        return 0;
    }
    Total() {
        return 0;
    }
    toJSON() {
        return {
            Codigo: this.Codigo,
            Costo: this.Costo,
            Descuento: this.Descuento(),
            Total: this.Total(),
        };
    }
}
