import Cl_mDisfraz from "./Cl_mDisfraz.js";

export default class Cl_mNiño extends Cl_mDisfraz{
    public _accesorio: string = "";

    constructor({accesorio, codigo, nombre, talla, precio}: {
        accesorio: string;
        codigo: string;
        nombre: string;
        talla: string;
        precio: number;
    }) {
        super({codigo, nombre, talla, precio});
        this.accesorio = accesorio;
    }
    set accesorio(accesorio: string) {
        this._accesorio = accesorio;
    }
    get accesorio(): string {
        return this._accesorio;
    }
    precioFinal(): number {
        if (this.accesorio === "si") {
            return (this.precio * 0.25) + this.precio;
        } else {
            return this.precio;
        }
    }
    toJSON() {
    return {
      ...super.toJSON(),
      accesorio: this.accesorio,
    };
  }
}