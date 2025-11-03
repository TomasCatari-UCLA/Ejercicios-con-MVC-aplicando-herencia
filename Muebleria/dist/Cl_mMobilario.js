export default class Cl_mMobilario {
    constructor({ madera, factura }) {
        this._madera = 0;
        this._factura = 0;
        this.madera = madera;
        this.factura = factura;
    }
    set madera(madera) {
        this._madera = +madera;
    }
    get madera() {
        return this._madera;
    }
    set factura(factura) {
        this._factura = factura;
    }
    get factura() {
        return this._factura;
    }
    precio() {
        return 0;
    }
    incremento() {
        return 0;
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
        return 0;
    }
    toJSON() {
        return {
            madera: this.madera,
            factura: this.factura,
            precio: this.precio(),
            incremento: this.incremento(),
            precioM3: this.precioM3(),
            m3: this.m3(),
        };
    }
}
