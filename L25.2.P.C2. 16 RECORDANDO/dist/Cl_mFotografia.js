import Cl_mPromocion from './Cl_mPromocion.js';

export default class Cl_mFotografia extends Cl_mPromocion{
    constructor({tipoF,codigo,costo}){
        super({codigo,costo});
            this.tipoF= tipoF;
        
    }
    set tipoF(tipoF){
        this._tipoF= tipoF;
    }
    get tipoF(){
        return this._tipoF;
    }
    descuento(){
        if(this.tipoF==="D"){
            return this.costo* 0.18;
        } else 
            return 0;
    }
    incremento(){
        if(this.tipoF==="I" ){
            return this.costo* 0.13;
        }else
            return 0;
    }
    precioF() {
        return this.costo-this.descuento()+this.incremento();
    }
    toJSON() {
        return Object.assign(Object.assign({}, super.toJSON()), { tipoF: this.tipoF, descuento: this.descuento(),
    incremento: this.incremento(),
    precioF: this.precioF() });
    }
}