export default class Cl_mPromocion {
    constructor({ codigo, costo, esUrgente }) {
        this._codigo = "";
        this._costo = 0;
        this._esUrgente = true || false;
        this.codigo = codigo;
        this.costo = costo;
        this.esUrgente = esUrgente;
    }
    set codigo(codigo) {
        this._codigo = codigo;
    }
    get codigo() {
        return this._codigo;
    }
    set costo(costo) {
        this._costo = +costo;
    }
    get costo() {
        return this._costo;
    }
    set esUrgente(esUrgente) {
        this._esUrgente = esUrgente;
    }
    get esUrgente() {
        return this._esUrgente;
    }
    descuento() {
        return 0;
    }
    incremento() {
        return 0;
    }
    edicionEspecial() {
        return 0;
    }
    precioF() {
        return 0;
    }
    toJSON() {
        return {
            codigo: this.codigo,
            costo: this.costo,
            esUrgente: this.esUrgente,
            descuento: this.descuento(),
            incremento: this.incremento(),
            edicionEspecial: this.edicionEspecial(),
            precioF: this.precioF(),
        };
    }
}
