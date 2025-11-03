import Cl_mMobilario from "./Cl_mMobilario.js";

export default class Cl_mMueble extends Cl_mMobilario{
    private _tela: number = 0;

    constructor({madera,factura,tela}:{madera:number; factura:number; tela:number}) {
        super({madera,factura});
        this.tela = tela;
    }

    set tela(tela: number) {
        this._tela = +tela;
    }

    get tela(): number {
        return this._tela;
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

        m3(): number{
            return 1.0;
        }

    condicionIncremento():number{
        if (this.tela == 1){
            return 0.20;
        }
        else if (this.tela == 2){
            return 0.30;
    }
    else if (this.tela == 3){
        return 0.40;
}
    else return 0;
    }
    incremento() {
        return this.precioM3() * this.condicionIncremento()
    }

    precio(): number {
        return this.precioM3() + this.incremento();
    }

     toJSON() {
        return {
           ...super.toJSON(),
            tela: this.tela,
        };
    }
}