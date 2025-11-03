import Cl_mMobilario from "./Cl_mMobilario.js";

export default class Cl_mComedor extends Cl_mMobilario{
    private _sillas: number = 0;

    constructor({madera, factura, sillas}:{madera:number; factura:number; sillas:number}){
        super({madera, factura});
        this.sillas = sillas;
    }

    set sillas(sillas:number) {
        this._sillas = +sillas;
    }

    get sillas(): number {
        return this._sillas;
    }
precioM3(): number {
        if (this.madera == 1){
            return 500;
        }
        else if (this.madera == 2){
            return 300;
        }
        else return 0;
        
        }
    m3(): number {
        return 0.5 +(this.sillas * 0.1);
    }

incremento() { return 0 }

    precio(): number {
        return this.precioM3() * this.m3();
    }
    toJSON() {
        return {
           ...super.toJSON(),
            sillas: this.sillas,
        };
    }
}