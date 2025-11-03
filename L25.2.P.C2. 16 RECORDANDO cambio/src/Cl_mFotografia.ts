import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mFotografia extends Cl_mPromocion{
    public _tipoF : string ="";
    constructor({tipoF,codigo,costo,esUrgente}:{
        tipoF: string;
        codigo: string;
        costo: number;
        esUrgente:boolean;
    }){
        super({codigo,costo,esUrgente});
            this.tipoF= tipoF;
        
    }
    set tipoF(tipoF:string){
        this._tipoF= tipoF;
    }
    get tipoF():string{
        return this._tipoF;
    }
    descuento():number{
        if(this.tipoF==="D"){
            return this.costo* 0.18;
        } else 
            return 0;
    }
    incremento():number{
        if(this.tipoF==="I"){
            return this.costo* 0.13;
        }else
            return 0;
    }
    precioF(): number {
        if(this.esUrgente===true){
        return (this.costo+this.incremento()-this.descuento())*1.25;
    } else return this.costo+this.incremento()-this.descuento();}
    toJSON() {
    return {
      ...super.toJSON(),
      tipoF: this.tipoF,
    };
  }
}