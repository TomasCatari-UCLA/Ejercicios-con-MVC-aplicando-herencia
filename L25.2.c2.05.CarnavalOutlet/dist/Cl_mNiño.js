import Cl_mDisfraz from "./Cl_mDisfraz.js";

export default class Cl_mNiño extends Cl_mDisfraz{

    constructor({accesorio, codigo, nombre, talla, precio}
    ) {
        super({codigo, nombre, talla, precio});
        this.accesorio = accesorio;
    }
    set accesorio(accesorio) {
        this._accesorio = accesorio;
    }
    get accesorio(){
        return this._accesorio;
    }
    precioFinal(){
        if (this.accesorio === "si") {
            return this.precio-this.precio * 0.25 ;
        } else {
            return this.precio;
        }
    }
    toJSON() {
    return Object.assign(Object.assign({}, super.toJSON()), { accesorio: this.accesorio });
    };
    };
  
