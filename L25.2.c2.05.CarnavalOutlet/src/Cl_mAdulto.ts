import Cl_mDisfraz from "./Cl_mDisfraz.js";

export default class Cl_mAdulto extends Cl_mDisfraz {
    public _sexo: string = "";

    constructor({sexo="", codigo, nombre, talla, precio}: {
        sexo: string;
        codigo: string;
        nombre: string;
        talla: string;
        precio: number;
    }) {
        super({codigo, nombre, talla, precio});
        this.sexo = sexo;
    }
    set sexo(sexo: string) {
        this._sexo = sexo;
    }
    get sexo(): string {
        return this._sexo;
    }
    precioFinal(): number {
        switch (this.sexo) {
            case "M":
                return this.precio * 1.1;
            case "F":
                return (this.precio * 0.20)+this.precio;
            default:
                return this.precio;
        }
    }
    toJSON() {
    return {
      ...super.toJSON(),
      sexo: this.sexo,
    };
    }
}