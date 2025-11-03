import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mVideo extends Cl_mPromocion{
    public _hD : string ="";
    constructor({hD,codigo,costo,esUrgente}:{
        hD: string;
        codigo: string;
        costo: number;
        esUrgente: boolean;
    }){
        super({codigo,costo,esUrgente});
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
    edicionEspecial():number{
        if(this.hD=== "Si"&&this.costo>=250 ){
            return 50;
        } else return 0;
    }
    precioF(): number {
        if(this.esUrgente===true){
            return (this.costo+this.incremento()+ this.edicionEspecial()-this.descuento())*1.25;}
        else
          return this.costo+this.incremento()+this.edicionEspecial()-this.descuento();
    }
    toJSON() {
    return {
      ...super.toJSON(),
      hD: this.hD,
    };
  }

}