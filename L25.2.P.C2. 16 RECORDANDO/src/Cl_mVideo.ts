import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mVideo extends Cl_mPromocion{
    public _hD : string ="";
    constructor({hD,codigo,costo}:{
        hD: string;
        codigo: string;
        costo: number;
    }){
        super({codigo,costo});
            this.hD= hD;
        
    }
    set hD(hD:string){
        this._hD= hD;
    }
    get hD():string{
        return this._hD;
    }
    descuento():number{
        return 0;
    }
    incremento():number{
        if(this.hD==="Si"){
            return this.costo* 0.20;
        }else
            return 0;
    }
    precioF(): number {
        return this.costo+this.incremento()-this.descuento();
    }
    toJSON() {
    return {
      ...super.toJSON(),
      hD: this.hD,
    };
  }

}