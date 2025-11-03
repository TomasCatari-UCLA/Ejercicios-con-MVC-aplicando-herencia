import Cl_mComedor from "./Cl_mComedor.js";
import Cl_mMueble from "./Cl_mMueble.js";
export default class Cl_mMuebleria {
    constructor() {
        this.cntMobilario = 0;
        this.cntComedor = 0;
        this.acmPrecio = 0;
        this.acMuebles = 0;
        this.acComedor = 0;
    }
    procesarMobilario(Mobilario) {
        this.cntMobilario++;
        this.acmPrecio += Mobilario.precioM3();
        if (Mobilario instanceof Cl_mComedor) {
            this.cntComedor++;
        }
        if (Mobilario instanceof Cl_mComedor) {
            this.acComedor += Mobilario.precio();
        }
        if (Mobilario instanceof Cl_mMueble) {
            this.acMuebles += Mobilario.precio();
        }
    }
    porcentajeComedor() {
        return (this.cntComedor / this.cntMobilario) * 100;
    }
    totalVendido() {
        return this.acmPrecio;
    }
    mayorVendido() {
        if (this.acComedor > this.acMuebles) {
            return "Los comedores proporcionan mas dinero";
        }
        else if (this.acMuebles > this.acComedor) {
            return "Los Muebles proporcionan mas dinero";
        }
        else if (this.acMuebles = this.acComedor) {
            return "Tanto Muebles y Comedores son igual de vendidos";
        }
        else
            return "";
    }
}
