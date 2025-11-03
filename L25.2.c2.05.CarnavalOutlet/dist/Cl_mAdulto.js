import Cl_mDisfraz from "./Cl_mDisfraz.js";

export default class Cl_mAdulto extends Cl_mDisfraz {

    constructor({sexo="", codigo, nombre, talla, precio}) {
        super({codigo, nombre, talla, precio});
        this.sexo = sexo;
    }

    set sexo(sexo) {
        this._sexo = sexo;
    }
    get sexo() {
        return this._sexo;
    }
    precioFinal() {
        switch (this.sexo) {
            case "M":
                return this.precio * 1.1;
            case "F":
                return this.precio-this.precio * 0.20;
            default:
                return this.precio;
        }
    }
    toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { sexo: this.sexo });
    };
    }
